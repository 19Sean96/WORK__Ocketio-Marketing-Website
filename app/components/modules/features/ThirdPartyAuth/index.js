import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "@util/ContentWrapper";
import {
	AzureADLogo,
	Auth0Logo,
	GSuiteLogo,
	OktaLogo,
} from "@elements/ThirdPartyLogos";
import Section from './index.styled'
import SingleCircle from "@elements/decorations/SingleCircle";
import { $bluedark } from "@lib/Colors";

const ThirdPartyAuthentication = () => {
	return (
		<ContentWrapper>
			<Section className="section__with-grid all-columns" id="thirdPartyAuth">
				<div className="bg"></div>
				<ScrollAnimation
					animateOnce={true}
					animateIn="animate__fadeInUp"
					duration={0.88}
					className="all-columns section__with-grid">
					<ScrollAnimation
						animateIn="animate__fadeInDown"
						animateOnce={true}
						duration={0.88}
						delay={440}
						className="section--heading">
						<h2 className="h2">3rd Party Authentication</h2>
						<p className="p-lg">
							Support for major auth providers to make logins a breeze
						</p>
					</ScrollAnimation>
					<div className="section--body">
						<AzureADLogo />
						<OktaLogo />
						<Auth0Logo />
						<GSuiteLogo />
					</div>
				</ScrollAnimation>
			</Section>
		</ContentWrapper>
	);
};

export default ThirdPartyAuthentication