import ReactHtmlParser from "react-html-parser";
import BlogItem from "./Item";
import { useAppContext } from "../../Context";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const BlogLayout = ({ blogPosts, searchTerm = "", preview }) => {
	const { isMobile } = useAppContext();
	return (
		<section
			className="section section__with-grid all-columns section--blog-list section__with-max-width_95vw"
			id="blogPosts"
		>
			<div className="section--body">
				<div className="blogs">
					{blogPosts.map(
						(blog, i) =>
							blog.post_title
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) && (
								<BlogItem
									author={blog.post_author}
									dateWritten={
										!blog.post_date ? blog.date_created : blog.post_date
									}
									dateUpdated={blog.date_updated}
									title={blog.post_title}
									body={ReactHtmlParser(blog.post_body)[0].props.children[0]}
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
							)
					)}
					{preview && (
						<Link href="/blog">
							<a className="blogs--preview">
								<h3 className="h3">Check out more of our blog posts</h3>
								<AiOutlineArrowRight />
							</a>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default BlogLayout;
