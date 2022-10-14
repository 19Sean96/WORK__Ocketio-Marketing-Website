import { useEffect, useState } from "react";
import { useAppContext } from "@context/app";
import StyledImageGroup from "./HeroImages.styled";
import HeroImageMain from "@images/homepage/hero/homepage-hero-main.svg";
import HeroImageSub from "@images/homepage/hero/homepage-hero-sub.svg";

export default () => {
    const { scrollOffset } = useAppContext();
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      if (scrollOffset > 0) {
        setScrolled(true);
      }
    }, [scrollOffset]);

	return (
		<StyledImageGroup className="image-group" offset={scrollOffset}>
			<HeroImageMain id="heroImageMain" className={!scrolled ? "atTop" : ""} />
			<HeroImageSub id="heroImageSub" className={!scrolled ? "atTop" : ""} />
		</StyledImageGroup>
	);
};
