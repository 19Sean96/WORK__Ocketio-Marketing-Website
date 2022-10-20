import BlogLayout from "@modules/blog";
import Main from "./index.styled";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "@context/app";
import { useBlogContext } from "@context/blog";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default () => {
	const [filteredBlogList, setFilteredBlogList] = useState([]);
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	const { isMobile } = useAppContext();
	const { blogs } = useBlogContext();

	const router = useRouter();
	const {
		query: { category },
	} = router;

	const handleSearchUpdate = (event) => setSearchTerm(event.target.value);

	useEffect(() => {
		console.log(router, category);
		if (!category) {
			setActiveCategory("all");
		} else if (category == "tutorial") {
			setActiveCategory("guides");
		} else setActiveCategory(category);
	}, [category]);

	useEffect(() => {
		console.log("ACTIVE CATEGORY: ", activeCategory);
		console.log("UNFILTERED BLOGS: ", blogs);
		if (blogs) {
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
						const diff = (now.getTime() - blogDate.getTime()) / 1000 / 60 / 60;
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
		}
	}, [activeCategory, blogs]);

	useEffect(() => {
		sendinblue.page("blog[main]", {
			ma_title: "Main Blog Page",
			ma_path: "/blog",
		});
	}, []);

	return (
		<Main className="main blog--root" id="blogRoot">
			<header className="full-width_wrapper">
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
