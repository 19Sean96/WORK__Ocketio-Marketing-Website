import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import readingTime from "reading-time";
import ReactHtmlParser from "react-html-parser";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import Compass from "../../components/Site.Blog/Compass";
const animateOnce = true;

const Blog = ({ blog_posts }) => {
  const router = useRouter();
  console.log(router.query.slug)
  const blog = blog_posts[blog_posts.findIndex((n) => n.url_slug == router.query.slug[1])];
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
    <>
      <ContentWrapper>
        <section className="section all-columns" id="blogPage">
          <Compass pageName={blog.post_title}/>
          <ScrollAnimation
            animateOnce={animateOnce}
            duration={0.6}
            animateIn="animate__fadeInDown"
            className="full-width_wrapper"
          >
            <div className="section--heading">
              <div className="text">
                <ScrollAnimation
                  animateOnce={animateOnce}
                  animateIn="animate__fadeInDown"
                  duration={1.5}
                  delay={300}
                >
                  <h2 className="h2">{blog.post_title}</h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce={animateOnce}
                  animateIn="animate__fadeInUp"
                  duration={0.995}
                  delay={450}
                >
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
                </ScrollAnimation>
              </div>
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                duration={1.18}
                delay={225}
                className="blog--img__wrapper"
              >
                <Image
                  src={`https://cms.wirewise-dev.com/assets/${blog.post_img}`}
                  layout="fill"
                  className="blog--img"
                  objectFit="cover"
                />
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <div className="section--body">{ReactHtmlParser(blog.post_body)}</div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY
  const THIS_URL = process.env.THIS_URL
  const blogURI = `${DIRECTUS_CMS_URL}/items/all_posts?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;

  const result = await axios({
    url: blogURI,
    json: true,
  });

  const paths = result.data.data.map((post) => ({
    params: {slug: [ post.main_category, post.url_slug ]},
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL
  const blogURI = `${DIRECTUS_CMS_URL}/items/all_posts`;

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
