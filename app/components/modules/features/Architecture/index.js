import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import { useAppContext } from "@context/app";
import ArchitectureDiagram from "@images/features/architecture-diagram.svg";
import Section from './index.styled'
const Architecture = () => {
	const { isMobile } = useAppContext();

	return (
		<ContentWrapper>
			<Section
				className="section section__with-grid all-columns"
				id="architectureSection">
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.44}
					offset={-186}
					className="section--heading">
					<h2 className="h2 capitalize">Thoughtful architecture</h2>
					<p className="p-lg">
						Built from the ground up to facilitate all the complex relationships
						involved in network access management. Here’s what it looks like
						when we pop the hood.
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateOnce={true}
					animateIn="animate__fadeIn"
					duration={0.8}
					delay={450}
					className="image_wrapper">
					<ArchitectureDiagram />
				</ScrollAnimation>
				<div className="text-blocks">
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.95}
						className="text-block text-block-1">
						<h4 className="h4 capitalize">industry-leading encryption</h4>
						<p className="p-sm">
							Wirewise uses the WireGuard encryption framework, a new industry
							standard for securing tunneled traffic. With its state of the art
							cryptography and a code base just 1% the size of technologies
							leveraging OpenVPN, you can rest easy that Wirewise is secure and
							auditable against attacks. Its highly performant protocol also
							enables roaming across networks and instant connections,
							minimizing the need for user interaction.
						</p>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.8}
						delay={175}
						className="text-block text-block-2">
						<h4 className="h4 capitalize">Efficient Network Control</h4>
						<p className="p-sm">
							For a tunnel to be established, the network gateway and its
							devices need to know each other's private encryption keys.
							Wirewise efficiently manages the distribution and updating of
							authorized keys on gateways and end user devices so access can be
							revoked as quickly as it is granted. Automatic controls based on
							defined settings and conditions, such as last validated date, will
							instantly quarantine inactive devices.
						</p>
					</ScrollAnimation>
					<ScrollAnimation
						animateOnce={true}
						animateIn="animate__fadeInUp"
						duration={0.65}
						delay={325}
						className="text-block text-block-3">
						<h4 className="h4 capitalize">extensible client support</h4>
						<p className="p-sm">
							Do you have other devices besides Windows machines that need to
							access your network? Good news, we're working diligently to
							provide support for additional platforms. In the meantime, we’ve
							got you covered since Wirewise allows authenticated users to
							generate and download a config file that can be uploaded into a
							WireGuard client. This enables you to quickly and conditionally
							enable or disable access to your network for these clients.
						</p>
					</ScrollAnimation>
				</div>
			</Section>
		</ContentWrapper>
	);
};

export default Architecture