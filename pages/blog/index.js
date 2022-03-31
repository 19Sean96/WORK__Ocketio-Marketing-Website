import BlogLayout from "../../components/BlogLayout";
import axios from "axios";
import Head from "../../components/Pages.Head/Blog";
import { WaveBot } from "../../components/Site.Graphics/Waves/BlogHero";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "../../Context";
import Compass from "../../components/Site.Blog/Compass";
import { useRouter } from "next/router";
import Filter from "../../components/Site.Blog/Filter";
import { useState, useEffect } from 'react'

const animateOnce = true;
export default function Blog({ blog_posts }) {
  const [ filteredBlogList, setFilteredBlogList ] = useState([...blog_posts])
  const [ activeCategory, setActiveCategory ] = useState('all')
  const { isMobile } = useAppContext();
  const router = useRouter();

  console.log(filteredBlogList)
  useEffect(() => {
    const blogs = [...blog_posts]

    if (activeCategory === 'all') { setFilteredBlogList(blogs) }
    else if (activeCategory === 'tutorials') { setFilteredBlogList(blogs.filter(blog => blog.all_categories.includes('tutorial')))}
    else if (activeCategory === 'latest') { setFilteredBlogList(blogs.filter(blog => {
      const now = new Date()
      const blogDate = new Date(blog?.date_updated ? blog.date_updated : blog.date_created)
      console.log('NOW: ', now);
      console.log('BLOG DATE: ', blogDate, 'OLD: ', blog.date_updated)

      const diff = ( ( ( now.getTime() - blogDate.getTime() ) / 1000 ) / 60 ) / 60
      console.log(diff)
      return diff < 6
    }))}
    else if (activeCategory === 'news') { setFilteredBlogList(blogs.filter(blog => blog.all_categories.includes('news')))}
    else if (activeCategory === 'product-updates') {{ setFilteredBlogList(blogs.filter(blog => blog.all_categories.includes('product')))}}

  }, [activeCategory])

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
            <Filter 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </section>
        </ContentWrapper>
        <BlogLayout blogPosts={filteredBlogList} />
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
