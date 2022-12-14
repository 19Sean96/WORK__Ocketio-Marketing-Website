import axios from "axios";
import Head from "@head/Homepage";
import Body from '@layouts/homepage'
import { _palemint } from "@lib/Colors";

export default function Home({ blog_posts }) {
	return (
		<>
			<Head />
			<Body blog_posts={blog_posts} />
		</>
	);
}


export async function getStaticProps() {
	const DIRECTUS_CMS_ACCESS_KEY = process.env.DIRECTUS_CMS_ACCESS_KEY;
	const DIRECTUS_CMS_URL = process.env.DIRECTUS_CMS_URL;
	const blogURI = `${DIRECTUS_CMS_URL}/items/all_posts?sort=sort,-date_updated&limit=2`;
	let response, error;
	try {
		response = await axios({
			url: blogURI,
			headers: {
				Authorization: `Bearer ${DIRECTUS_CMS_ACCESS_KEY}`,
			},
			json: true,
		});

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
			// const { base64, img } = await getPlaiceholder(
			// 	`https://cms.wirewise-dev.com/assets/${blog_posts.post_img}`
			// );
			return {
				props: {
					blog_posts
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
