import ContentWrapper from "@util/ContentWrapper";
import FAQList from "@modules/FAQ";
import ScrollAnimation from "react-animate-on-scroll";
import contactFAQs from "@constants/contact/contactFAQs";
import SingleCircle from "@elements/decorations/SingleCircle";

export default () => (
	<ContentWrapper padBot={95} id="contactFAQWrapper">
		<div className="bg"></div>

		<SingleCircle
			styles={{
				height: "700px",
				width: "700px",
				top: "0",
				right: "0",
				transform: "translate(30vw, 0)",
				backgroundColor: "#88E4C3",
			}}
			withRing={false}
		/>
		<SingleCircle
			styles={{
				height: "195px",
				width: "195px",
				top: "65%",
				left: "0",
				transform: "translate(-10vw, 0)",
				backgroundColor: "#88E4C3",
			}}
			withRing={false}
		/>
		<section
			className=" section section__with-grid all-columns"
			id="contactFAQ">
			<ScrollAnimation
				animateOnce={true}
				animateIn="animate__fadeInDown"
				duration={0.48}
				className="section--heading">
				<h2 className="h2 capitalize">frequently asked questions</h2>
			</ScrollAnimation>
			<div className="section--body">
				<FAQList list={contactFAQs} />
			</div>
		</section>
	</ContentWrapper>
);
