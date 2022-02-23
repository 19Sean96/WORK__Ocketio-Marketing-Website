import Image from "next/image";
import Link from "next/link";

import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../ContentWrapper";

import MapImg from "../SVG/MapImg";

import SecureSVG from "../../public/images/homepage/body/Secure.svg";
import StreamlinedSVG from "../../public/images/homepage/body/Streamlined.svg";
import EfficientSVG from "../../public/images/homepage/body/Efficient.svg";
import CostEffectiveSVG from "../../public/images/homepage/body/Cost-Effective.svg";

import { BsCheckCircle, BsPerson, BsShop, BsBuilding } from "react-icons/bs";
import { useAppContext } from "../../Context";
import { HomepageWaveTop, HomepageWaveBot } from "../SVG/WavyBG";

const animateOnce = true;

const FirstBanner = (props) => {
  const { isMobile } = useAppContext();
  return (
    <ContentWrapper width="1222px">
      <section
        className="section section__with-grid all-columns"
        id="firstBannerHomepage"
      >
        <HomepageWaveTop />
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.54}
          className="banner--title"
          offset={-100}
        >
          <h5 className="h5">
            Designed for easy, secure remote access management. <br />
            It’s that simple.
          </h5>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInUp"
          duration={0.68}
          className="banner--paragraph"
          offset={-100}
        >
          <p className="p-small">
            A couple years ago we started searching for a capable WireGuard® VPN
            that could easily support a growing distributed team. But the
            available solutions were too clunky, too expensive, or just didn't
            have the right features. So now we're developing the VPN we wish
            we'd been able to find.
          </p>
          <Link href="/features">
            <a className="btn btn--filled">Explore the Features</a>
          </Link>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeIn"
          duration={0.6}
          delay={350}
          className="image_wrapper banner--image"
          offset={-100}
        >
          <MapImg />
        </ScrollAnimation>
        <HomepageWaveBot />
      </section>
    </ContentWrapper>
  );
};

const WhatSection = (props) => {
  const { isMobile } = useAppContext();

  const whatSectionContent = [
    {
      title: `it's secure.`,
      par: `Wirewise builds on industry-leading encryption methods for reliably protecting remote connections to your network resources. Your data also remains completely private and it never touches our servers.`,

      image: {
        src: SecureSVG,
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
        src: StreamlinedSVG,
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
        src: EfficientSVG,
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
      par: `Reliable security shouldn't break the bank. A straightforward pricing structure makes it easy to try the product and affordable to get your people and their devices safely connected, no matter how many there are.`,

      image: {
        src: CostEffectiveSVG,
        id: "graphicCostEffective",
        alt: "Illustration which visualizes the security that comes with Wirewise VPN technology.",
      },

      list: [
        "Full feature parity across plans",
        "Simple pricing structure",
        "Affordable at any size",
      ],
      reversed: false,
    },
  ];

  return (
    <ContentWrapper width="1200px">
      <section
        className="section section__with-grid all-columns"
        id="sectionWhatHomepage"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.9}
          offset={-186}
          // animateOnce={true}
          className="section--heading"
        >
          <h3 className="h3">What makes it great?</h3>
          <p className="p-small">
            Wirewise is built with a set of core attributes that just might make
            it the best solution for your real-world network security needs.
          </p>
        </ScrollAnimation>
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
              isMobile={isMobile}
            />
          ))}
          <div className="cta-group">
            <Link href="/pricing">
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                duration={0.675}
                className="cta"
              >
                <button
                  className="btn btn--filled j-text _400 capitalize"
                  aria-label="Get started with our beta program by creating a network"
                >
                  create a network
                </button>
              </ScrollAnimation>
            </Link>
            <Link href="/features">
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                duration={0.675}
                className="cta"
              >
                <button
                  className="cta btn btn--bordered j-text _400 capitalize"
                  aria-label="Get additional information about Wirewise"
                >
                  learn more
                </button>
              </ScrollAnimation>
            </Link>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

function WhatSectionItem({
  reversed,
  img,
  alt,
  imgID,
  title,
  par,
  list,
  isMobile,
}) {
  return (
    <article className={`section--body--item${reversed ? " reversed" : ""}`}>
      <ScrollAnimation
        animateOnce={animateOnce}
        animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
        className="text-block"
        duration={0.6}
      >
        <h4 className="h4 capitalize">{title}</h4>
        <p className="p-small">{par}</p>
      </ScrollAnimation>
      <ul className="checklist">
        {list.map((item, i) => (
          <li className="checklist--item" key={"item-" + i}>
            <ScrollAnimation
              animateOnce={animateOnce}
              duration={1 - i * 0.1}
              delay={i * 25}
              offset={-128}
              animateIn="animate__fadeInUp"
              className="checklist--item"
            >
              <BsCheckCircle
                style={{
                  width: "22px",
                  height: "22px",
                  fill: "#1688F2",
                }}
              />
              <h6 className="p-small _400">{item}</h6>
            </ScrollAnimation>
          </li>
        ))}
      </ul>
      <ScrollAnimation
        animateOnce={animateOnce}
        animateIn="animate__fadeIn"
        duration={0.7}
        className="image__wrapper"
        delay={150}
      >
        <Image
          src={img}
          alt={alt}
          id={imgID}
          className="section--body--item__image image"
          // placeholder="blur"
          // layout="responsive"
        />
      </ScrollAnimation>
    </article>
  );
}

const WhoSection = (props) => {
  const { isMobile } = useAppContext();

  return (
    <ContentWrapper width="1080px">
      <section
        className="section section__with-grid all-columns"
        id="sectionWhoHomepage"
      >
        <HomepageWaveTop />

        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.44}
          offset={-186}
          className="section--heading"
        >
          <h2 className="h2">Who is it for?</h2>
          <p className="p-small">
            Wirewise adds useful features to a cutting-edge VPN protocol in a
            way that makes it an excellent option whether you’re a small shop or
            a growing enterprise
          </p>
        </ScrollAnimation>
        <article className="card__wrapper f f-align-stretch f-justify-stretch f-no-wrap all-columns">
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.7}
            className="card"
          >
            <BsPerson
              style={{
                width: "auto",
                height: "55px",
                minWidth: "70px",
                position: "relative",
                transform: "scale(1.15)",
                transformOrigin: "50% 0%",
              }}
            />
            <div className="card--text">
              <h4 className="h6 capitalize">individual users</h4>
              <p className="p-small">
                Share access to personal projects, test development work, or
                improve your gaming experience.
              </p>
            </div>
            <Link href="/pricing">
              <a className="btn btn--filled">Get Started</a>
            </Link>
          </ScrollAnimation>
          <div className="divider"></div>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.7}
            // animateOnce={true}
            className="card"
            delay={100}
          >
            <BsShop
              style={{
                width: "auto",
                height: "55px",
                minWidth: "70px",
              }}
            />
            <div className="card--text">
              <h4 className="h6 capitalize">small business teams</h4>
              <p className="p-small">
                Grant a handful of remote employees access to internal resources
                without unnecessary complexity.
              </p>
            </div>
            <Link href="/pricing">
              <a className="btn btn--filled">Get Started</a>
            </Link>
          </ScrollAnimation>
          <div className="divider"></div>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.7}
            // animateOnce={true}
            className="card"
            delay={200}
          >
            {" "}
            <BsBuilding
              style={{
                width: "auto",
                height: "55px",
                minWidth: "70px",
              }}
            />
            <div className="card--text">
              <h4 className="h6 capitalize">mid-sized companies</h4>
              <p className="p-small">
                Manage network controls in a way that scales alongside a growing
                business effort.
              </p>
            </div>
            <Link href="/pricing">
              <a className="btn btn--filled">Get Started</a>
            </Link>
          </ScrollAnimation>
        </article>

        <HomepageWaveBot />
      </section>
    </ContentWrapper>
  );
};

export { FirstBanner, WhoSection, WhatSection };
