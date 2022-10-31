import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import { BsCloud, BsHddStack, BsWindow, BsClock } from "react-icons/bs";
import { useAppContext } from "@context/app";
import OptimizedExperienceImage from "@images/features/optimized-experience.svg";
import Section from "./index.styled";
const OptimizedExperience = () => {
	const { isMobile } = useAppContext();

	return (
		<ContentWrapper>
			<Section
				className="section section__with-grid all-columns"
				id="optimizedExperience">
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					className="section--heading">
					<h2 className="h2 capitalize">optimized experience</h2>
					<p className="p-lg">
						A platform as usable as it is capable ensures that administrators
						and users alike can take full advantage of its protection while
						almost forgetting it’s there.
					</p>
				</ScrollAnimation>
				<div className="section--body">
					<div className="text-blocks text-blocks_1">
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={1.2}
							className="text-block text-block_1">
							<BsCloud />
							<h5 className="h5 capitalize">
								Cloud-based <br />
								admin console
							</h5>
							<p className="p-sm">
								Manage core configuration and device permissions from a clean
								web user interface
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={1}
							delay={300}
							className="text-block text-block_2">
							<BsHddStack />
							<h5 className="h5 capitalize">
								Minimal <br />
								on-prem footprint
							</h5>
							<p className="p-sm">
								Skip extra hardware and third-party applications for easier
								training and tighter compliance
							</p>
						</ScrollAnimation>
					</div>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.88}
						className="image__wrapper">
						<OptimizedExperienceImage />
					</ScrollAnimation>
					<div className="text-blocks text-blocks_2">
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={0.8}
							delay={600}
							className="text-block text-block_3">
							<BsWindow />
							<h5 className="h5 capitalize">
								Streamlined <br />
								setup wizard
							</h5>
							<p className="p-sm">
								Get started in just minutes with a guided setup process that
								ensures nothing is missed
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={0.6}
							delay={900}
							className="text-block text-block_4">
							<BsClock />
							<h5 className="h5 capitalize">
								Always On <br />
								Connection
							</h5>
							<p className="p-sm">
								An uninterrupted conntection guarantees that your team members
								connect seamlessly every time
							</p>
						</ScrollAnimation>
					</div>
				</div>
			</Section>
		</ContentWrapper>
	);
};

export default OptimizedExperience;
