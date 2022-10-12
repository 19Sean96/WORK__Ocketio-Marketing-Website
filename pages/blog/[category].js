import BlogLayout from "../../components/BlogLayout";
import axios from "axios";

import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "../../Context";
import Compass from "../../components/Site.Blog/Compass";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const animateOnce = true;
export default function BlogCategory({ blog_posts, params }) {
  const router = useRouter()
  // holds ARRAY of blog posts constrained by the "activeCategory"
  const [filteredBlogList, setFilteredBlogList] = useState([...blog_posts]);
  // holds STRING indicating which category of posts to show in the #blogContent
  const [activeCategory, setActiveCategory] = useState(params.category);
  // live STRING which filters which posts to show via keywords in post_title
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchUpdate = (event) => setSearchTerm(event.target.value);

  const { isMobile } = useAppContext();

  useEffect(() => {
    const blogs = [...blog_posts];

    if (activeCategory === "latest") {

      setFilteredBlogList(
        blogs.filter((blog) => {
          const now = new Date();
          const blogDate = new Date(
            blog?.date_updated ? blog.date_updated : blog.date_created
          );

          const diff = (now.getTime() - blogDate.getTime()) / 1000 / 60 / 60;

          return diff < 24 * 7;
        })
      );

      router.push(`/blog/latest`)
    } else {
      setFilteredBlogList(
        blogs.filter((blog) => blog.all_categories.includes(activeCategory))
      );

      if (activeCategory === 'all') {
        router.push('/blog')
      }
      else if (activeCategory === 'tutorials') {
        router.push(`/blog/tutorial`)
      }
    }



  }, [activeCategory, params]);

  return (
    <>
      <main className="main categoryPage" id="blogRoot">
        <div className="full-width_wrapper" id="heading">
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
                <div className="section--heading--text">
                  <h2 className="h2 capitalize">{activeCategory} Posts</h2>
                  <p className="p-small">
                    Check out our set up guides, keep up with the latest
                    WireWise news and more
                  </p>
                </div>
              </ScrollAnimation>
            </section>
          </ContentWrapper>
        </div>

        <BlogLayout blogPosts={filteredBlogList} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
  const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
  const blogURI = `${DIRECTUS_CMS_URL}/items/blog_categories?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;

  const result = await axios({
    url: blogURI,
    json: true,
  });

  const paths = result.data.data.map((category) => ({
    params: { category: category.id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
  } catch (err) {
    error = err.response;
  } finally {
    if (!error) {
      const blog_posts = response.data.data;

      return {
        props: {
          blog_posts,
          params,
        },
      };
    } else return;
  }
}
