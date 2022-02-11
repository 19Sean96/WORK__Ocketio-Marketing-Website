import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import ContentWrapper from "../ContentWrapper";
import featuresHeroImageMain from "../../public/images/temp/features-hero_main.png";
import ScrollAnimation from "react-animate-on-scroll";
import { BsWindows, BsApple } from "react-icons/bs";
import { DiAndroid, DiLinux } from "react-icons/di";
import { useAppContext } from "../../Context";
import {FeatureHeroBG} from "../SVG/WavyBG";

const animateOnce = true;

const HeroFeatures = ({ mouseCoord, offset }) => {
  const { isMobile } = useAppContext()
  useEffect(() => {
    console.log(mouseCoord);
  }, [mouseCoord]);

  return (
    <ScrollAnimation
      animateOnce={animateOnce}
      duration={0.3}
      animateIn="animate__fadeInDown"
      className="full-width_wrapper navy-bg"
    >
      <ContentWrapper>
        <section className="section section__with-grid" id="features-hero">
          <div id="features-hero-message">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.975}
            >
              <h2 className="h2">
                All of the essentials,<br /> none of the complexity.
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.95}
              delay={160}
            >
              <p className="p-small">
                Make your WireGuard® installation the best it can be
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
            animateOnce={animateOnce}
            animateIn="animate__fadeInDown"
            duration={0.6}
            delay={450}
            className="image-group"
          >
            <Image
              id="featuresHeroImageMain"
              className="image-group__image"
              layout="responsive"
              src={featuresHeroImageMain}
              alt="This is a dashboard showing stats representing the features of the app"
              priority
            />
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
                supervised <span className="last-word">devices</span>
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
      </ContentWrapper>
      <div id="featuresHeroBG">
        <FeatureHeroBG/>
      </div>
    </ScrollAnimation>
  );
};

module.exports.Hero = HeroFeatures;
