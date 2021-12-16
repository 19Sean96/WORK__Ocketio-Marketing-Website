import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";
import heroImageMain from "../../public/images/landing-hero_main.png";
import heroImageSub1 from "../../public/images/landing-hero_sub-1.png";
import heroImageSub2 from "../../public/images/landing-hero_sub-2.png";

const StyledSub1 = styled(Image)`
transform: scale(0.525)
${(props) => 
  `translate(calc(-70vw - ${
    15 + (props.mouseCoord[0] * 15)
  }px), 
  calc(-12.5vw - ${props.offset / 3 + 15 + (props.mouseCoord[1] * 15)}px))`};`

const StyledSub2 = styled(Image)`
transform: scale(0.575)
${(props) => 
  `translate(calc(60vw - ${
    50 + (props.mouseCoord[0] * 50)
  }px), 
  calc(-17.5vw - ${props.offset / 3 + 50 + (props.mouseCoord[1] * 50)}px))`};`

const HeroHome = ({ mouseCoord}) => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log(mouseCoord)
  }, [mouseCoord])

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid"
        id="landing-hero"
      >
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

        <div
          className="image-group"
          offset={offset}
          mouseCoord={mouseCoord}
        >
          <Image
            id="heroImageMain"
            className={`image-group__image${
              offset === 0 ? " heroImageMain" : ""
            }`}
            layout="responsive"
            src={heroImageMain}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
          />
          <StyledSub1
            id="heroImageSub1"
            className={`image-group__image${
              offset === 0 ? " heroImageSub1" : ""
            }`}
            layout="responsive"
            src={heroImageSub1}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
          />
          <StyledSub2
            id="heroImageSub2"
            className={`image-group__image${
              offset === 0 ? " heroImageSub2" : ""
            } `}
            layout="responsive"
            src={heroImageSub2}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
          />
        </div>
      </section>
    </ContentWrapper>
  );
};

module.exports.Hero = HeroHome;
