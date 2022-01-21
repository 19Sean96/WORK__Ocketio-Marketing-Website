import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import readingTime from "reading-time";
import ReactHtmlParser from "react-html-parser";
import ContentWrapper from "../../components/ContentWrapper";
const Blog = ({ blog_posts }) => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  const blog = blog_posts[blog_posts.findIndex((n) => n.id == id)];
  const formatDate = (date) =>
    new Date(date).toLocaleDateString(
      {},
      {
        timeZone: "UTC",
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    );
  const readStats = readingTime(blog.post_body);

  return (
    <ContentWrapper>
      <section className="section all-columns" id="blogPage">
        <div className="section--heading">
          <div className="text">
            <h2 className="h2">{blog.post_title}</h2>
            <p className="p-small blog--info">
              <span className="blog--date">
                {formatDate(blog.date_created)} -{" "}
              </span>
              <span className="blog--time-to-read">{readStats.text}</span>
              {blog.date_updated && (
                <p className="blog--date__updated italic">
                  Updated {formatDate(blog.date_updated)}
                </p>
              )}
            </p>
          </div>
          <div className="blog--img__wrapper">
            <Image
              src={`http://143.198.146.26/assets/${blog.post_img}`}
              layout="fill"
              className="blog--img"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="section--body">{ReactHtmlParser(blog.post_body)}</div>
      </section>
    </ContentWrapper>
  );
};

export default Blog;

export async function getStaticPaths() {
  const { DIRECTUS_CMS_ACCESS_KEY, DIRECTUS_CMS_URL } = process.env;
  const blogURI = `${DIRECTUS_CMS_URL}/items/Blog_Posts?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;

  const result = await axios({
    url: blogURI,
    json: true,
  });

  const paths = result.data.data.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return { paths, fallback: false };
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
  } catch (err) {
    error = err.response;
  } finally {
    if (!error) {
      const blog_posts = response.data.data;

      return {
        props: {
          blog_posts,
        },
      };
    } else return;
  }
}
