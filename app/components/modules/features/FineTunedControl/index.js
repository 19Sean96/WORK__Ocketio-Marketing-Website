import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import { BsKey, BsListUl, BsGear, BsPhone } from "react-icons/bs";
import { useAppContext } from "@context/app";
import FineTunedControlImage from "@images/features/fine-tuned-control.svg";
import Section from './index.styled'
import SingleCircle from "@elements/decorations/SingleCircle";
import { $secondaryblack } from "@lib/Colors";
const FineTunedControl = () => {
	const { isMobile } = useAppContext();
	return (
		<ContentWrapper>
			<Section
				className="section section__with-grid all-columns"
				id="fineTunedControlSection">
				<div className="divider"></div>
				<div className="bg"></div>
				<SingleCircle 
					styles={{
						height: "455px",
						width: "455px",
						top: '0',
						left: '0',
						backgroundColor: $secondaryblack,
						transform: "translate(-25vw, 0)"
					}}
					uniqueClass="decor-circle"
				/>
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					className="section--heading">
					<h2 className="h2 capitalize">fine-tuned control</h2>
					<p className="p-lg">
						No network administrator’s life needs to be harder. Mission-critical
						features allow you to simplify access management while dialing in
						core configuration.
					</p>
				</ScrollAnimation>
				<div className="section--body">
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.88}
						className="img-block">
						<FineTunedControlImage />
					</ScrollAnimation>
					<div className="text-blocks">
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={1.2}
							className="text-block text-block-1">
							<BsKey />
							<h5 className="h5 capitalize">Multiple Authentication Options</h5>
							<p className="p-sm">
								Use your existing auth provider to streamline access and enforce
								access requirements
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={1}
							delay={300}
							className="text-block text-block-2">
							<BsListUl />
							<h5 className="h5 capitalize">Comprehensive Activity Logging</h5>
							<p className="p-sm">
								A detailed event log ensures you can keep tabs on system
								activities and issues
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={0.8}
							delay={600}
							className="text-block text-block-3">
							<BsPhone />
							<h5 className="h5 capitalize">Detailed Device Info</h5>
							<p className="p-sm">
								See all registered devices in one place and monitor connection
								status, authentication schedules, and more
							</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce={true}
							animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
							duration={0.6}
							delay={900}
							className="text-block text-block-4">
							<BsGear />
							<h5 className="h5 capitalize">Configurable DNS</h5>
							<p className="p-sm">
								Manage core settings and configuration from a streamlined online
								interface
							</p>
						</ScrollAnimation>
					</div>
				</div>
			</Section>
		</ContentWrapper>
	);
};

export default FineTunedControl;
