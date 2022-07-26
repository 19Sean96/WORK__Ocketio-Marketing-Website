import Link from "next/link";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { BsWindows, BsApple } from "react-icons/bs";
import { DiAndroid, DiLinux } from "react-icons/di";
import Background from "../Site.Graphics/Waves/FeaturesHero";

import { HeroLeft, HeroRight } from "../Site.Graphics/FeatureHeroImages";


import { useAppContext } from "../../Context";
const animateOnce = true;


const StyledHeroLeft = styled(HeroLeft)`
  color: green;
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

  @media (max-width: 875px) {
    transform: scale(1)
    ${props => ` translate(-50%, calc(-25px - ${props.offset / -10 + -1}px))`}
  }

`

const StyledHeroRight = styled(HeroRight)`
  color: red;
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
`

const HeroFeatures = ({ offset }) => {
  const { isMobile, isSafari } = useAppContext();

  return (
    <div
      className="full-width_wrapper navy-bg"
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
          <div id="features-hero-message">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.975}
            >
              <h2 className="h2">
                All of the essentials,
                <br /> none of the complexity.
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.95}
              delay={160}
            >
              <p className="p-small">
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
                <button className="cta btn btn--filled j-text _600 capitalize">
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
            <div className="image-group">
              <StyledHeroLeft
                id="featuresHeroImageLeft"
                className="image-group__image"
                offset={isSafari ? 0 : offset}
              />
              <StyledHeroRight
                id="featuresHeroImageRight"
                className="image-group__image"
                offset={isSafari ? 0 : offset}
              />
            </div>
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
            {/* <span className="divider"></span> */}
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
            {/* <span className="divider"></span> */}
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
      <div id="featuresHeroBG">
        <Background />
      </div>
    </div>
  );
};

module.exports.Hero = HeroFeatures;
