import ContentWrapper from "@util/ContentWrapper";
import ScrollAnimation from "react-animate-on-scroll";
import { useAppContext } from "@context/app";
import Link from "next/link";
import StyledMap from "./StyledMap";

export default () => {
	const { isMobile } = useAppContext();
	return (
		<ContentWrapper width="1500px">
			<div className="all-columns">
				<section
					className="section section__with-grid all-columns"
					id="firstBannerHomepage">
					<div className="decor decor__circle-1"></div>
					<div className="decor decor__circle-2"></div>
					<div className="bg"></div>
					<ScrollAnimation
						animateOnce={true}
						animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
						duration={0.54}
						delay={550}
						className="banner--title"
						offset={-100}>
						<h2 className="h2">
							Designed for easy, secure remote access management. <br />
							It’s that simple.
						</h2>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.68}
						delay={570}
						className="banner--paragraph"
						offset={-100}>
						<p className="p-lg">
							A couple years ago we started searching for a capable WireGuard®
							VPN that could easily support a growing distributed team. But the
							available solutions were too clunky, too expensive, or just didn't
							have the right features. So now we're developing the VPN we wish
							we'd been able to find.
						</p>
						<Link href="/features">
							<a className="btn btn--filled">Explore the Features</a>
						</Link>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeIn"
						duration={0.6}
						delay={750}
						className="image_wrapper banner--image"
						offset={-100}>
						<StyledMap />
					</ScrollAnimation>
				</section>
			</div>
		</ContentWrapper>
	);
};