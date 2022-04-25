import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import heroImageMain from "../../public/images/homepage/hero/hero_main-bg.png";
import HeroBG from "../Site.Graphics/HomepageHero";

import { useAppContext } from "../../Context";
const animateOnce = true;

const StyledMain = styled.div`
  transform-origin: top;
  transform: scale(1)
    ${(props) => ` translate(0, calc(0px - ${props.offset / -25 + -0.4}px))`};

  &::after {
    transform-origin: top;
    transform: scale(1)
      ${(props) => ` translate(0, calc(0px - ${props.offset / -20 + -0.4}px))`};

    @media (max-width: 1200px) {
      top: 50.95%;
      left: 20%;

      transform: scale(1)
        ${(props) => ` translate(0, calc(0px - ${props.offset / -35 + -35}px))`};
    }
    @media (max-width: 850px) {
      top: 53%;
      left: 20%;

      transform: scale(1.05)
        ${(props) => ` translate(0, calc(-12% - ${props.offset / -60 - 46}px))`};
    }
    @media (max-width: 575px) {
      top: 63.5%;
      left: 20%;

      transform: scale(1.25)
        ${(props) => ` translate(0, calc(-6vw - ${props.offset / -60 - 63}px))`};
    }
  }

  @media (max-width: 1200px) {
    transform: scale(1)
      ${(props) => ` translate(0, calc(0px - ${props.offset / -45 + -31}px))`};
  }

  @media (max-width: 850px) {
    transform: scale(1.05)
      ${(props) => ` translate(0, calc(-12% - ${props.offset / -75 - 35}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(1.25)
      ${(props) => ` translate(0, calc(-12% - ${props.offset / -75 - 35}px))`};
  }
`;

const HeroHome = ({ offset }) => {
  const { isSafari } = useAppContext();

  return (
    <div className="hero_wrapper">
      <section className="section section__with-grid" id="landing-hero">
        <div id="landing-hero-message">
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInDown"
            duration={0.8}
            delay={50}
          >
            <h1 className="h1">
              We needed a VPN. <br /> So we built it.
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInDown"
            duration={0.7}
            delay={250}
          >
            <p className="p-large">
              A cloud-centric software solution that provides secure, remote
              access to networks you manage, whether on-prem or in the cloud.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.8}
            delay={350}
          >
            <div className="cta-group">
              <Link href="/pricing">
                <button
                  className="cta btn btn--filled j-text _400"
                  aria-label="Get started with the beta program"
                >
                  Try the Beta
                </button>
              </Link>
              <Link href="/features">
                <button
                  className="cta btn btn--bordered j-text _500 capitalize"
                  aria-label="Get additional information about Wirewise"
                >
                  learn more
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        <div className="image-group" offset={isSafari ? 0 : offset}>
          <StyledMain
            className="image-group__image__wrapper"
            id="heroImageMain__wrapper"
            offset={isSafari ? 0 : offset}
          >
            <HeroBG
              id="heroImageMain"
              className={`animate__animated image-group__image${
                offset === 0 ? " heroImageMain" : ""
              }`}
            />
          </StyledMain>
        </div>
      </section>
    </div>
  );
};

module.exports.Hero = HeroHome;
