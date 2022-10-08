import ScrollAnimation from "react-animate-on-scroll";
import EmailInput from "./EmailInput";

const EmailIntake = () => {
	return (
		<section
			className="section section__with-grid all-columns"
			id="emailIntake">
			<div className="bg"></div>
			<div className="section--heading">
				<ScrollAnimation
					animateIn="animate__fadeInDown"
					duration={0.625}
					animateOnce={true}
					delay={335}>
					<h3 className="h3">Be the first to know.</h3>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="animate__fadeInUp"
					duration={0.625}
					animateOnce={true}
					delay={445}>
					<p className="p-sm">
						Follow along as we test, tweak, and improve the beta to make sure
						you never miss a beat.
					</p>
				</ScrollAnimation>
			</div>
			<ScrollAnimation
				animateIn="animate__fadeIn"
				duration={0.555}
				animateOnce={true}
				delay={488}
				className="section--form__wrapper">
				<EmailInput />
			</ScrollAnimation>
		</section>
	);
};

export default EmailIntake;
