import { useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../Site.Globals/ContentWrapper";
import { useAppContext } from "../../Context";

import {
	AiTwotoneCheckCircle,
	AiOutlineRocket,
	AiOutlineShop,
	AiOutlineUser,
} from "react-icons/ai";

import WorldMap from "../../public/images/homepage/body/world-map.svg";
import SecureImg from "../../public/images/homepage/body/graphic-secure.svg";
import StreamlinedImg from "../../public/images/homepage/body/graphic-streamlined.svg";
import EfficientImg from "../../public/images/homepage/body/graphic-efficient.svg";
import CostEffectiveImg from "../../public/images/homepage/body/graphic-cost_effective.svg";
import BlogLayout from "../BlogLayout";
import EmailIntake from "../Site.Widgets/EmailIntake";

const animateOnce = true;

const StyledMap = styled(WorldMap)`
	position: relative;
	overflow: visible;
	#end-point_1 {
		> * {
			transform-origin: 49.5% 22%;
		}

		&-1 {
			animation: pulseInOut 2s ease-in-out 0s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0s infinite both alternate;
		}
	}
	#end-point_2 {
		> * {
			transform-origin: 82% 45%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.25s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.25s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.25s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.25s infinite both alternate;
		}
	}
	#end-point_3 {
		> * {
			transform-origin: 94% 85%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.5s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.5s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.5s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.5s infinite both alternate;
		}
	}
	#end-point_4 {
		> * {
			transform-origin: 51% 85%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.75s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.75s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.75s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.75s infinite both alternate;
		}
	}
`;

const FirstBanner = (props) => {
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
						animateOnce={animateOnce}
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
						animateOnce={animateOnce}
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
						animateOnce={animateOnce}
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

const StyledSecureImg = styled(SecureImg)`
	overflow: visible;

	#lock-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
					: `translate(0,0)`};
	}
	#profile-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -34}px))`
					: `translate(0,0)`};
	}
	#server-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#cloud-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
					: `translate(0,0)`};
	}
	#laptop-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
					: `translate(0,0)`};
	}
`;
const StyledStreamlinedImg = styled(StreamlinedImg)`
	overflow: visible;

	#user-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -34}px))`
					: `translate(0,0)`};
	}
	#cloud-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
					: `translate(0,0)`};
	}
	#phone-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
					: `translate(0,0)`};
	}
	#folder-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#browser-window {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
					: `translate(0,0)`};
	}
`;
const StyledEfficientImg = styled(EfficientImg)`
	overflow: visible;

	#server-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#lock-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
					: `translate(0,0)`};
	}
	#cloud-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
					: `translate(0,0)`};
	}
	#battery-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
					: `translate(0,0)`};
	}
	#gear-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
					: `translate(0,0)`};
	}
`;
const StyledCostEffectiveImg = styled(CostEffectiveImg)`
	overflow: visible;

	#cc-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
					: `translate(0,0)`};
	}
	#gear-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
					: `translate(0,0)`};
	}
	#moving-box-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#profiles-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -34}px))`
					: `translate(0,0)`};
	}
	#cloud-card {
		transform: scale(1)
			${(props) =>
				props.offset > 0
					? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
					: `translate(0,0)`};
	}
`;

const WhatSection = (props) => {
	const { isMobile } = useAppContext();

	const whatSectionContent = [
		{
			title: `It's secure.`,
			par: `Ocketio builds on industry-leading encryption methods for reliably protecting remote connections to your network resources. Your data also remains completely private and it never touches our servers.`,

			image: {
				src: StyledSecureImg,
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
				src: StyledStreamlinedImg,
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
				src: StyledEfficientImg,
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
				src: StyledCostEffectiveImg,
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
			<section
				className="section section__with-grid all-columns"
				id="sectionWhatHomepage">
				<ScrollAnimation
					animateOnce={animateOnce}
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
						<WhatSectionItem
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
								animateOnce={animateOnce}
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
								animateOnce={animateOnce}
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
			</section>
		</ContentWrapper>
	);
};

function WhatSectionItem({
	reversed,
	title,
	par,
	list,
	isMobile,
	imageAttr,
	StyledImage,
}) {
	const { alt, id } = imageAttr;
	const ref = useRef();
	const { scrollOffset, windowSize } = useAppContext();

	const distanceY =
		ref?.current?.getBoundingClientRect()?.top +
		scrollOffset -
		windowSize.height / 2;

	return (
		<article
			className={`section--body--item${reversed ? " reversed" : ""}`}
			id={`${id}__wrapper`}>
			<ScrollAnimation
				animateOnce={animateOnce}
				animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
				className="text-block"
				duration={0.6}>
				<h3 className="h3 semi-bold">{title}</h3>
				<p className="p-sm">{par}</p>
			</ScrollAnimation>
			<ul className="checklist">
				{list.map((item, i) => (
					<li className="checklist--item" key={"item-" + i}>
						<ScrollAnimation
							animateOnce={animateOnce}
							duration={1 - i * 0.1}
							delay={i * 25}
							offset={-128}
							animateIn="animate__fadeInUp"
							className="checklist--item">
							<AiTwotoneCheckCircle className="checklist--item__icon" />
							<h5 className="h5">{item}</h5>
						</ScrollAnimation>
					</li>
				))}
			</ul>
			<ScrollAnimation
				animateOnce={animateOnce}
				animateIn="animate__fadeIn"
				duration={0.7}
				className="image__wrapper"
				delay={150}>
				<StyledImage
					alt={alt}
					id={id}
					className="section--body--item__image image"
					ref={ref}
					offset={scrollOffset}
					distanceY={distanceY}
				/>
			</ScrollAnimation>
		</article>
	);
}

const EmailIntakeSection = ({ children }) => {
	return (
		<ContentWrapper>
			<ScrollAnimation
				animateIn="animate__fadeInUp"
				animateOnce={true}
				duration={0.623}
				className="section__with-grid all-columns email-intake-wrapper"
				style={{
					justifyItems: "center",
				}}>
				<div className="decor decor__circle-1"></div>
				<div className="decor decor__circle-2"></div>
				<EmailIntake />
			</ScrollAnimation>
		</ContentWrapper>
	);
};

const WhoSection = () => {
	const { isMobile } = useAppContext();

	return (
		<ContentWrapper>
			<section
				className="section section__with-grid all-columns"
				id="sectionWhoHomepage">
				<div className="bg"></div>
				<ScrollAnimation
					animateOnce={animateOnce}
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
						animateOnce={animateOnce}
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
						animateOnce={animateOnce}
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
						animateOnce={animateOnce}
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
			</section>
		</ContentWrapper>
	);
};

const BlogSection = ({ blogPosts }) => {
	return (
		<ContentWrapper>
			<section
				className="section section__with-grid all-columns"
				id="blogPreview">
				<div className="section--heading">
					<h2 className="h2 semi-bold capitalize">recent updates</h2>
				</div>
				<div className="section--body">
					<BlogLayout blogPosts={blogPosts} preview />
				</div>
			</section>
		</ContentWrapper>
	);
};

export {
	FirstBanner,
	WhatSection,
	EmailIntakeSection,
	WhoSection,
	BlogSection,
};
