import ContentWrapper from "../ContentWrapper";
import BlogItem from "./Item";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "../../Context";

const animateOnce = true
const BlogLayout = ({ blogPosts }) => {
  const { isMobile } = useAppContext()

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns section--blog-list section__with-max-width_95vw"
        id="blogPosts"
      >
        <ScrollAnimation
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.625}
          duration={0.44}
          offset={-186}
          className="section--heading"
          animateOnce={animateOnce}
        >
          <h2 className="h2">News & Updates</h2>
        </ScrollAnimation>
        <div className="section--body">
          <div className="blogs">
            {blogPosts.map((blog, i) => (
              <BlogItem
                author={blog.post_author}
                dateWritten={
                  !blog.post_date ? blog.date_created : blog.post_date
                }
                dateUpdated={blog.date_updated}
                timeToRead={"7 min"}
                title={blog.post_title}
                body={blog.post_body}
                key={i}
                id={blog.id}
                imgId={blog.post_img}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BlogLayout;
