import PricingCards from "@modules/pricing/PricingCards";
import PricingFAQs from "@modules/pricing/PricingFAQs";

export default () => (
	<main
		className="main"
		id="main"
		style={{
			backgroundColor: "#101010",
			position: "relative",
		}}>
		<PricingCards />
		<PricingFAQs />
	</main>
);
