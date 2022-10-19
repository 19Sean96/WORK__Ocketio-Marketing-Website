import HeroImages from './HeroImages'
import ScrollAnimation from 'react-animate-on-scroll';
import Link from "next/link";
import StyledWrapper from './index.styled'
export default () => {
	return (
		<StyledWrapper className="hero_wrapper">
			<section className="section section__with-grid" id="landing-hero">
				<div id="landing-hero-message">
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInDown"
						duration={0.8}
						delay={50}>
						<h1 className="h1">
							We needed a VPN. <br /> So we built it.
						</h1>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInDown"
						duration={0.7}
						delay={250}>
						<p className="p-lg">
							A cloud-centric software solution that provides secure, remote
							access to networks you manage, whether on-prem or in the cloud.
						</p>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.8}
						delay={350}>
						<div className="cta-group">
							<Link href="/pricing">
								<button
									className="cta btn btn--filled j-text _400"
									aria-label="Get started with the beta program">
									Try the Beta
								</button>
							</Link>
							<Link href="/features">
								<button
									className="cta btn btn--bordered j-text _500 capitalize"
									aria-label="Get additional information about Wirewise">
									learn more
								</button>
							</Link>
						</div>
					</ScrollAnimation>
				</div>
                <HeroImages />
			</section>
		</StyledWrapper>
	);
};
