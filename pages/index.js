import { useState, useEffect } from "react";
import { Hero } from "../components/Heros/homepage";
import {
  FirstBanner,
  WhoSection,
  WhatSection,
} from "../components/Body/homepage";
import EmailIntakeBanner from "../components/util/EmailIntakeBanner";
import axios from "axios";

import { useAppContext } from "../Context";
import BlogLayout from "../components/BlogLayout";

export default function Home({ blog_posts }) {
  const { scrollOffset, handleMouseMove } = useAppContext();

  return (
    <main className="main" id="main" onMouseMove={(e) => handleMouseMove(e)}>
      <span id="vertLineCenter"></span>
      <Hero offset={scrollOffset} />
      <FirstBanner />
      <WhoSection />
      <WhatSection />
      <EmailIntakeBanner />
      <BlogLayout blogPosts={blog_posts} />
    </main>
  );
}



export async function getStaticProps() {
  const { DIRECTUS_CMS_ACCESS_KEY, DIRECTUS_CMS_URL } = process.env;
  console.log(DIRECTUS_CMS_ACCESS_KEY, DIRECTUS_CMS_URL);

  const blogURI = `${DIRECTUS_CMS_URL}/items/Blog_Posts`;
  let response, error;
  try {
    response = await axios({
      url: blogURI,
      headers: {
        Authorization: `Bearer ${DIRECTUS_CMS_ACCESS_KEY}`,
      },
      json: true,
    });

    response.status && console.log("STATUS CODE: ", response.status);
  } catch (err) {
    console.log(
      "AN ERROR HAS OCCURED. ERROR STATUS: ",
      err.response.status,
      err.response.statusText
    );
    error = err.response;
  } finally {
    if (!error) {
      const blog_posts = response.data.data;
      console.log(blog_posts);

      return {
        props: {
          blog_posts,
        },
      };
    } else
      return {
        props: {
          blog_posts: {
            error,
          },
        },
      };
  }
}
