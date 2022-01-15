import ContentWrapper from "../ContentWrapper";
import BlogItem from "./Item";
const BlogLayout = ({ blogPosts }) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns section--blog-list"
        id="blogPosts"
      >
        <div className="section--heading">
          <h2 className="h2">News and Updates</h2>
        </div>
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
              />
            ))}
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default BlogLayout;
