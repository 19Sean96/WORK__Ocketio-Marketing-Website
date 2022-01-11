import Image from "next/image";

import { useState, useEffect } from "react";
import styled from "styled-components";

import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../ContentWrapper";
import HoverInfoBox from "../util/HoverInfoBox";
import howItWorksDiagram from "../../public/images/_WW_Website_Features-Diagram.png";
import optimizeExperienceImage from "../../public/images/features-body_optimize-experience.png";
import Step1 from "../../public/images/step-1.png";
import Step2 from "../../public/images/step-2.png";
import Step3 from "../../public/images/step-3.png";
import Step4 from "../../public/images/step-4.png";
import Step5 from "../../public/images/step-5.png";
import { useAppContext } from "../../Context";
import { BsWindows, BsApple, BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { DiAndroid, DiLinux } from "react-icons/di";

import ReactSwipe from "react-swipe";
const ArchitectureSection = (props) => {
  const [hoverInfoBox, toggleHoverInfoBox] = useState("");
  const [specifiedInfo, specifyInfo] = useState({});

  const OSTips = [
    {
      title: "managed devices",
      slug: "managedDevices",
      message:
        "a managed device is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi felis, et id aliquam ac tincidunt.",
    },
    {
      title: "supervised devices",
      slug: "supervisedDevices",
      message:
        "supervised devices support Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi felis, et id aliquam ac tincidunt.",
    },
    {
      title: "gateway management",
      slug: "gatewayManagement",
      message:
        "THe purpose of gateway management is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi felis, et id aliquam ac tincidunt.",
    },
  ];

  return (
    <ContentWrapper>
      {/* <HoverInfoBox
        title={
          hoverInfoBox
            ? OSTips[OSTips.findIndex((tip) => tip.slug === hoverInfoBox)].title
            : ""
        }
        message={
          hoverInfoBox
            ? OSTips[OSTips.findIndex((tip) => tip.slug === hoverInfoBox)]
                .message
            : ""
        }
        visible={hoverInfoBox}
      /> */}

      <section
        className="section section__with-grid all-columns"
        id="architectureSection"
      >
        <h6 className="h6 banner--heading">Wirewise runs on</h6>
        <article id="supportedOS" className="banner f f-justify-between">
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={1.2}
            className="item item-1"
            onMouseEnter={(e) => toggleHoverInfoBox("managedDevices")}
            onMouseLeave={(e) => toggleHoverInfoBox("")}
          >
            <div className="item--img__wrapper">
              <BsWindows
                className="item--img"
                // style={{
                //   height: "40px",
                //   width: "auto",
                // }}
              />
              <span className="item--img--text">Windows</span>
            </div>
            <h6 className="h6 capitalize">
              managed <span className="last-word">devices</span>
            </h6>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={0.8}
            delay={550}
            className="item item-2"
            onMouseEnter={(e) => toggleHoverInfoBox("supervisedDevices")}
            onMouseLeave={(e) => toggleHoverInfoBox("")}
          >
            <div className="item--img__wrapper">
              <BsApple
                className="item--img"
                // style={{
                //   height: "40px",
                //   width: "auto",
                // }}
              />
              <span className="item--img--text">
                MacOS
                <br />
                iOS
              </span>
              <DiLinux
                className="item--img"
                // style={{
                //   height: "40px",
                //   width: "auto",
                // }}
              />
              <span className="item--img--text">Linux</span>
              <DiAndroid
                className="item--img"
                // style={{
                //   height: "40px",
                //   width: "auto",
                // }}
              />
              <span className="item--img--text">Android</span>
            </div>
            <h6 className="h6 capitalize">
              supervised <span className="last-word">devices</span>
            </h6>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={1.2}
            className="item item-3"
            onMouseEnter={(e) => toggleHoverInfoBox("gatewayManagement")}
            onMouseLeave={(e) => toggleHoverInfoBox("")}
          >
            <div className="item--img__wrapper">
              <DiLinux
                className="item--img"
                // style={{
                //   height: "40px",
                //   width: "auto",
                // }}
              />
              <span className="item--img--text">Linux</span>
            </div>
            <h6 className="h6 capitalize">
              gateway <span className="last-word">management</span>
            </h6>
          </ScrollAnimation>
        </article>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={0.9}
          // animateOnce={true}
          className="section--heading"
        >
          <h3 className="h3 capitalize">Thoughtful architecture</h3>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          duration={0.8}
          delay={450}
          className="image_wrapper"
        >
          <Image
            src={howItWorksDiagram}
            id="howItWorksDiagram"
            alt="Diagram explaining how WireWise works"
            layout="responsive"
          />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={0.95}
          className="text-block text-block-1"
        >
          <h5 className="h5 capitalize">industry-leading encryption</h5>
          <p className="p-small">
            Wirewise uses the WireGuard encryption framework, a new industry
            standard for securing tunneled traffic. With its state of the art
            cryptography and a code base just 1% the size of legacy
            technologies, you can rest easy that Wirewise is secure and
            auditable against attacks. Its highly performant protocol also
            enables roaming across networks and instant connections, minimizing
            the need for user interaction.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={0.8}
          delay={175}
          className="text-block text-block-2"
        >
          <h5 className="h5 capitalize">small business teams</h5>
          <p className="p-small">
            For a tunnel to be established, the network gateway and its
            associated devices need to know each other’s private encryption key.
            Wirewise efficiently manages the distribution and updating of
            authorized keys on both gateways and end user devices so access can
            be revoked as quickly as it is granted. Automatic controls based on
            defined settings and conditions, such as last authenticated or
            connected date, will instantly quarantine inactive devices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={0.65}
          delay={325}
          className="text-block text-block-3"
        >
          <h5 className="h5 capitalize">extensible client support</h5>
          <p className="p-small">
            Do you have other devices besides Windows machines that need to
            access your network right now? We're working diligently to provide
            support for additional platforms.In the meantime, we’ve got you
            covered since Wirewise allows authenticated users to generate and
            download a configuration file that can then be uploaded into a
            WireGuard client. This enables you to quickly and conditionally
            enable or disable access to your network for these clients.
          </p>
        </ScrollAnimation>
      </section>
    </ContentWrapper>
  );
};

const FineTunedControlSection = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="fineTunedControlSection"
      >
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          duration={0.9}
          // animateOnce={true}
          className="section--heading"
        >
          <h3 className="h3 capitalize">fine-tuned control</h3>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={0.88}
          className="img-block"
        >
          <Image
            src={optimizeExperienceImage}
            id="optimizeExperienceImage"
            alt="Screenshot illustrating the optimized experience you get when using WireWise"
          />
        </ScrollAnimation>
        <div className="text-blocks">
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            duration={1.2}
            className="text-block text-block-1"
          >
            <h6 className="h6 capitalize">configure DNS</h6>
            <p className="p-small">
              Manage core settings and configuration from a streamlined online
              interface
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            duration={1}
            delay={300}
            className="text-block text-block-2"
          >
            <h6 className="h6 capitalize">multiple authentication options</h6>
            <p className="p-small">
              An always-on status guarantees that users connect seamlessly every
              time
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            duration={0.8}
            delay={600}
            className="text-block text-block-3"
          >
            <h6 className="h6 capitalize">Comprehensive activity logging</h6>
            <p className="p-small">
              A detailed event log ensures you can keep tabs on network activity
              and issues
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            duration={0.6}
            delay={900}
            className="text-block text-block-4"
          >
            <h6 className="h6 capitalize">Detailed device info</h6>
            <p className="p-small">
              Register all your devices together and forego complex individual
              configuration
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </ContentWrapper>
  );
};

const OptimizedExperienceSection = (props) => {
  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="optimizedExperienceSection"
      >
        <div className="section--heading">
          <h3 className="h3 capitalize">optimized experience</h3>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt.
          </p>
        </div>
        <div className="section--body">
          <div className="text-blocks text-blocks-1">
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              duration={1.2}
              className="text-block"
            >
              <h6 className="h6 capitalize">Cloud-based admin console</h6>
              <p className="p-small">
                Manage core configuration and device permissions from a clean
                web user interface
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              duration={1}
              delay={300}
              className="text-block"
            >
              <h6 className="h6 capitalize">Minimal on-prem footprint</h6>
              <p className="p-small">
                Skip extra hardware and third-party applications for easier
                training and tighter compliance
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={0.88}
            className="image__wrapper"
          >
            <Image
              src={optimizeExperienceImage}
              id="optimizeExperienceImage"
              alt="Screenshot illustrating the optimized experience you get when using WireWise"
            />
          </ScrollAnimation>
          <div className="text-blocks text-blocks-2">
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              duration={0.8}
              delay={600}
              className="text-block"
            >
              <h6 className="h6 capitalize">Streamlined setup wizard</h6>
              <p className="p-small">
                Get started in just minutes with a guided setup process that
                ensures nothing is missed
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInDown"
              duration={0.6}
              delay={900}
              className="text-block"
            >
              <h6 className="h6 capitalize">Simplified billing</h6>
              <p className="p-small">Focus on the work with</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

const StyledSlideshowItem = styled(Image)`
  opacity: ${(props) => (props.active ? "1" : "0")};
  // transform: translateY(
  //   ${(props) => (props.active ? "0%" : props.previous ? "100%" : "-100%")}
  // );
`;

const StyledTab = styled.li`
  opacity: ${(props) => (props.active ? 1 : 0.165)};

  @media (max-width: 875px) {
    opacity: ${(props) => (props.active ? 1 : 0)};
  }
`;

const SetupSection = (props) => {
  const [previousTab, setPreviousTab] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Register",
      par: "Select your plan and create your account",
    },
    {
      title: "Add a network",
      par: "Go through our setup wizard in minutes",
    },
    {
      title: "Install your gateway",
      par: "Manage users simply through the streamlined interface",
    },
    {
      title: "Configure security settings",
      par: "Manage security settings with just a couple clicks",
    },
    {
      title: "Set up devices",
      par: "Quickly add new users and devices in seconds",
    },
  ];

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="setupSection"
      >
        <div className="section--heading">
          <h3 className="h3 capitalize">straightforward setup</h3>
          <p className="p-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
            felis, et id aliquam ac tincidunt.
          </p>
        </div>
        <article className="section--body">
          <ul className="tabs">
            {tabs.map((tab, i) => (
              <ScrollAnimation
                className="tab--outer"
                animateIn="animate__fadeInLeft"
                duration={1 - i * 0.05}
                delay={i * 100}
              >
                <StyledTab
                  className={`tab tab-${i + 1}`}
                  key={i}
                  active={i === activeTab}
                  onClick={(e) => {
                    setPreviousTab(activeTab);
                    setActiveTab(i);
                  }}
                >
                  <span className="tab--num">{i + 1}</span>
                  <div className="tab--text">
                    <h6 className="h6">{tab.title}</h6>
                    <p className="p-small">{tab.par}</p>
                  </div>
                </StyledTab>
              </ScrollAnimation>
            ))}
          </ul>
          <div className="slides-number-group">
            <BsArrowLeft
              className="j-display _700 slides-number-group--item"
              style={{
                opacity: activeTab === 0 ? 1 : 0.6,
              }}
              onClick={(e) => setActiveTab(activeTab > 0 ? activeTab - 1 : 4)}
            >
              1
            </BsArrowLeft>
            <BsArrowRight
              className="j-display _700 slides-number-group--item"
              style={{
                opacity: activeTab === 1 ? 1 : 0.6,
              }}
              onClick={(e) => setActiveTab(activeTab <= 3 ? activeTab + 1 : 0)}
            >
              2
            </BsArrowRight>
          </div>
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={0.88}
            className="image__wrapper display"
          >
            <div className="slideshow">
              <StyledSlideshowItem
                className="slideshow--item"
                src={Step1}
                alt="step 1"
                id="step1"
                layout="fill"
                active={activeTab === 0}
                previous={previousTab === 0}
              />
              <StyledSlideshowItem
                className="slideshow--item"
                src={Step2}
                alt="step 2"
                id="step2"
                layout="fill"
                active={activeTab === 1}
                previous={previousTab === 1}
              />
              <StyledSlideshowItem
                className="slideshow--item"
                src={Step3}
                alt="step 3"
                id="step3"
                layout="fill"
                active={activeTab === 2}
                previous={previousTab === 2}
              />
              <StyledSlideshowItem
                className="slideshow--item"
                src={Step4}
                alt="step 4"
                id="step4"
                layout="fill"
                active={activeTab === 3}
                previous={previousTab === 3}
              />
              <StyledSlideshowItem
                className="slideshow--item"
                src={Step5}
                alt="step 5"
                id="step5"
                layout="fill"
                active={activeTab === 4}
                previous={previousTab === 4}
              />
            </div>
          </ScrollAnimation>
        </article>
      </section>
    </ContentWrapper>
  );
};

export {
  ArchitectureSection,
  FineTunedControlSection,
  OptimizedExperienceSection,
  SetupSection,
};
