import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";

import featuresHeroImageMain from "../../public/images/features-hero_main.png";
import featuresHeroImageAside from "../../public/images/features-hero_aside.png";
import ScrollAnimation from "react-animate-on-scroll";

const HeroFeatures = ({ mouseCoord, offset }) => {
  useEffect(() => {
    console.log(mouseCoord);
  }, [mouseCoord]);

  return (
    <ContentWrapper>
      <section className="section section__with-grid" id="features-hero">
        <div id="features-hero-message">
          <ScrollAnimation animateIn="animate__fadeInLeft" duration={.975}>
            <h2 className="h2">
              All of the essentials. <br />
              None of the complexity.
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInLeft" duration={.95} delay={160}>
            <p className="p-large">
              Wirewise is fundamentally a tool built on top of WireGuard.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="animate__fadeInUp" className="cta-group" duration={.85} delay={500}>
            <Link href="/pricing">
              <button className="cta btn btn--filled j-text _600 capitalize">
                try beta
              </button>
            </Link>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="animate__fadeInDown" duration={.6} delay={450} className="image-group">
          <Image
            id="featuresHeroImageMain"
            className="image-group__image"
            layout="responsive"
            src={featuresHeroImageMain}
            alt="This is a dashboard showing stats representing the features of the app"
            priority
          />
        </ScrollAnimation>
      </section>
    </ContentWrapper>
  );
};

module.exports.Hero = HeroFeatures;
