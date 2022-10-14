import Hero from "@modules/homepage/Hero";
import MapBanner from "@modules/homepage/MapBanner";
import WhatMakesItGreat from "@modules/homepage/WhatMakesItGreat";
import EmailSubscribe from "@modules/homepage/EmailSubscribe";
import WhoIsItFor from "@modules/homepage/WhoIsItFor";
import BlogPreview from "@modules/homepage/BlogPreview";

export default ({ blog_posts }) => (
	<main
		className="main"
		id="main"
		style={{
			overflowX: "hidden",
		}}>
		<span id="vertLineCenter"></span>
		<Hero />
		<MapBanner />
		<WhatMakesItGreat />
		<EmailSubscribe />
		<WhoIsItFor />
		<BlogPreview blog_posts={blog_posts} />
	</main>
);