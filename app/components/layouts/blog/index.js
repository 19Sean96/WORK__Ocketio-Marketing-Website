import BlogLayout from "@modules/blog";
import Main from './index.styled'
import ScrollAnimation from "react-animate-on-scroll";
import Compass from "@modules/blog/Compass";
import { useAppContext } from "@context/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default ({ blog_posts }) => {
	// holds ARRAY of blog posts constrained by the "activeCategory"
	const [filteredBlogList, setFilteredBlogList] = useState([...blog_posts]);
	// holds STRING indicating which category of posts to show in the #blogContent
	const [activeCategory, setActiveCategory] = useState("all");
	// live STRING which filters which posts to show via keywords in post_title
	const [searchTerm, setSearchTerm] = useState("");
    const { isMobile } = useAppContext();
    const router = useRouter();
	const { query: { category } } = router
	console.log(category)
	console.log(router);
	const handleSearchUpdate = (event) => setSearchTerm(event.target.value);

	useEffect(() => {
		if (category == 'tutorial') {
			setActiveCategory('guides')
		}
		else setActiveCategory('')
	}, [category])
	

	useEffect(() => {
		const blogs = [...blog_posts];

		if (activeCategory === "all") {
			setFilteredBlogList(blogs);
		} else if (activeCategory === "guides") {
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
		sendinblue.page("blog[main]", {
			ma_title: "Main Blog Page",
			ma_path: "/blog",
		});
	}, []);

	return (
		<Main className="main blog--root" id="blogRoot">
			<header className="full-width_wrapper">
				<Compass />
				<ScrollAnimation
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					animateOnce={true}
					className="section--heading">
					<h2 className="h2">Blog</h2>
					<p className="p-large">
						Check out our setup guides, keep up with the latest Ocketio news,
						and more!
					</p>
				</ScrollAnimation>
			</header>
			<BlogLayout
				blogPosts={filteredBlogList}
				searchTerm={searchTerm}
				activeCategory={activeCategory}
				setActiveCategory={setActiveCategory}
				handleSearchUpdate={handleSearchUpdate}
			/>
		</Main>
	);
};
