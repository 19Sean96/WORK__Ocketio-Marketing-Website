import React from "react";
import * as fs from "fs";
import axios from "axios";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.THIS_URL;
  const dynamicPaths = [];

  // GET STATIC PATHS
  const staticPaths = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "api",
        "_app.js",
        "_document.js",
        "_error.js",
        "404.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath, i) => {
      console.log(`Static Path #${i + 1}: ${staticPagePath}`);
      staticPagePath = staticPagePath === "index.js" ? "" : staticPagePath;
      return `${BASE_URL}/${staticPagePath}`;
    });

  // GET DYNAMIC PATHS
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;

  // ----- GET '[...slug]'
  const postsURI = `${DIRECTUS_CMS_URL}/items/all_posts?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;

  const postsResult = await axios({
    url: postsURI,
    json: true,
  });

  const postsPaths = postsResult.data.data.map((post) => {
    return {
      path: `${BASE_URL}/${post.main_category}/${post.url_slug}`,
      updated: post.date_updated,
    };
  });

  // ----- GET '[category]
  const catsURI = `${DIRECTUS_CMS_URL}/items/blog_categories?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;
  const catsResult = await axios({
    url: catsURI,
    json: true,
  });

  const catsPaths = catsResult.data.data.map(
    (category) => `${BASE_URL}/${category.id}`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPaths
          .map((url) => {
            return `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${new Date().toISOString()}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>
                    </url>
                `;
          })
          .join("")}

          ${catsPaths
            .map((url) => {
              return `
                      <url>
                          <loc>${url}</loc>
                          <lastmod>${new Date().toISOString()}</lastmod>
                          <changefreq>monthly</changefreq>
                          <priority>1.0</priority>
                      </url>
                  `;
            })
            .join("")}

          ${postsPaths.map((url) => {
            return `
                    <url>
                        <loc>${url.path}</loc>
                        <lastmod>${url.updated}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>1.0</priority>                    
                    </url>
                `;
          })}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
