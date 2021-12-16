import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";
import worldMap from "../../public/images/world-map.png";

const FirstBanner = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-flex f-align-center f-justify-between all-columns"
        id="firstBannerHomepage"
      >
        <div className="w50">
          <h4 className="h4">
            Wirewise is a VPN designed for easy, secure network access. It's
            that simple.
          </h4>
          <p className="p-large">
            Two years ago we started searching for a capable WireGuard® VPN that
            could support a growing distributed team. But the available
            solutions were too clunky, too expensive, or just didn't have the
            right features. So now we're developing the VPN we wish we'd been
            able to find.
          </p>
        </div>
        <div className="w45 image_wrapper">
          <Image src={worldMap} id="worldMap" alt="World Map" />
        </div>
      </section>
    </ContentWrapper>
  );
};

const WhoSection = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="sectionWhoHomepage"
      >
        <div className="section--heading">
          <h2 className="h2">Who is it for?</h2>
          <p className="p-small">
            No solution is perfect for everyone, but Wirewise adds useful
            features to a cutting-edge VPN protocol in a way that we think makes
            it an excellent option for teams of many sizes.
          </p>
        </div>

        <article className="card__wrapper f f-align-stretch f-justify-stretch f-no-wrap all-columns">
          <article className="card">
            <h5 className="h5 capitalize">individual users</h5>
            <p className="p-small">
              Share access to personal projects, test development work, or
              improve your gaming experience.
            </p>
          </article>
          <article className="card">
            <h5 className="h5 capitalize">small business teams</h5>
            <p className="p-small">
              Grant a handful of remote employees access to internal resources
              without unnecessary complexity.
            </p>
          </article>
          <article className="card">
            <h5 className="h5 capitalize">mid-sized companies</h5>
            <p className="p-small">
              Manage network controls in a way that scales alongside a growing
              business effort.
            </p>
          </article>
        </article>
      </section>
    </ContentWrapper>
  );
};
const WhatSection = (props) => {
  return (
    <ContentWrapper>
      <section className="section section__with-grid all-columns">
        <div className="section--heading">
          <h2 className="h2">What makes it great?</h2>
          <p className="p-small">
            No solution is perfect for everyone, but Wirewise adds useful
            features to a cutting-edge VPN protocol in a way that we think makes
            it an excellent option for teams of many sizes.
          </p>
        </div>
      </section>
    </ContentWrapper>
  );
};

export { FirstBanner, WhoSection, WhatSection };
