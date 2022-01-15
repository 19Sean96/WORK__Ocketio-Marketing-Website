import axios from "axios";
import { useRouter } from "next/router";
import ReactHtmlParser from "react-html-parser";

const Blog = ({ blog_posts }) => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const blog = blog_posts[blog_posts.findIndex(n => n.id == id)]

  return <>{ReactHtmlParser(blog.post_body)}</>;
};

export default Blog;

export async function getStaticPaths() {
  const { DIRECTUS_CMS_ACCESS_KEY, DIRECTUS_CMS_URL } = process.env;
  const blogURI = `${DIRECTUS_CMS_URL}/items/Blog_Posts?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;
  
  const result = await axios({
    url: blogURI,
    json: true
  })

  const paths = result.data.data.map(post => ({
    params: { id: `${post.id}` }
  }))

  return { paths, fallback: false } 
}

export async function getStaticProps() {
  const { DIRECTUS_CMS_ACCESS_KEY, DIRECTUS_CMS_URL } = process.env;
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

  } catch (err) { error = err.response } finally {
    if (!error) {
      const blog_posts = response.data.data;

      return {
        props: {
          blog_posts,
        },
      };
    } else return
  }
}
