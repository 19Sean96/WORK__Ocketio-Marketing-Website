import BlogLayout from "../../components/BlogLayout";
import axios from "axios";
import Head from "../../components/Pages.Head/Blog";
import {
  WaveBot,
  WaveAlt,
} from "../../components/Site.Graphics/Waves/BlogHero";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "../../Context";
import Compass from "../../components/Site.Blog/Compass";
import { useRouter } from "next/router";
import {Filter} from "../../components/Site.Blog/Filter";
import { useState, useEffect } from "react";

const animateOnce = true;
export default function Blog({ blog_posts }) {

  // holds ARRAY of blog posts constrained by the "activeCategory"
  const [filteredBlogList, setFilteredBlogList] = useState([...blog_posts]);
  // holds STRING indicating which category of posts to show in the #blogContent
  const [activeCategory, setActiveCategory] = useState("all");
  // live STRING which filters which posts to show via keywords in post_title
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSearchUpdate = event => setSearchTerm(event.target.value)

  const { isMobile } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    const blogs = [...blog_posts];

    if (activeCategory === "all") {
      setFilteredBlogList(blogs);
    } else if (activeCategory === "tutorials") {
      setFilteredBlogList(
        blogs.filter((blog) => blog.all_categories.includes("tutorial"))
      );
    } else if (activeCategory === "latest") {
      setFilteredBlogList(
        blogs.filter((blog) => {
          const now = new Date();
          const blogDate = new Date(
            blog?.date_updated ? blog.date_updated : blog.date_created
          );
          console.log("NOW: ", now);
          console.log("BLOG DATE: ", blogDate, "OLD: ", blog.date_updated);

          const diff = (now.getTime() - blogDate.getTime()) / 1000 / 60 / 60;
          console.log(diff);
          return diff < 6;
        })
      );
    } else if (activeCategory === "news") {
      setFilteredBlogList(
        blogs.filter((blog) => blog.all_categories.includes("news"))
      );
    } else if (activeCategory === "product-updates") {
      {
        setFilteredBlogList(
          blogs.filter((blog) => blog.all_categories.includes("product"))
        );
      }
    }
  }, [activeCategory]);

  useEffect(() => {
    sendinblue.page('blog[main]', {
      'ma_title': 'Main Blog Page',
      'ma_path': '/blog'
    })
  }, [])

  return (
    <>
      <Head />
      <main className="main" id="blogRoot">
        <div className="full-width_wrapper" id="heading">
          <WaveAlt />
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
                <p className="p-large">
                  Check out our set up guides, keep up with the latest WireWise
                  news and more
                </p>
              </ScrollAnimation>
            </section>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <section
            id="blogRootContent"
            className="section section__with-grid all-columns section__with-max-width_95vw"
          >
            <Filter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              searchTerm={searchTerm}
              handleSearchUpdate={handleSearchUpdate}
            />
          </section>
        </ContentWrapper>
        <BlogLayout blogPosts={filteredBlogList} searchTerm={searchTerm}/>
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
