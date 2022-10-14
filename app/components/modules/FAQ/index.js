import ScrollAnimation from "react-animate-on-scroll";
import FAQItem from "./Item";

export default ({ list }) => (
	<ScrollAnimation
		animateIn="animate__fadeInLeft"
		animateOnce={true}
		duration={0.65}
		className="faq--list__wrapper">
		<section className="faq--list">
			{list.map(({ question, answer }, i) => (
				<FAQItem question={question} answer={answer} key={i} index={i} />
			))}
		</section>
	</ScrollAnimation>
);
