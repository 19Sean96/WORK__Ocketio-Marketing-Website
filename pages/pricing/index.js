import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import FAQList from "../../components/Site.Widgets/FAQList";
import EmailIntakeInput from "../../components/Site.Widgets/EmailInput";
import Head from "../../components/Pages.Head/Pricing";
import { AiFillCheckCircle } from "react-icons/ai";
import { forwardRef, useEffect, useRef, useState } from "react";
import { priceCardData, pricingFaqs } from "../../static/index";
import { useAppContext } from "../../Context";

const animateOnce = true;

export default function Pricing() {
	const cardRef = useRef([]);
	const [tallestCardHeading, setTallestCardHeading] = useState(0);
	const [tallestFeaturesList, setTallestFeaturesList] = useState(0);
  const { windowSize } = useAppContext()
	useEffect(() => {
		let _headingHeights = [],
			_featuresListHeights = [];

		cardRef.current.map(({ node }, i) => {
			let headingClass = "price-card--heading",
				featuresListClass = "price-card--features";
			const { children } = node;

			for (const el of children) {
				if (el.classList.contains(headingClass))
					_headingHeights.push(el.clientHeight);
				if (el.classList.contains(featuresListClass))
					_featuresListHeights.push(el.children[0].clientHeight);
			}
		});

    setTallestCardHeading(Math.max(..._headingHeights))
    setTallestFeaturesList(Math.max(..._featuresListHeights))
	}, [cardRef, windowSize]);

	return (
		<>
			<Head />
			<main
				className="main"
				id="main"
				style={{
					backgroundColor: "#101010",
					position: "relative",
				}}>
				<ContentWrapper>
					<section
						className="section__with-grid all-columns section__with-max-width_95vw"
						id="pricing">
						<ScrollAnimation
							animateOnce={animateOnce}
							animateIn="animate__fadeInLeft"
							duration={0.9}
							className="section--heading">
							<h1 className="h1">Pricing</h1>
							<p className="p-lg">
								We believe in simple, transparent pricing that helps you test
								and deploy Ocketio with ease at any scale
							</p>
						</ScrollAnimation>

						<div className="section--body">
							{priceCardData.map((card, i) => (
								<PriceCard
									{...{ ...card, tallestCardHeading, tallestFeaturesList }}
									ref={(el) => (cardRef.current[i] = el)}
								/>
							))}
						</div>
						<ScrollAnimation
							animateOnce={animateOnce}
							duration={0.75}
							delay={700}
							animateIn="animate__fadeInUp"
							className="section--footer">
							<h6 className="h6">Interested in a custom plan?</h6>
							<p className="p-small">
								<Link href="/contact">
									<a>Contact us</a>
								</Link>
								<span> for information.</span>
							</p>
						</ScrollAnimation>
					</section>
				</ContentWrapper>

				<ContentWrapper>
					<section className="section__with-grid all-columns" id="pricingFAQ">
						<ScrollAnimation
							animateOnce={animateOnce}
							animateIn="animate__fadeIn"
							duration={0.9}
							className="section--heading">
							<h2 className="h2 capitalize">frequently asked questions</h2>
						</ScrollAnimation>
						<div className="section--body">
							<FAQList list={pricingFaqs} />
						</div>
					</section>
				</ContentWrapper>
			</main>
		</>
	);
}

const PriceCard = forwardRef(
	({ name, price, message, features, button, tallestCardHeading, tallestFeaturesList }, ref) => {
		return (
			<ScrollAnimation
				animateOnce={true}
				duration={0.7}
				delay={400}
				animateIn="animate__fadeInLeft"
				className={`section--body--item price-card price-card-${name}`}
				ref={ref}>
				<h2
					className={`price-card--type capitalize h2 price-card--type__${name}`}>
					{name}
				</h2>

				<div className="price-card--heading" style={{
          minHeight: tallestCardHeading
        }}>
					<h3 className="price-card--price h3">
						<span className="price capitalize">{price} </span>
						<span className="freq">{price !== "free" ? "user/month" : ""}</span>
					</h3>
					<p className="p-sm price-card--description">{message}</p>
				</div>

				<Link href={button.url}>
					<button
						className={`btn  ${button.className}  ${button.className}__darkmode capitalize price-card--cta`}>
						{button.value}
					</button>
				</Link>

				<div className="price-card--features">
					<div className="list list__1" style={{
            minHeight: tallestFeaturesList
          }}>
						<h6 className="h6">Includes</h6>
						<ul>
							{features[0].map((feat) => (
								<li>
									<AiFillCheckCircle />
									<p className="p-sm">{feat}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="list list__2">
						<h6 className="h6">Key Features</h6>
						<ul>
							{features[1].map((feat) => (
								<li>
									<AiFillCheckCircle />
									<p className="p-sm">{feat}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</ScrollAnimation>
		);
	}
);
