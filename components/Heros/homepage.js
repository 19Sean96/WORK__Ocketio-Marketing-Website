import Link from "next/link";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import heroImageMain from "../../public/images/Homepage-Landing_Hero-Main.png";
import heroImageSub1 from "../../public/images/Homepage-Landing_Hero-Sub_1.png";
import heroImageSub2 from "../../public/images/Homepage-Landing_Hero-Sub_2.png";
import heroImageSub3 from "../../public/images/Homepage-Landing_Hero-Sub_3.png";

const animateOnce = true;

const StyledSub1 = styled(Image)`
  transform: scale(0.375)
    ${(props) =>
      `translate(calc(-860px - 31vw), 
  calc(2.5vw - ${props.offset / 7}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.45)
      ${(props) =>
        `translate(calc(-250px - 71vw), 
      calc(2.5vw - ${props.offset / 10 + 15 + -0.4 * 15}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.485)
      ${(props) =>
        `translate(-71vw, 
      calc(8.5vw - ${props.offset / 10 + 15 + -0.4 * 12}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.65)
      ${(props) =>
        `translate(-55vw, 
      calc(25vw - ${props.offset / 15 + 15 + -0.4 * 10}px))`};
  }
`;

const StyledSub2 = styled(Image)`
  transform: scale(0.38)
    ${(props) =>
      `translate(calc(400px + 47.5vw), 
  calc( -300px - 16vw - ${props.offset / 3 + 50 + -0.4 * 50}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.46)
      ${(props) =>
        `translate(calc(100px + 72.5vw), 
      calc( -50px - 28vw - ${props.offset / 6 + 100 + -0.4 * 150}px))`};
  }

  @media (max-width: 850px) {
    transform: scale(0.54)
      ${(props) =>
        `translate(68.5vw, 
      calc( -18vw - ${props.offset / 9 + 150 + -0.4 * 150}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.64)
      ${(props) =>
        `translate(58.5vw, 
      calc( -29vw - ${props.offset / 12 + 50 + -0.4 * 150}px))`};
  }
`;

const StyledSub3 = styled(Image)`
  transform: scale(1)
    ${(props) =>
      `translate(calc(-10vw - 45px), 
  calc(2.5vw - ${props.offset / -7 + 5 + -0.4 * 2}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.9)
      ${(props) =>
        `translate(calc(-10vw - 45px), 
      calc(2.5vw - ${props.offset / -12 + 5 + -0.4 * 2}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.82)
      ${(props) =>
        `translate(calc(-20vw - 45px), 
      calc(-2.5vw - ${props.offset / -16 + 5 + -0.4 * 2}px))`};
  }
`;

const StyledMain = styled(Image)`
  transform: scale(1) 
    ${(props) =>
      ` translate(0, 
calc(2.5vw - ${props.offset / -25 + -0.4}px))`};

  @media (max-width: 1200px) {
    transform: scale(1) 
      ${(props) =>
        ` translate(0, 
  calc(2.5vw - ${props.offset / -45 + -0.4}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(1.15) 
      ${(props) =>
        ` translate(0, 
  calc(-2.5vw - ${props.offset / -75 - 35}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(1.35) 
      ${(props) =>
        ` translate(0, 
    calc(-2.5vw - ${props.offset / -75 - 35}px))`};
  }
`;

const HeroHome = ({ offset }) => {
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

        <div className="image-group" offset={offset}>
          <StyledMain
            id="heroImageMain"
            className={`animate__animated image-group__image${
              offset === 0 ? " heroImageMain" : ""
            }`}
            layout="responsive"
            src={heroImageMain}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            priority
          />
          <StyledSub1
            id="heroImageSub1"
            className={`animate__animated image-group__image`}
            layout="responsive"
            src={heroImageSub1}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            priority
          />
          <StyledSub2
            id="heroImageSub2"
            className={`animate__animated image-group__image`}
            layout="responsive"
            src={heroImageSub2}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            priority
          />
          <StyledSub3
            id="heroImageSub3"
            className={`animate__animated image-group__image`}
            layout="fixed"
            width={232}
            src={heroImageSub3}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            priority
          />
        </div>
      </section>
    </div>
  );
};

module.exports.Hero = HeroHome;
