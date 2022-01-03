import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import styled from "styled-components";

import useObserver from "../../Observer";

import ContentWrapper from "../ContentWrapper";
import worldMap from "../../public/images/world-map.png";
import GraphicSecure from "../../public/images/WW_Website_Homepage-Graphics-Secure.png";
import GraphicStreamlined from "../../public/images/WW_Website_Homepage-Graphics-Streamlined.png";
import GraphicEfficient from "../../public/images/WW_Website_Homepage-Graphics-Efficient.png";
import GraphicCostEffective from "../../public/images/WW_Website_Homepage-Graphics_Cost-effective.png";

import Card1 from "../../public/images/step-1.png";
import Card2 from "../../public/images/step-2.png";
import Card3 from "../../public/images/step-3.png";

const FirstBanner = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="firstBannerHomepage"
      >
        <h5 className="h5 banner--title">
          Wirewise is a VPN designed for easy, secure network access. It's that
          simple.
        </h5>
        <p className="p-small banner--paragraph">
          Two years ago we started searching for a capable WireGuard® VPN that
          could support a growing distributed team. But the available solutions
          were too clunky, too expensive, or just didn't have the right
          features. So now we're developing the VPN we wish we'd been able to
          find.
        </p>
        <div className="image_wrapper banner--image">
          <Image
            src={worldMap}
            id="worldMap"
            alt="World Map"
            layout="responsive"
          />
        </div>
      </section>
    </ContentWrapper>
  );
};

const WhoSection = (props) => {

  const [ containerRef, isVisible ] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: .3
  })


  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="sectionWhoHomepage"
        ref={containerRef}
        style={{
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="section--heading">
          <h3 className="h3">Who is it for?</h3>
          <p className="p-small">
            No solution is perfect for everyone, but Wirewise adds useful
            features to a cutting-edge VPN protocol in a way that we think makes
            it an excellent option for teams of many sizes.
          </p>
        </div>

        <article className="card__wrapper f f-align-stretch f-justify-stretch f-no-wrap all-columns">
          <article className="card">
            <div className="card--text">
              <h5 className="h5 capitalize">individual users</h5>
              <p className="p-small">
                Share access to personal projects, test development work, or
                improve your gaming experience.
              </p>
            </div>
            <div className="card__image__wrapper">
              <Image
                src={Card1}
                id="cardOneImg"
                className="card__image"
                alt="image 1"
                layout="responsive"
              />
            </div>
          </article>
          <article className="card">
            <div className="card--text">
              <h5 className="h5 capitalize">small business teams</h5>
              <p className="p-small">
                Grant a handful of remote employees access to internal resources
                without unnecessary complexity.
              </p>
            </div>
            <div className="card__image__wrapper">
              <Image
                src={Card2}
                id="cardTwoImg"
                className="card__image"
                alt="image 2"
                layout="responsive"
              />
            </div>
          </article>
          <article className="card">
            <div className="card--text">
              <h5 className="h5 capitalize">mid-sized companies</h5>
              <p className="p-small">
                Manage network controls in a way that scales alongside a growing
                business effort.
              </p>
            </div>
            <div className="card__image__wrapper">
              <Image
                src={Card3}
                id="cardThreeImg"
                className="card__image"
                alt="image 3"
                layout="responsive"
              />
            </div>
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

  const [ containerRef, isVisible ] = useObserver({
    root: null,
    rootMargin: '0px',
    threshold: .15
  })

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="sectionWhatHomepage"
        ref={containerRef}
        style={{
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="section--heading" >
          <h3 className="h3">What makes it great?</h3>
          <p className="p-small">
            No solution is perfect for everyone, but Wirewise adds useful
            features to a cutting-edge VPN protocol in a way that we think makes
            it an excellent option for teams of many sizes.
          </p>
        </div>
        <div className="section--body">
          {whatSectionContent.map((item, i) => (
            <WhatSectionItem
              reversed={item.reversed}
              img={item.image.src}
              alt={item.image.alt}
              imgID={item.image.id}
              title={item.title}
              par={item.par}
              list={item.list}
              key={"what-item-" + i}
            />
          ))}
          <div className="cta-group">
            <Link href="/pricing">
              <button className="cta btn btn--filled j-text _600 capitalize">
                create a network
              </button>
            </Link>
            <Link href="/features">
              <button className="cta btn btn--bordered j-text _600 capitalize">
                learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

function WhatSectionItem({ reversed, img, alt, imgID, title, par, list }) {
  return (
    <article className={`section--body--item${reversed ? " reversed" : ""}`}>
      <div className="text-block">
        <h4 className="h4 capitalize">{title}</h4>
        <p className="p-small">{par}</p>
      </div>
      <ul className="checklist">
        {list.map((item, i) => (
          <li className="checklist--item" key={"item-" + i}>
            <img src="/images/check.svg" alt="check icon" className="check" />
            <h6 className="h6 _400">{item}</h6>
          </li>
        ))}
      </ul>
      <div className="image__wrapper">
        <Image
          src={img}
          alt={alt}
          id={imgID}
          className="section--body--item__image image"
          // layout="responsive"
        />
      </div>
    </article>
  );
}

export { FirstBanner, WhoSection, WhatSection };
