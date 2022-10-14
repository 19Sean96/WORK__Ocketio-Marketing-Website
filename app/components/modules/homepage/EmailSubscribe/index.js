import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import SubscribeInput from "@elements/SubscribeInput";

export default () => (
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
			<SubscribeInput />
		</ScrollAnimation>
	</ContentWrapper>
);
