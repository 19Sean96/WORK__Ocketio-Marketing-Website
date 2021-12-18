import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ContentWrapper from "../ContentWrapper";
import worldMap from "../../public/images/world-map.png";
import GraphicSecure from "../../public/images/WW_Website_Homepage-Graphics-Secure.png";
import GraphicStreamlined from "../../public/images/WW_Website_Homepage-Graphics-Streamlined.png";
import GraphicEfficient from "../../public/images/WW_Website_Homepage-Graphics-Efficient.png";
import GraphicCostEffective from "../../public/images/WW_Website_Homepage-Graphics_Cost-effective.png";

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
  const whatSectionContent = [
    {
      title: `it's secure.`,
      par: `Wirewise builds on industry-leading encryption methods for reliably protecting remote connections to your network resources. Your data also remains completely private and it never touches our servers.`,

      image: {
        src: GraphicSecure,
        id: "graphicSecure",
        alt: "Illustration which visualizes the security that comes with Wirewise VPN technology.",
      },

      list: [
        "Protected with WireGuard®",
        "Modernized security protocols",
        "Completely private connections",
      ],
      reversed: true,
    },
    {
      title: `it's streamlined.`,
      par: `No more manual configuration headaches. Set up your network in minutes through our helpful wizard and roll out quickly to your team with unobtrusive, always-on access to internal resources. Once up and running, manage the network and devices easily from a single web-based tool.`,

      image: {
        src: GraphicStreamlined,
        id: "graphicStreamlined",
        alt: "Illustration which visualizes the peace of mind that comes with Wirewise VPN technology.",
      },

      list: [
        "15-minute setup time",
        "Reduced user logins",
        "Centralized administration",
      ],
      reversed: false,
    },
    {
      title: `it's efficient.`,
      par: `There are no appliances or extensive infrastructure to maintain, which reduces overhead for providing access to networks in multiple locations. The extremely lean codebase also maximizes network performance and minimizes battery drain for distributed devices.`,

      image: {
        src: GraphicEfficient,
        id: "graphicEfficient",
        alt: "Illustration which visualizes how efficient the Wirewise VPN technology is",
      },

      list: [
        "Minimal footprint",
        "Streamlined codebase",
        "Low latency and battery strain",
      ],
      reversed: true,
    },
    {
      title: `it's cost-effective.`,
      par: `Effective security shouldn't break the bank. A straightforward pricing structure makes it easy to try the product and affordable to get your people and their devices safely connected, no matter how many there are.`,

      image: {
        src: GraphicCostEffective,
        id: "graphicCostEffective",
        alt: "Illustration which visualizes the security that comes with Wirewise VPN technology.",
      },

      list: [
        "Three free devices",
        "Simple pricing structure",
        "Affordable at any size",
      ],
      reversed: false,
    },
  ];

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="sectionWhatHomepage"
      >
        <div className="section--heading">
          <h2 className="h2">What makes it great?</h2>
          <p className="p-small">
            No solution is perfect for everyone, but Wirewise adds useful
            features to a cutting-edge VPN protocol in a way that we think makes
            it an excellent option for teams of many sizes.
          </p>
        </div>
        <div className="section--body">
          {whatSectionContent.map((item) => (
            <WhatSectionItem
              reversed={item.reversed}
              img={item.image.src}
              alt={item.image.alt}
              imgID={item.image.id}
              title={item.title}
              par={item.par}
              list={item.list}
            />
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
};

function WhatSectionItem({ reversed, img, alt, imgID, title, par, list }) {
  return (
    <article
      className={`f f-justify-between f-align-center section--body--item${
        reversed ? " reversed" : ""
      }`}
    >
      <div className="w45">
        <h4 className="h4 capitalize">{title}</h4>
        <p className="p-small">{par}</p>
        <ul className="checklist">
          {list.map((item) => (
            <li className="checklist--item">
              <img src="/images/check.svg" alt="check icon" className="check" />
              <h5 className="h5 _400">{item}</h5>
            </li>
          ))}
        </ul>
      </div>
      <div className="w45">
        <Image
          src={img}
          alt={alt}
          id={imgID}
          className="section--body--item__image"
        />
      </div>
    </article>
  );
}

export { FirstBanner, WhoSection, WhatSection };