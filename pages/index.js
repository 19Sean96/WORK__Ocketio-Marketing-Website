import { useState, useEffect } from "react";
import { Hero } from "../components/Heros/homepage";
import Head from "next/head";
import { useRouter } from "next/router";
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
  const { DIRECTUS_CMS_URL } = process.env;

  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>
          Wirewise - We couldn't find the right VPN. So we built it.
        </title>
        <meta
          name="description"
          content="A cloud-centric software solutions that provides secure, remote access to networks you manage, whether on-prem or in the cloud."
        />

        <meta
          property="og:title"
          content="Wirewise - We couldn't find the right VPN. So we built it."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wirewise.vercel.app" />
        <meta
          property="og:image"
          content={`${DIRECTUS_CMS_URL}/assets/6172e5f8-2b3e-4ed2-b21f-dde9710c0a4c.webp`}
        />
      </Head>
      <main className="main" id="main" onMouseMove={(e) => handleMouseMove(e)}>
        <span id="vertLineCenter"></span>
        <Hero offset={scrollOffset} />
        <FirstBanner />
        <WhoSection />
        <WhatSection />
        <EmailIntakeBanner />
        <BlogLayout blogPosts={blog_posts} />
      </main>
    </>
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
