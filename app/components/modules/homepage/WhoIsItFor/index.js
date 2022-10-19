import ScrollAnimation from "react-animate-on-scroll";
import Section from './index.styled'
import ContentWrapper from "@util/ContentWrapper";
import { useAppContext } from "@context/app";
import { AiOutlineRocket, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

export default () => {
	const { isMobile } = useAppContext();

	return (
		<ContentWrapper>
			<Section
				className="section section__with-grid all-columns"
				id="sectionWhoHomepage">
				<div className="bg"></div>
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					className="section--heading">
					<h2 className="h2">Who is it for?</h2>
					<p className="p-lg">
						Ocketio adds useful features to a cutting-edge VPN protocol in a way
						that makes it an excellent option whether you’re a small shop or a
						growing enterprise
					</p>
				</ScrollAnimation>
				<article className="card__wrapper f f-align-stretch f-justify-stretch f-no-wrap all-columns">
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.7}
						className="card">
						<AiOutlineUser className="card--icon" />
						<div className="card--text">
							<h3 className="h3 capitalize">
								individual
								<br />
								users
							</h3>
							<p className="p-sm">
								Share access to personal projects, test development work, or
								improve your gaming experience.
							</p>
						</div>
						<Link href="/pricing">
							<a className="btn btn--filled btn--filled__darkmode">
								Get Started
							</a>
						</Link>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.7}
						className="card"
						delay={100}>
						<AiOutlineShop className="card--icon" />
						<div className="card--text">
							<h3 className="h3 capitalize">
								small business
								<br />
								teams
							</h3>
							<p className="p-sm">
								Grant a handful of remote employees access to internal resources
								without unnecessary complexity.
							</p>
						</div>
						<Link href="/pricing">
							<a className="btn btn--filled btn--filled__darkmode">
								Get Started
							</a>
						</Link>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.7}
						className="card"
						delay={200}>
						<AiOutlineRocket className="card--icon" id="rocket" />
						<div className="card--text">
							<h3 className="h3 capitalize">
								growing
								<br />
								enterprises
							</h3>
							<p className="p-sm">
								Manage network controls in a way that scales alongside a growing
								business effort.
							</p>
						</div>
						<Link href="/pricing">
							<a className="btn btn--filled btn--filled__darkmode">
								Get Started
							</a>
						</Link>
					</ScrollAnimation>
				</article>
			</Section>
		</ContentWrapper>
	);
};