import { useRouter } from "next/router";
import { useEffect } from "react";
import { useBlogContext } from "@context/blog";
import Article from "@layouts/blog/article";
import axios from "axios";

const Blog = ({ blog_posts }) => {
	const router = useRouter();
	const { setBlogs } = useBlogContext();
	useEffect(() => setBlogs(blog_posts), [blog_posts]);

	return (
		<Article
			blog={
				blog_posts[
					blog_posts.findIndex((n) => n.url_slug == router.query.slug[1])
				]
			}
		/>
	);
};

export default Blog;

export async function getStaticPaths() {
	const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
	const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
	const THIS_URL = process.env.THIS_URL;
	const blogURI = `${DIRECTUS_CMS_URL}/items/all_posts?access_token=${DIRECTUS_CMS_ACCESS_KEY}`;

	const result = await axios({
		url: blogURI,
		json: true,
	});

	const paths = result.data.data.map((post) => ({
		params: { slug: [post.main_category, post.url_slug] },
	}));

	return { paths, fallback: false };
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
	} catch (err) {
		error = err.response;
	} finally {
		if (!error) {
			const blog_posts = response.data.data;

			return {
				props: {
					blog_posts,
				},
			};
		} else return;
	}
}
