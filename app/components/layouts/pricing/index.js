import PricingCards from "@modules/pricing/PricingCards";
import PricingFAQs from "@modules/pricing/PricingFAQs";
import Main from './index.styled'
export default () => (
	<Main
		className="main"
		id="main"
		style={{
			backgroundColor: "#101010",
			position: "relative",
		}}>
		<PricingCards />
		<PricingFAQs />
	</Main>
);
