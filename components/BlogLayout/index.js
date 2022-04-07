import ContentWrapper from "../Site.Globals/ContentWrapper";
import BlogItem from "./Item";
import { useAppContext } from "../../Context";
const animateOnce = true

const BlogLayout = ({ blogPosts, searchTerm = '' }) => {
  const { isMobile } = useAppContext()

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns section--blog-list section__with-max-width_95vw"
        id="blogPosts"
      >
        <div className="section--body">
          <div className="blogs">
            {blogPosts.map((blog, i) => blog.post_title.toLowerCase().includes(searchTerm.toLowerCase()) && (
              <BlogItem
                author={blog.post_author}
                dateWritten={
                  !blog.post_date ? blog.date_created : blog.post_date
                }
                dateUpdated={blog.date_updated}
                title={blog.post_title}
                body={blog.post_body}
                key={i}
                id={blog.id}
                imgId={blog.post_img}
                index={i}
                isMobile={isMobile}
                category={blog.main_category}
                slug={blog.url_slug}
                tileWidth={blog.force_tile_width}
                preserveAspectRatio={blog.preserve_aspect_ratio}
              />
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BlogLayout;
