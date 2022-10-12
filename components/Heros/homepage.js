import Link from "next/link";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useState } from "react";
import HeroImageMain from "../../public/images/homepage/hero/homepage-hero-main.svg";
import HeroImageSub from "../../public/images/homepage/hero/homepage-hero-sub.svg";

import { useAppContext } from "../../Context";
const animateOnce = true;

const StyledImageGroup = styled.div`
  #heroImageMain {
    transform-origin: top;
    transform: scale(1)
      ${(props) => ` translate(0, calc(0px - ${props.offset / -25 + -0.4}px))`};
  }

  #heroImageSub {
    top: 30%;
    left: 20%;
    transform-origin: top;
    width: 46vw;
    max-width: 666px;
    transform: scale(1)
      ${(props) => ` translate(0, calc(0px - ${props.offset / -20 + -0.4}px))`};
  }

  @media screen and (max-width: 1200px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate(0, calc(0px - ${props.offset / -45 + -31}px))`};
    }

    #heroImageSub {
      top: 37%;
      left: 18%;
      transform: scale(.95)
        ${(props) => ` translate(0, calc(0px - ${props.offset / -35 + -22}px))`};
    }
  }

  @media screen and (max-width: 1100px) {
    #heroImageSub {
      top: 41%;
    }
  }

  @media screen and (max-width: 850px) {
    #heroImageMain {
      transform: scale(1.25)
        ${(props) => ` translate(0, calc(-12% - ${props.offset / -75 - 35}px))`};
    }

    #heroImageSub {
      top: 46%;
      left: 17%;
      transform: scale(0.98)
        ${(props) => ` translate(0, calc(-12% - ${props.offset / -60 - 46}px))`};
    }
  }

  @media screen and (max-width: 575px) {
    #heroImageSub {
      top: 37.5%;
      left: 16%;

      transform: scale(0.95)
        ${(props) =>
          ` translate(0, -50% + calc(-6vw - ${props.offset / -60 - 63}px))`};
    }
  }
`;

const HeroHome = () => {
  const { scrollOffset } = useAppContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (scrollOffset > 0) {
      setScrolled(true);
    }
  }, [scrollOffset]);
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
            <p className="p-lg">
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

        <StyledImageGroup
          className="image-group"
          offset={scrollOffset}
        >
          <HeroImageMain
            id="heroImageMain"
            className={!scrolled ? "atTop" : ""}
          />
          <HeroImageSub
            id="heroImageSub"
            className={!scrolled ? "atTop" : ""}
          />
        </StyledImageGroup>
      </section>
    </div>
  );
};

module.exports.Hero = HeroHome;
