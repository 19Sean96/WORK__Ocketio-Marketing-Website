import StyledImageGroup from "./HeroImages.styled";
import HeroImageMain from "@images/features/hero/features-hero-main.svg";
import HeroImageSubTop from "@images/features/hero/features-hero-sub_top.svg";
import HeroImageSubBot from "@images/features/hero/features-hero-sub_bot.svg";
import { useAppContext } from "@context/app";

export default () => {
	const { scrollOffset } = useAppContext();

	return (
		<StyledImageGroup
			className="image-group__wrapper image-group"
			animateOnce={true}
			animateIn="animate__fadeInDown"
			duration={0.6}
			delay={450}
			offset={scrollOffset}>
			<HeroImageMain id="heroImageMain" className="image-group__image" />
			<HeroImageSubTop id="heroImageSubTop" className="image-group__image" />
			<HeroImageSubBot id="heroImageSubBot" className="image-group__image" />
		</StyledImageGroup>
	);
};
