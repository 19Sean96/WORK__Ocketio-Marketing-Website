import Head from "@head/Blog";
import Body from "@layouts/blog";
import axios from "axios";
import { useBlogContext } from "@context/blog";
import { useEffect } from "react";
export default function Blog({ blog_posts }) {
	const { setBlogs } = useBlogContext();
	useEffect(() => setBlogs(blog_posts), [blog_posts]);
	return (
		<>
			<Head />
			<Body />
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
