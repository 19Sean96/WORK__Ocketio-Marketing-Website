import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";
import heroImageMain from "../../public/images/Homepage-Landing_Hero-Main.png";
import heroImageSub1 from "../../public/images/Homepage-Landing_Hero-Sub_1.png";
import heroImageSub2 from "../../public/images/Homepage-Landing_Hero-Sub_2.png";
import heroImageSub3 from '../../public/images/Homepage-Landing_Hero-Sub_3.png'
const StyledSub1 = styled(Image)`
transform: scale(0.375)
${(props) => 
  `translate(calc(-860px - 31vw - ${
    15 + (props.mouseCoord[0] * 15)
  }px), 
  calc(2.5vw - ${props.offset / 3 + 15 + (props.mouseCoord[1] * 15)}px))`};`

const StyledSub2 = styled(Image)`
transform: scale(0.38)
${(props) => 
  `translate(calc(400px + 47.5vw - ${
    50 + (props.mouseCoord[0] * 50)
  }px), 
  calc( -300px - 16vw - ${props.offset / 3 + 50 + (props.mouseCoord[1] * 50)}px))`};`

const StyledSub3 = styled(Image)`
transform: scale(1)
${(props) => 
  `translate(calc(-10vw - ${
    50 + (props.mouseCoord[0] * 5)
  }px), 
  calc(2.5vw - ${props.offset / -7 + 5 + (props.mouseCoord[1] * 2)}px))`};`

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
            className={`image-group__image`}
            layout="responsive"
            src={heroImageSub1}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
          />
          <StyledSub2
            id="heroImageSub2"
            className={`image-group__image`}
            layout="responsive"
            src={heroImageSub2}
            alt="this is the dashboard page. It shows user information, status and company performance statistics."
            offset={offset}
            mouseCoord={mouseCoord}
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
          />
        </div>
      </section>
    </ContentWrapper>
  );
};

module.exports.Hero = HeroHome;
