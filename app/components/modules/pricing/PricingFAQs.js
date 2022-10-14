import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import FAQList from "@modules/FAQ";
import pricingFAQs from "@constants/pricing/pricingFAQs";

export default () => (
	<ContentWrapper>
		<section className="section__with-grid all-columns" id="pricingFAQ">
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeIn"
				duration={0.9}
				className="section--heading">
				<h2 className="h2 capitalize">frequently asked questions</h2>
			</ScrollAnimation>
			<div className="section--body">
				<FAQList list={pricingFAQs} />
			</div>
		</section>
	</ContentWrapper>
);
