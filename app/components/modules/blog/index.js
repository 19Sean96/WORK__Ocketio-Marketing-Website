import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import BlogItem from "./Item";
import { Filter } from "./Filter";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import StyledBlogs from "./index.styled";
export default ({
	blogPosts,
	searchTerm = "",
	preview,
	activeCategory,
	setActiveCategory,
	handleSearchUpdate,
}) => {
	const ref = useRef();
	return (
		<section className="section all-columns section--blog-list" id="blogPosts">
			<div className="section--body">
				{!preview && (
					<Filter
						activeCategory={activeCategory}
						setActiveCategory={setActiveCategory}
						searchTerm={searchTerm}
						handleSearchUpdate={handleSearchUpdate}
						blogsRef={ref.current}
					/>
				)}

				<StyledBlogs className="blogs" ref={ref}>
					{blogPosts.map(
						(blog, i) =>
							blog.post_title
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) && (
								<BlogItem
									dateWritten={
										!blog.post_date ? blog.date_created : blog.post_date
									}
									title={blog.post_title}
									body={ReactHtmlParser(blog.post_body)[0].props.children[0]}
									key={i}
									id={blog.id}
									imgId={blog.post_img}
									index={i}
									category={blog.main_category}
									slug={blog.url_slug}
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
				</StyledBlogs>
			</div>
		</section>
	);
};
