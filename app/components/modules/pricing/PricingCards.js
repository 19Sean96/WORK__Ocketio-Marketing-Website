import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "@context/app";
import pricingCards from "@constants/pricing/pricingCards";
import Card from "./Card";

export default () => {
	const cardRef = useRef([]);
	const [tallestCardHeading, setTallestCardHeading] = useState(0);
	const [tallestFeaturesList, setTallestFeaturesList] = useState(0);
	const { windowSize, isMobile } = useAppContext();
	const [priceIsAnnual, setPriceIsAnnual] = useState(true);
	const handlePriceToggle = () => setPriceIsAnnual(!priceIsAnnual);

	useEffect(() => {
		let _headingHeights = [],
			_featuresListHeights = [];

		if (!isMobile) {
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
	
			setTallestCardHeading(Math.max(..._headingHeights));
			setTallestFeaturesList(Math.max(..._featuresListHeights));
		}
		else {
			setTallestCardHeading(0);
			setTallestFeaturesList(0);
		}

	}, [cardRef, windowSize]);

	return (
		<ContentWrapper>
			<section
				className="section section__with-grid all-columns section__with-max-width_95vw"
				id="pricing">
				<ScrollAnimation
					animateOnce={true}
					animateIn="animate__fadeInLeft"
					duration={0.9}
					className="section--heading">
					<h1 className="h1">Pricing</h1>
					<p className="p-lg">
						We believe in simple, transparent pricing that helps you test and
						deploy Ocketio with ease at any scale
					</p>
				</ScrollAnimation>

				<div className="section--body">
					<div className="price-toggle">
						<span className="visually-hidden" id="toggleBtnLabel">
							Price Type: Check this button for annual price and uncheck for
							monthly price. Current Price Type:{" "}
							{priceIsAnnual ? "Annual" : "Monthly"}
						</span>
						<span className="price-toggle--label price-toggle-label__monthly">
							Monthly
						</span>
						<button
							className={`price-toggle--btn toggled__${
								priceIsAnnual ? "annual" : "monthly"
							} `}
							id="toggleBtn"
							role="switch"
							aria-labelledby="toggleBtnLabel"
							aria-pressed={priceIsAnnual}
							onClick={handlePriceToggle}></button>
						<span className="price-toggle--label price-toggle--label__annual">
							Annual
						</span>
					</div>
					{pricingCards.map((card, i) => (
						<Card
							{...{ ...card, tallestCardHeading, tallestFeaturesList }}
							ref={(el) => (cardRef.current[i] = el)}
						/>
					))}
				</div>
				<ScrollAnimation
					animateOnce={true}
					duration={0.75}
					delay={700}
					animateIn="animate__fadeInUp"
					className="section--footer">
					<h6 className="h6">Interested in a custom plan?</h6>
					<p className="p-sm">
						<Link href="/contact">
							<a>Contact us</a>
						</Link>
						<span> for information.</span>
					</p>
				</ScrollAnimation>
			</section>
		</ContentWrapper>
	);
};
