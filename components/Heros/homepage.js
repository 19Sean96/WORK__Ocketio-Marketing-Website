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
    transform-origin: bottom left;
    transform: scale(1)
      ${(props) => ` translate3d(0, calc(0px - ${props.offset / -20 + -0.4}px), 0)`};
  }

  #heroImageSub {
    top: 40%;
    left: 20%;
    transform-origin: top;
    width: 46vw;
    max-width: 666px;
    transform: scale(1)
      ${(props) => ` translate3d(0, calc(0px - ${props.offset / -15 + -0.4}px), 0)`};
  }

  @media screen and (max-width: 1200px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -25 + -31}px), 0)`};
    }

    #heroImageSub {
      top: 50%;
      left: 18%;
      transform: scale(.95)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -20 + -22}px), 0)`};
    }
  }

  @media screen and (max-width: 1100px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -30 + -31}px), 0)`};
    }
    #heroImageSub {
      top: 72%;
      left: 33%;
      transform: scale(1.45)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -25 + -22}px), 0)`};
    }
  }

  @media screen and (max-width: 850px) {
    #heroImageMain {
      transform: scale(1.2)
        ${(props) => ` translate3d(-10%, calc(50px - ${props.offset / -35 - 35}px), 0)`};
    }

    #heroImageSub {
      top: 58%;
      left: 32%;
      transform: scale(1.65)
        ${(props) => ` translate3d(0, calc(-12% - ${props.offset / -30 - 46}px), 0)`};
    }
  }

  @media screen and (max-width: 575px) {
    #heroImageMain {
      transform: scale(1.1)
        ${(props) => ` translate3d(-7%, calc(50px - ${props.offset / -40 - 35}px), 0)`};
    }

    #heroImageSub {
      top: 65%;
      left: 35%;
      transform: scale(1.75)
        ${(props) => ` translate3d(0, calc(-12% - ${props.offset / -35 - 46}px), 0)`};
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
