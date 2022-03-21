import axios from "axios";
import Head from '../components/Pages.Head/Homepage'
import { Hero } from "../components/Heros/homepage";
import {
  FirstBanner,
  WhoSection,
  WhatSection,
} from "../components/Body/homepage";
import EmailIntakeBanner from "../components/util/EmailIntakeBanner";
import BlogLayout from "../components/BlogLayout";
import DownloadWidget from "../components/Body/DownloadWidget";
import { useAppContext } from "../Context";

export default function Home({ blog_posts }) {
  const { scrollOffset } = useAppContext();

  return (
    <>
      <Head />
 
      <main className="main" id="main">
        <span id="vertLineCenter"></span>
        <Hero offset={scrollOffset} />
        <FirstBanner />
        <WhatSection />
        <WhoSection />
        <BlogLayout blogPosts={blog_posts} />
        <EmailIntakeBanner />
        <DownloadWidget />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;

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
