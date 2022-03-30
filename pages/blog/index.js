import BlogLayout from "../../components/BlogLayout";
import axios from "axios";
import Head from "../../components/Pages.Head/Blog";
import { WaveBot } from "../../components/Site.Graphics/Waves/BlogHero";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "../../Context";
import Compass from "../../components/Site.Blog/Compass";
import { useRouter } from "next/router";
const animateOnce = true;
export default function Blog({ blog_posts }) {
  const { isMobile } = useAppContext();
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head />
      <main className="main" id="blogRoot">
        <div className="full-width_wrapper navy-bg" id="heading">
          <ContentWrapper>
            <Compass />
            <section className="section section__with-grid section__with-max-width_95vw all-columns">
              <ScrollAnimation
                animateIn={
                  isMobile ? "animate__fadeInUp" : "animate__fadeInDown"
                }
                duration={0.44}
                offset={-186}
                animateOnce={animateOnce}
                className="section--heading"
              >
                <h2 className="h2">Blog</h2>
                <p className="p-small">
                  Check out our set up guides, keep up with the latest WireWise
                  news and more
                </p>
              </ScrollAnimation>
            </section>
          </ContentWrapper>
          <WaveBot />
        </div>
        <ContentWrapper>
          <section
            id="blogRootContent"
            className="section section__with-grid all-columns section__with-max-width_95vw"
          >
            <div className="filter-row">
              <ul className="nav-filter">
                <li className="nav-filter__item">Tutorials</li>
                <li className="nav-filter__item">Latest</li>
                <li className="nav-filter__item">News</li>
                <li className="nav-filter__item">Product Updates</li>
              </ul>
              <aside className="search-filter">
                <p>live search box goes here</p>
              </aside>
            </div>
          </section>
        </ContentWrapper>
        <BlogLayout blogPosts={blog_posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;

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

    console.log(response.data);
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
