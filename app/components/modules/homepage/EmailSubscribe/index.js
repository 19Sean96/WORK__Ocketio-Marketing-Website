import ContentWrapper from "@util/ContentWrapper";
import SubscribeInput from "@elements/SubscribeInput";
import Section from './index.styled'

export default () => (
	<ContentWrapper>
		<Section
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
		</Section>
	</ContentWrapper>
);
