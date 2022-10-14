import SetupSlides from "@modules/features/SetupSlides";
import Architecture from "@modules/features/Architecture";
import FineTunedControl from "@modules/features/FineTunedControl";
import ThirdPartyAuthentication from "@modules/features/ThirdPartyAuth";
import OptimizedExperience from "@modules/features/OptimizedExperience";
import Hero from "@modules/features/Hero";

export default () => (
	<main className="main" id="main">
		<span id="vertLineCenter"></span>
		<Hero />
		<Architecture />
		<FineTunedControl />
		<ThirdPartyAuthentication />
		<OptimizedExperience />
		<SetupSlides />
	</main>
);