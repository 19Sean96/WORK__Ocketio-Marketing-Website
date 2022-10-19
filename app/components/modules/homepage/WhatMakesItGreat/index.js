import ContentWrapper from "@util/ContentWrapper";
import Section from './index.styled'
import Link from "next/link";
import Item from "./Item";
import { useAppContext } from "@context/app";
import ScrollAnimation from "react-animate-on-scroll";
import StyledSecure from "./StyledSecure";
import StyledStreamlined from "./StyledStreamlined";
import StyledEfficient from "./StyledEfficient";
import StyledCostEffective from "./StyledCostEffective";

export default () => {
	const { isMobile } = useAppContext();

	const whatSectionContent = [
		{
			title: `It's secure.`,
			par: `Ocketio builds on industry-leading encryption methods for reliably protecting remote connections to your network resources. Your data also remains completely private and it never touches our servers.`,

			image: {
				src: StyledSecure,
				id: "graphicSecure",
				alt: "Illustration which visualizes the security that comes with Ocketio VPN technology.",
			},

			list: [
				"Protected with WireGuard®",
				"Modernized security protocols",
				"Completely private connections",
			],
			reversed: true,
		},
		{
			title: `It's streamlined.`,
			par: `No more manual configuration headaches. Set up your network in minutes through our helpful wizard and roll out quickly to your team with unobtrusive, always-on access to internal resources. Once up and running, manage the network and devices easily from a single web-based tool.`,

			image: {
				src: StyledStreamlined,
				id: "graphicStreamlined",
				alt: "Illustration which visualizes the peace of mind that comes with Ocketio VPN technology.",
			},

			list: [
				"15-minute setup time",
				"Reduced user logins",
				"Centralized administration",
			],
			reversed: false,
		},
		{
			title: `It's efficient.`,
			par: `There are no appliances or extensive infrastructure to maintain, which reduces overhead for providing access to networks in multiple locations. The extremely lean codebase also maximizes network performance and minimizes battery drain for distributed devices.`,

			image: {
				src: StyledEfficient,
				id: "graphicEfficient",
				alt: "Illustration which visualizes how efficient the Ocketio VPN technology is",
			},

			list: [
				"Minimal footprint",
				"Streamlined codebase",
				"Low latency and battery strain",
			],
			reversed: true,
		},
		{
			title: `It's cost-effective.`,
			par: `Reliable security shouldn't break the bank. A straightforward pricing structure makes it easy to try the product and affordable to get your people and their devices safely connected, no matter how many there are.`,

			image: {
				src: StyledCostEffective,
				id: "graphicCostEffective",
				alt: "Illustration which visualizes the security that comes with Ocketio VPN technology.",
			},

			list: [
				"Full feature parity across plans",
				"Simple pricing structure",
				"Affordable at any size",
			],
			reversed: false,
		},
	];

	return (
		<ContentWrapper width="1575px">
			<Section
				className="section section__with-grid all-columns"
				id="sectionWhatHomepage">
				<ScrollAnimation
					animateOnce={true}
					animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
					duration={0.9}
					offset={-186}
					className="section--heading">
					<h2 className="h2 semi-bold">What makes it great?</h2>
					<p className="p-lg">
						Ocketio is built with a set of core attributes that just might make
						it the best solution for your real-world network security needs.
					</p>
				</ScrollAnimation>
				<div className="section--body">
					{whatSectionContent.map((item, i) => (
						<Item
							reversed={item.reversed}
							title={item.title}
							par={item.par}
							list={item.list}
							key={"what-item-" + i}
							isMobile={isMobile}
							imageAttr={item.image}
							StyledImage={item.image.src}
						/>
					))}
					<div className="cta-group">
						<Link href="/pricing">
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInUp"
								duration={0.675}
								className="cta">
								<button
									className="btn btn--filled capitalize"
									aria-label="Get started with our beta program by creating a network">
									create a network
								</button>
							</ScrollAnimation>
						</Link>
						<Link href="/features">
							<ScrollAnimation
								animateOnce={true}
								animateIn="animate__fadeInUp"
								duration={0.675}
								className="cta">
								<button
									className="cta btn btn--bordered capitalize"
									aria-label="Get additional information about Wirewise">
									learn more
								</button>
							</ScrollAnimation>
						</Link>
					</div>
				</div>
			</Section>
		</ContentWrapper>
	);
};
