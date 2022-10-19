import ScrollAnimation from "react-animate-on-scroll";
import FAQItem from "./Item";
import Section from "./index.styled";

export default ({ list }) => (
	<ScrollAnimation
		animateIn="animate__fadeInLeft"
		animateOnce={true}
		duration={0.65}>
		<Section>
			{list.map(({ question, answer }, i) => (
				<FAQItem question={question} answer={answer} key={i} index={i} />
			))}
		</Section>
	</ScrollAnimation>
);
