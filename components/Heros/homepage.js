import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import heroImageMain from "../../public/images/homepage/hero/hero_main-bg.png";
import heroImageSub1 from "../../public/images/homepage/hero/hero_sub-1.png";
import heroImageSub2 from "../../public/images/homepage/hero/hero_sub-2.png";
import heroImageSub3 from "../../public/images/homepage/hero/hero_sub-3.png";

import HomepageBG from "../SVG/HomepageBG";

import { useAppContext } from "../../Context";
const animateOnce = true;

const StyledSub1 = styled(Image)`
  transform-origin: 0 100%;
  transform: scale(0.45)
    ${(props) => `translate(-65%, calc(-40% - ${props.offset / 7}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.45)
      ${(props) =>
        `translate(-65%, calc(-40% - ${
          props.offset / 10 + 15 + -0.4 * 15
        }px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.465)
      ${(props) =>
        `translate(-65.5%, calc(-35% - ${
          props.offset / 10 + 15 + -0.4 * 12
        }px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.575)
      ${(props) =>
        `translate(-55%, calc(0% - ${props.offset / 15 + 15 + -0.4 * 10}px))`};
  }
`;

const StyledSub2 = styled(Image)`
  transform-origin: 100% 0;
  transform: scale(0.52)
    ${(props) =>
      `translate(60%, calc(-15% - ${props.offset / 3 + 50 + -0.4 * 50}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.46)
      ${(props) =>
        `translate(60%, calc(-10% - ${
          props.offset / 6 + 100 + -0.4 * 150
        }px))`};
  }

  @media (max-width: 850px) {
    transform: scale(0.54)
      ${(props) =>
        `translate(60%, calc( -10% - ${
          props.offset / 9 + 150 + -0.4 * 150
        }px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.7)
      ${(props) =>
        `translate(60%, calc( -45% - ${
          props.offset / 12 + 50 + -0.4 * 150
        }px))`};
  }
`;

const StyledSub3 = styled(Image)`
  transform-origin: 0 100%;
  transform: scale(0.85)
    ${(props) =>
      `translate(-15vw, calc(1vw - ${props.offset / -7 + 5 + -0.4 * 2}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.8)
      ${(props) =>
        `translate(-12vw, calc(3vw - ${props.offset / -12 + 5 + -0.4 * 2}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.6)
      ${(props) =>
        `translate(-19vw, calc(4vw - ${props.offset / -16 + 5 + -0.4 * 2}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.4)
      ${(props) =>
        `translate(-22vw, calc(-62.5vw - ${
          props.offset / -16 + 5 + -0.4 * 2
        }px))`};
  }
`;

const StyledMain = styled(Image)`
  transform-origin: top;
  transform: scale(0.9)
    ${(props) => ` translate(0, calc(0px - ${props.offset / -25 + -0.4}px))`};

  @media (max-width: 1200px) {
    transform: scale(1)
      ${(props) => ` translate(0, calc(0px - ${props.offset / -45 + -0.4}px))`};
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

const StyledImageGroup = styled.div`
  & > span {
    &:first-child {
      & > span {
        &::after {
          top: 45%;
          left: 20%;
          transform-origin: top;
          transform: scale(0.9)
            ${(props) =>
              ` translate(0, calc(0px - ${props.offset / -20 + -0.4}px))`};

          @media (max-width: 1200px) {
            top: 50.95%;
            left: 20%;

            transform: scale(1)
              ${(props) =>
                ` translate(0, calc(0px - ${props.offset / -35 + -0.4}px))`};
          }
          @media (max-width: 850px) {
            top: 53%;
            left: 20%;

            transform: scale(1.05)
              ${(props) =>
                ` translate(0, calc(-12% - ${props.offset / -60 - 35}px))`};
          }
          @media (max-width: 575px) {
            top: 63.5%;
            left: 20%;

            transform: scale(1.25)
              ${(props) =>
                ` translate(0, calc(-12% - ${props.offset / -60 - 35}px))`};
          }
        }
      }
    }
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
              We couldn't find the right VPN. <br /> So we built it.
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInDown"
            duration={0.7}
            delay={250}
          >
            <p className="p-large">
              A cloud-centric software solutions that provides secure, remote
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
                  className="cta btn btn--bordered j-text _400 capitalize"
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
          offset={isSafari ? 0 : offset}
        >
          <StyledMain
            id="heroImageMain"
            className={`animate__animated image-group__image${
              offset === 0 ? " heroImageMain" : ""
            }`}
            layout="responsive"
            src={heroImageMain}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={isSafari ? 0 : offset}
            placeholder="blur"
            priority
          />
          <StyledSub1
            id="heroImageSub1"
            className={`animate__animated image-group__image`}
            layout="responsive"
            src={heroImageSub1}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={isSafari ? 0 : offset}
            placeholder="blur"
            priority
          />
          <StyledSub2
            id="heroImageSub2"
            className={`animate__animated image-group__image`}
            layout="responsive"
            src={heroImageSub2}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={isSafari ? 0 : offset}
            placeholder="blur"
            priority
          />
          <StyledSub3
            id="heroImageSub3"
            className={`animate__animated image-group__image`}
            layout="fixed"
            width={232}
            src={heroImageSub3}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={isSafari ? 0 : offset}
            priority
          />
        </StyledImageGroup>
      </section>
      <div id="homepageHeroBG">
        <HomepageBG />
        <div className="trailing"></div>
      </div>
    </div>
  );
};

module.exports.Hero = HeroHome;
