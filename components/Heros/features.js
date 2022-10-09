import Link from "next/link";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { BsWindows, BsApple } from "react-icons/bs";
import { DiAndroid, DiLinux } from "react-icons/di";
import Background from "../Site.Graphics/Waves/FeaturesHero";

import { HeroLeft, HeroRight } from "../Site.Graphics/FeatureHeroImages";

import HeroImageMain from '../../public/images/features/hero/features-hero-main.svg'
import HeroImageSubTop from '../../public/images/features/hero/features-hero-sub_top.svg'
import HeroImageSubBot from '../../public/images/features/hero/features-hero-sub_bot.svg'

import { useAppContext } from "../../Context";
const animateOnce = true;

const StyledImageGroup = styled.div`

  #heroImageMain {
    transform: scale(1)
    ${props => ` translate(9%, calc(0px - ${props.offset / -10 + -1}px))`};

    @media (max-width: 1150px) {
      transform: scale(1)
      ${props => ` translate(22.5%, calc(-25px - ${props.offset / -10 + -1}px))`}
    }
    @media (max-width: 875px) {
      transform: scale(1)
      ${props => ` translate(-8%, calc(-25px - ${props.offset / -10 + -1}px))`}
    }

    @media (max-width: 450px) {
      transform: scale(1)
      ${props => ` translate(-50%, calc(-25px - ${props.offset / -10 + -1}px))`}
    }
  }

  #heroImageSubTop {
    transform: scale(1)
    ${props => ` translate(${-(props.offset / -25)}px, calc(0px - ${props.offset / -15 + -1}px))`};
  
    @media (max-width: 1150px) {
      transform: scale(1)
      ${props => ` translate(calc(25px + ${-(props.offset / -15)}px), calc(25px - ${props.offset / -15 + -1}px))`};
    }
    @media (max-width: 875px) {
      transform: scale(1)
      ${props => ` translate(calc(35px + ${-(props.offset / -15)}px), calc(-10% - ${props.offset / -15 + -1}px))`};
    }
  
    @media (max-width: 450px) {
      transform: scale(1)
      ${props => ` translate(calc(30% + ${-(props.offset / -15)}px), calc(0% - ${props.offset / -15 + -1}px))`};
    }
  }

  #heroImageSubBot {
    transform: scale(1)
    ${props => ` translate(0px, calc(0px - ${props.offset / -15 + -1}px))`};
  
    @media (max-width: 1150px) {
      transform: scale(1)
      ${props => ` translate(0px, calc(25px - ${props.offset / -15 + -1}px))`};
    }
    @media (max-width: 875px) {
      transform: scale(1)
      ${props => ` translate(0px, calc(-10% - ${props.offset / -15 + -1}px))`};
    }
  
    @media (max-width: 450px) {
      transform: scale(1)
      ${props => ` translate(0px, calc(0% - ${props.offset / -15 + -1}px))`};
    }
  }

`
const HeroFeatures = () => {
  const { isMobile, scrollOffset } = useAppContext();

  return (
    <div
      className="full-width_wrapper"
    >
      <ScrollAnimation
        animateOnce={animateOnce}
        duration={0.3}
        animateIn="animate__fadeInDown"
        className="hero_wrapper hero_wrapper-features"
        style={{
          maxWidth: "1300px",
        }}
      >
        <section className="section section__with-grid" id="features-hero">
        <div className="bg"></div>

          <div id="features-hero-message">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.975}
            >
              <h1 className="h1">
                All of the essentials,
                <br /> none of the complexity.
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.95}
              delay={160}
            >
              <p className="p-lg">
                Wirewise gets devices connected to a network in short order and
                instantly levels up your WireGuard® implementation.
              </p>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              className="cta-group"
              duration={0.85}
              delay={500}
            >
              <Link href="/pricing">
                <button className="cta btn btn--filled btn--filled__darkmode capitalize">
                  get started
                </button>
              </Link>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            className="image-group_wrapper"
            animateOnce={animateOnce}
            animateIn="animate__fadeInDown"
            duration={0.6}
            delay={450}
          >
            <StyledImageGroup className="image-group" offset={scrollOffset}>
              <HeroImageMain
                id="heroImageMain"
                className="image-group__image"
              />
              <HeroImageSubTop
                id="heroImageSubTop"
                className="image-group__image"
              />
              <HeroImageSubBot
                id="heroImageSubBot"
                className="image-group__image"
              />
            </StyledImageGroup>
          </ScrollAnimation>

          <article id="supportedOS" className="banner f f-justify-between">
            <h6 className="h6 banner--heading">Available for</h6>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={1.2}
              className="item item-1"
              onMouseEnter={(e) => toggleHoverInfoBox("managedDevices")}
              onMouseLeave={(e) => toggleHoverInfoBox("")}
            >
              <div className="item--img__wrapper">
                <BsWindows className="item--img" />
                <span className="item--img--text">Windows</span>
              </div>
              <h6 className="h6 capitalize">
                managed <span className="last-word">devices</span>
              </h6>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={isMobile ? 1.2 : 0.8}
              className="item item-2"
              onMouseEnter={(e) => toggleHoverInfoBox("supervisedDevices")}
              onMouseLeave={(e) => toggleHoverInfoBox("")}
            >
              <div className="item--img__wrapper">
                <div className="item-2__1 item-2__subitem">
                  <BsApple className="item--img" />
                  <span className="item--img--text">
                    MacOS
                    <br />
                    iOS
                  </span>
                </div>
                <div className="item-2__2 item-2__subitem">
                  <DiLinux className="item--img" />
                  <span className="item--img--text">Linux</span>
                </div>
                <div className="item-2__3 item-2__subitem">
                  <DiAndroid className="item--img" />
                  <span className="item--img--text">Android</span>
                </div>
              </div>
              <h6 className="h6 capitalize">
                monitored <span className="last-word">devices</span>
              </h6>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={1.2}
              className="item item-3"
              onMouseEnter={(e) => toggleHoverInfoBox("gatewayManagement")}
              onMouseLeave={(e) => toggleHoverInfoBox("")}
            >
              <div className="item--img__wrapper">
                <DiLinux className="item--img" />
                <span className="item--img--text">Linux</span>
              </div>
              <h6 className="h6 capitalize">
                gateway <span className="last-word">management</span>
              </h6>
            </ScrollAnimation>
          </article>
        </section>
      </ScrollAnimation>
    </div>
  );
};

module.exports.Hero = HeroFeatures;
