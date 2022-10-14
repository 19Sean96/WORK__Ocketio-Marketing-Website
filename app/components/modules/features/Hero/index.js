import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import SingleCircle from "@elements/decorations/SingleCircle";
import CircleGridPattern from "@elements/decorations/CircleGridPattern";
import SupportedOS from "./SupportedOS";
import HeroImages from "./HeroImages";

export default () => (
	<div className="full-width_wrapper">
		<CircleGridPattern
			styles={{
				top: "0",
				left: "0",
				backgroundColor: "#88E4C3",
				transform: "translate(calc(-110% + 10vw), 25%) rotate(150deg)",
				zIndex: 1,
			}}
			uniqueClass={"features-decor__circle-grid"}
		/>
		<SingleCircle
			styles={{
				height: "450px",
				width: "450px",
				bottom: "0",
				right: "0",
				backgroundColor: "#339BFC",
				transform: "translate(15%, 40%)",
			}}
			withRing
		/>
		<ScrollAnimation
			animateOnce={true}
			duration={0.3}
			animateIn="animate__fadeInDown"
			className="hero_wrapper hero_wrapper-features"
			style={{
				maxWidth: "1400px",
			}}>
			<section className="section section__with-grid" id="features-hero">
				<div className="bg"></div>

				<div id="features-hero-message">
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInLeft"
						duration={0.975}>
						<h1 className="h1">
							All of the essentials,
							<br /> none of the complexity.
						</h1>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInLeft"
						duration={0.95}
						delay={160}>
						<p className="p-lg">
							Wirewise gets devices connected to a network in short order and
							instantly levels up your WireGuard® implementation.
						</p>
					</ScrollAnimation>

					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						className="cta-group"
						duration={0.85}
						delay={500}>
						<Link href="/pricing">
							<button className="cta btn btn--filled btn--filled__darkmode capitalize">
								get started
							</button>
						</Link>
					</ScrollAnimation>
				</div>
				<HeroImages />
				<SupportedOS />
			</section>
		</ScrollAnimation>
	</div>
);
