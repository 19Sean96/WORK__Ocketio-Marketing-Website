import axios from "axios";
import BlogLayout from '../../../components/BlogLayout'
export default function Walkthrough({ posts = null, error = false }) {
  return (
    <main className="main" id="main">
      <BlogLayout blogPosts={posts} categorySlug={'/walkthrough'}/>
    </main>
  );
}

export async function getStaticProps() {
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;

  const walkthroughsURI = `${DIRECTUS_CMS_URL}/items/Walkthroughs`;
  let response, error;

  try {
    response = await axios({
      url: walkthroughsURI,
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
      const posts = response.data.data;
      console.log("THIS IS POSTS: ", posts);
      return {
        props: {
          posts: posts,
        },
      };
    } else {
      return {
        props: {
          error,
        },
      };
    }
  }
}
