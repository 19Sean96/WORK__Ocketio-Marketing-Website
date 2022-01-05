import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";

import featuresHeroImageMain from "../../public/images/features-hero_main.png";
import featuresHeroImageAside from "../../public/images/features-hero_aside.png";

const HeroFeatures = ({ mouseCoord, offset }) => {
  useEffect(() => {
    console.log(mouseCoord);
  }, [mouseCoord]);

  return (
    <ContentWrapper>
      <section className="section section__with-grid" id="features-hero">
        <div id="features-hero-message">
            <h2 className="h2">
              All of the essentials, none of the complexity.
            </h2>
            <p className="p-large">
              Wirewise is fundamentally a tool built on top of WireGuard.
            </p>

          <div className="cta-group">
            <Link href="/pricing">
              <button className="cta btn btn--filled j-text _600 capitalize">
                try beta
              </button>
            </Link>
          </div>
        </div>
        <div className="image-group">
          <Image
            id="featuresHeroImageMain"
            className="image-group__image"
            layout="responsive"
            src={featuresHeroImageMain}
            alt="This is a dashboard showing stats representing the features of the app"
            priority
          />
        </div>
      </section>
    </ContentWrapper>
  );
};

module.exports.Hero = HeroFeatures;
