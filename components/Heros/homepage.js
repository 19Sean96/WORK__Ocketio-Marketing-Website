import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";
import heroImageMain from "../../public/images/Homepage-Landing_Hero-Main.png";
import heroImageSub1 from "../../public/images/Homepage-Landing_Hero-Sub_1.png";
import heroImageSub2 from "../../public/images/Homepage-Landing_Hero-Sub_2.png";
import heroImageSub3 from "../../public/images/Homepage-Landing_Hero-Sub_3.png";
const StyledSub1 = styled(Image)`
  transform: scale(0.375)
    ${(props) =>
      `translate(calc(-860px - 31vw - ${15 + props.mouseCoord[0] * 15}px), 
  calc(2.5vw - ${props.offset / 7 + 15 + props.mouseCoord[1] * 15}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.45)
      ${(props) =>
        `translate(calc(-250px - 71vw - ${15 + props.mouseCoord[0] * 15}px), 
      calc(2.5vw - ${props.offset / 7 + 15 + props.mouseCoord[1] * 15}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.485)
      ${(props) =>
        `translate(calc(-71vw - ${15 + props.mouseCoord[0] * 15}px), 
      calc(8.5vw - ${props.offset / 7 + 15 + props.mouseCoord[1] * 15}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.75)
      ${(props) =>
        `translate(calc(-41vw - ${15 + props.mouseCoord[0] * 15}px), 
      calc(25vw - ${props.offset / 7 + 15 + props.mouseCoord[1] * 15}px))`};
  }
`;

const StyledSub2 = styled(Image)`
  transform: scale(0.38)
    ${(props) =>
      `translate(calc(400px + 47.5vw - ${50 + props.mouseCoord[0] * 50}px), 
  calc( -300px - 16vw - ${
    props.offset / 3 + 50 + props.mouseCoord[1] * 50
  }px))`};

  @media (max-width: 1200px) {
    transform: scale(0.46)
      ${(props) =>
        `translate(calc(100px + 72.5vw - ${50 + props.mouseCoord[0] * 50}px), 
      calc( -50px - 28vw - ${
        props.offset / 3 + 50 + props.mouseCoord[1] * 50
      }px))`};
  }

  @media (max-width: 850px) {
    transform: scale(0.54)
      ${(props) =>
        `translate(calc(68.5vw - ${50 + props.mouseCoord[0] * 50}px), 
      calc( -18vw - ${props.offset / 3 + 50 + props.mouseCoord[1] * 50}px))`};
  }
  @media (max-width: 575px) {
    transform: scale(0.84)
      ${(props) =>
        `translate(calc(58.5vw - ${50 + props.mouseCoord[0] * 50}px), 
      calc( -12vw - ${props.offset / 3 + 50 + props.mouseCoord[1] * 50}px))`};
  }
`;

const StyledSub3 = styled(Image)`
  transform: scale(1)
    ${(props) =>
      `translate(calc(-10vw - ${50 + props.mouseCoord[0] * 5}px), 
  calc(2.5vw - ${props.offset / -7 + 5 + props.mouseCoord[1] * 2}px))`};

  @media (max-width: 1200px) {
    transform: scale(0.9)
      ${(props) =>
        `translate(calc(-10vw - ${50 + props.mouseCoord[0] * 5}px), 
      calc(2.5vw - ${props.offset / -7 + 5 + props.mouseCoord[1] * 2}px))`};
  }
  @media (max-width: 850px) {
    transform: scale(0.82)
      ${(props) =>
        `translate(calc(-15vw - ${50 + props.mouseCoord[0] * 5}px), 
      calc(-2.5vw - ${props.offset / -7 + 5 + props.mouseCoord[1] * 2}px))`};
  }
`;

const HeroHome = ({ mouseCoord, offset }) => {
  useEffect(() => {
    console.log(mouseCoord);
  }, [mouseCoord]);

  return (
    <div className="hero_wrapper">
      <section className="section section__with-grid" id="landing-hero">
        <div id="landing-hero-message">
          <h1 className="h1">
            We couldn't find the right VPN. <br /> So we built it.
          </h1>
          <p className="p-large">
            A cloud-centric software solutions that provides secure, remote
            access to networks you manage, whether on-prem or in the cloud.
          </p>

          <div className="cta-group">
            <Link href="/pricing">
              <button className="cta btn btn--filled j-text _600 capitalize">
                try beta
              </button>
            </Link>
            <Link href="/features">
              <button className="cta btn btn--bordered j-text _600 capitalize">
                learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="image-group" offset={offset} mouseCoord={mouseCoord}>
          <Image
            id="heroImageMain"
            className={`image-group__image${
              offset === 0 ? " heroImageMain" : ""
            }`}
            layout="responsive"
            src={heroImageMain}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            priority
          />
          <StyledSub1
            id="heroImageSub1"
            className={`image-group__image`}
            layout="responsive"
            src={heroImageSub1}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
            priority
          />
          <StyledSub2
            id="heroImageSub2"
            className={`image-group__image`}
            layout="responsive"
            src={heroImageSub2}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
            priority
          />
          <StyledSub3
            id="heroImageSub3"
            className={`image-group__image`}
            layout="fixed"
            width={232}
            src={heroImageSub3}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
            priority
          />
        </div>
      </section>
    </div>
  );
};

module.exports.Hero = HeroHome;
