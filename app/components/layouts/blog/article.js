import ContentWrapper from "@util/ContentWrapper";
import Image from "next/image";
import readingTime from "reading-time";
import ReactHtmlParser from "react-html-parser";
import ScrollAnimation from "react-animate-on-scroll";
import Article from "./article.styled";
import SingleCircle from "@elements/decorations/SingleCircle";
import { $primarywhite } from "@lib/Colors";
export default ({ blog }) => {
	const readStats = readingTime(blog.post_body);

	const formatDate = (date) =>
		new Date(date).toLocaleDateString(
			{},
			{
				timeZone: "UTC",
				month: "short",
				day: "2-digit",
				year: "numeric",
			}
		);
	return (
		<ContentWrapper>
			<Article className="section all-columns" id="blogPage">
				<ScrollAnimation
					animateOnce={true}
					duration={0.6}
					animateIn="animate__fadeInDown"
					className="full-width_wrapper">
					<div className="section--heading">
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInDown"
							duration={1.5}
							delay={300}>
							<h2 className="h2 title">{blog.post_title}</h2>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInUp"
							duration={0.995}
							delay={450}>
							<h3 className="h3 subtitle">
								{formatDate(blog.date_created)} - {readStats.text}
							</h3>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn="animate__fadeInUp"
							duration={1.18}
							delay={225}
							className="image">
							<Image
								src={`https://cms.wirewise-dev.com/assets/${blog.post_img}`}
								layout="fill"
								objectFit="cover"
							/>
						</ScrollAnimation>
					</div>
				</ScrollAnimation>
				<div className="section--body">
					<ScrollAnimation 
						animateOnce={true}
						duration={0.75}
						delay={.3}
						animateIn="animate__fadeIn"
						className="bg"
					></ScrollAnimation>
					<SingleCircle 
						styles={{
							height: "200px",
							width: "200px",
							top: "0",
							right: "0",
							backgroundColor: $primarywhite,
							transform: "translate(22.5vw, -165%) rotate(-15deg)",
							ringSize: '200%',
							ringColor: $primarywhite,
							zIndex: '0'
						}}
						withRing
						uniqueClass={"article-decor__single-circle"}
					/>
					<article className="content">
						{ReactHtmlParser(blog.post_body)}
					</article>
				</div>
			</Article>
		</ContentWrapper>
	);
};
