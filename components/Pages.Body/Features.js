import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../Site.Globals/ContentWrapper";

import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
} from "../Site.Graphics/FeatureSlides";

import { useSwipeable } from "react-swipeable";
import {
  BsCaretRightFill,
  BsCaretLeftFill,
  BsKey,
  BsListUl,
  BsGear,
  BsPhone,
  BsCloud,
  BsHddStack,
  BsWindow,
  BsClock,
} from "react-icons/bs";
import { useAppContext } from "../../Context";
import {
  AzureADLogo,
  Auth0Logo,
  GSuiteLogo,
  OktaLogo,
} from "../Site.Graphics/ThirdPartyLogos";

import ArchitectureDiagram from "../../public/images/features/architecture-diagram.svg";
import FineTunedControlImage from "../../public/images/features/fine-tuned-control.svg";
import OptimizedExperienceImage from "../../public/images/features/optimized-experience.svg";

import SetupRegister from "../../public/images/features/setup/step-1-register.svg";
import SetupCreateNetwork from "../../public/images/features/setup/step-2-create_network.svg";
import SetupInstallGateway from "../../public/images/features/setup/step-3-install_gateway.svg";
import SetupDeviceSetup from "../../public/images/features/setup/step-4-device_setup.svg";
import SetupSecuritySettings from "../../public/images/features/setup/step-5-security_settings.svg";

const animateOnce = true;

const ArchitectureSection = (props) => {
  const { isMobile } = useAppContext();
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
      <section
        className="section section__with-grid all-columns"
        id="architectureSection"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.44}
          offset={-186}
          className="section--heading"
        >
          <h2 className="h2 capitalize">Thoughtful architecture</h2>
          <p className="p-lg">
            Built from the ground up to facilitate all the complex relationships
            involved in network access management. Here’s what it looks like
            when we pop the hood.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeIn"
          duration={0.8}
          delay={450}
          className="image_wrapper"
        >
          <ArchitectureDiagram />
        </ScrollAnimation>
        <div className="text-blocks">
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.95}
            className="text-block text-block-1"
          >
            <h4 className="h4 capitalize">industry-leading encryption</h4>
            <p className="p-sm">
              Wirewise uses the WireGuard encryption framework, a new industry
              standard for securing tunneled traffic. With its state of the art
              cryptography and a code base just 1% the size of technologies
              leveraging OpenVPN, you can rest easy that Wirewise is secure and
              auditable against attacks. Its highly performant protocol also
              enables roaming across networks and instant connections,
              minimizing the need for user interaction.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.8}
            delay={175}
            className="text-block text-block-2"
          >
            <h4 className="h4 capitalize">Efficient Network Control</h4>
            <p className="p-sm">
              For a tunnel to be established, the network gateway and its
              devices need to know each other's private encryption keys.
              Wirewise efficiently manages the distribution and updating of
              authorized keys on gateways and end user devices so access can be
              revoked as quickly as it is granted. Automatic controls based on
              defined settings and conditions, such as last validated date, will
              instantly quarantine inactive devices.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.65}
            delay={325}
            className="text-block text-block-3"
          >
            <h4 className="h4 capitalize">extensible client support</h4>
            <p className="p-sm">
              Do you have other devices besides Windows machines that need to
              access your network? Good news, we're working diligently to
              provide support for additional platforms. In the meantime, we’ve
              got you covered since Wirewise allows authenticated users to
              generate and download a config file that can be uploaded into a
              WireGuard client. This enables you to quickly and conditionally
              enable or disable access to your network for these clients.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </ContentWrapper>
  );
};

const FineTunedControlSection = (props) => {
  const { isMobile } = useAppContext();

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="fineTunedControlSection"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.44}
          offset={-186}
          className="section--heading"
        >
          <h3 className="h3 capitalize">fine-tuned control</h3>
          <p className="p-large">
            No network administrator’s life needs to be harder. Mission-critical
            features allow you to simplify access management while dialing in
            core configuration.
          </p>
        </ScrollAnimation>
        <div className="section--body">
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.88}
            className="img-block"
          >
            <FineTunedControlImage />
          </ScrollAnimation>
          <div className="text-blocks">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={1.2}
              className="text-block text-block-1"
            >
              <BsKey />
              <h6 className="h6 capitalize">Multiple Authentication Options</h6>
              <p className="p-small">
                Use your existing auth provider to streamline access and enforce
                access requirements
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={1}
              delay={300}
              className="text-block text-block-2"
            >
              <BsListUl />
              <h6 className="h6 capitalize">Comprehensive Activity Logging</h6>
              <p className="p-small">
                A detailed event log ensures you can keep tabs on system
                activities and issues
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={0.8}
              delay={600}
              className="text-block text-block-3"
            >
              <BsPhone />
              <h6 className="h6 capitalize">Detailed Device Info</h6>
              <p className="p-small">
                See all registered devices in one place and monitor connection
                status, authentication schedules, and more
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={0.6}
              delay={900}
              className="text-block text-block-4"
            >
              <BsGear />
              <h6 className="h6 capitalize">Configurable DNS</h6>
              <p className="p-small">
                Manage core settings and configuration from a streamlined online
                interface
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

const ThirdPartyAuthentication = (props) => {
  return (
    <ContentWrapper>
      <section className="section__with-grid all-columns" id="thirdPartyAuth">
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__fadeInUp"
          duration={0.88}
          className="all-columns section__with-grid"
        >
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce={true}
            duration={0.88}
            delay={440}
            className="section--heading"
          >
            <h3 className="h3">3rd Party Authentication</h3>
            <p className="p-large">
              Support for major auth providers to make logins a breeze
            </p>
          </ScrollAnimation>
          <div className="section--body">
            <AzureADLogo />
            <OktaLogo />
            <Auth0Logo />
            <GSuiteLogo />
          </div>
        </ScrollAnimation>
      </section>
    </ContentWrapper>
  );
};

const OptimizedExperienceSection = (props) => {
  const { isMobile } = useAppContext();

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="optimizedExperienceSection"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.44}
          offset={-186}
          className="section--heading"
        >
          <h3 className="h3 capitalize">optimized experience</h3>
          <p className="p-large">
            A platform as usable as it is capable ensures that administrators
            and users alike can take full advantage of its protection while
            almost forgetting it’s there.
          </p>
        </ScrollAnimation>
        <div className="section--body">
          <div className="text-blocks text-blocks_1">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={1.2}
              className="text-block text-block_1"
            >
              <BsCloud />
              <h6 className="h6 capitalize">Cloud-based admin console</h6>
              <p className="p-small">
                Manage core configuration and device permissions from a clean
                web user interface
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={1}
              delay={300}
              className="text-block text-block_2"
            >
              <BsHddStack />
              <h6 className="h6 capitalize">Minimal on-prem footprint</h6>
              <p className="p-small">
                Skip extra hardware and third-party applications for easier
                training and tighter compliance
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeInUp"
            duration={0.88}
            className="image__wrapper"
          >
            <OptimizedExperienceImage />
          </ScrollAnimation>
          <div className="text-blocks text-blocks_2">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={0.8}
              delay={600}
              className="text-block text-block_3"
            >
              <BsWindow />
              <h6 className="h6 capitalize">Streamlined setup wizard</h6>
              <p className="p-small">
                Get started in just minutes with a guided setup process that
                ensures nothing is missed
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={0.6}
              delay={900}
              className="text-block text-block_4"
            >
              <BsClock />
              <h6 className="h6 capitalize">Always On Connection</h6>
              <p className="p-small">
                An uninterrupted conntection guarantees that your team members
                connect seamlessly every time
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
};

const StyledTab = styled.li`
  opacity: ${(props) => (props.active ? 1 : 0.65)};
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 1px 1px rgba(37, 41, 58, 0.06),
      0 2px 2px rgba(37, 41, 58, 0.05), 0 4px 4px rgba(37, 41, 58, 0.04),
      0 8px 8px rgba(37, 41, 58, 0.03), 0 16px 16px rgba(37, 41, 58, 0.04);

    box-shadow: 0px 4px 4px #ebf1f8;

    opacity: ${(props) => (props.active ? 1 : 0)};
  }

  @media (max-width: 875px) {
    opacity: ${(props) => (props.active ? 1 : 0)};
  }
`;

const SetupSection = (props) => {
  const { isMobile } = useAppContext();

  const [previousTab, setPreviousTab] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const tabs = [
    {
      title: "Register",
      par: "Sign up and create a workspace",
    },
    {
      title: "Create a network",
      par: "Guided network/gateway setup process",
    },
    {
      title: "Set up user authentication",
      par: "Configure your third-party auth provider",
    },
    {
      title: "Set up devices",
      par: "Manage users quickly from the cloud",
    },
    {
      title: "Configure security settings",
      par: "Fine-tune core controls at every level",
    },
  ];

  const swipeHandlers = useSwipeable({
    onSwiped: (evtData) => console.log("SWIPED!", evtData),
    onSwipedLeft: (evtData) =>
      setActiveTab(activeTab < tabs.length - 1 ? activeTab + 1 : 0),
    onSwipedRight: (evtData) =>
      setActiveTab(activeTab > 0 ? activeTab - 1 : tabs.length - 1),
  });

  const { ref, inView, entry } = useInView({});

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <ContentWrapper>
      <section
        className="section section__with-grid all-columns"
        id="setupSection"
      >
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
          duration={0.44}
          offset={-186}
          className="section--heading"
        >
          <h3 className="h3 capitalize">straightforward setup</h3>
          <p className="p-large">
            Forget all the manual configuration historically required for
            traditional WireGuard® configuration. Instead get up and running in
            minutes with a delightfully simple setup process and accessible
            admin panel.
          </p>
        </ScrollAnimation>
        <article className="section--body">
          <ScrollAnimation
            animateOnce={animateOnce}
            className="tabs__wrapper"
            animateIn="animate__fadeInUp"
            duration={0.725}
          >
            <ul className="tabs">
              {tabs.map((tab, i) => (
                <div
                  className="tab--outer"
                  key={`tab-${i}`}
                  style={{
                    pointerEvents: i == activeTab || !isMobile ? "all" : "none",
                  }}
                >
                  <StyledTab
                    className={`tab tab-${i + 1}`}
                    key={i}
                    active={i === activeTab}
                    onClick={(e) => {
                      setPreviousTab(activeTab);

                      if (isMobile) {
                        if (activeTab == 4) {
                          setActiveTab(0);
                        } else setActiveTab(activeTab + 1);
                      } else setActiveTab(i);

                      console.log(tab.title);
                    }}
                  >
                    <span className="tab--num">{i + 1}</span>
                    <div className="tab--text">
                      <h6 className="h6">{tab.title}</h6>
                      <p className="p-small">{tab.par}</p>
                    </div>
                  </StyledTab>
                </div>
              ))}
            </ul>
          </ScrollAnimation>

          <div className="slides-number-group">
            <BsCaretLeftFill
              className="j-display _700 slides-number-group--item"
              style={{
                visibility: activeTab == 0 ? "hidden" : "visible",
              }}
              onClick={(e) => setActiveTab(activeTab > 0 ? activeTab - 1 : 4)}
            >
              1
            </BsCaretLeftFill>
            <BsCaretRightFill
              className="j-display _700 slides-number-group--item"
              style={{
                visibility: activeTab == 4 ? "hidden" : "visible",
              }}
              onClick={(e) => setActiveTab(activeTab <= 3 ? activeTab + 1 : 0)}
            >
              2
            </BsCaretRightFill>
          </div>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn="animate__fadeIn"
            duration={0.88}
            className="image__wrapper display"
          >
            <div className="slideshow" ref={ref}>
              <div className="slideshow--item__wrapper">
                <SetupRegister
                  opacity={activeTab === 0 ? 1 : 0}
                />
              </div>
              <div className="slideshow--item__wrapper">
                <SetupCreateNetwork
                  opacity={activeTab === 1 ? 1 : 0}
                />
              </div>
              <div className="slideshow--item__wrapper">
                <SetupInstallGateway
                  opacity={activeTab === 2 ? 1 : 0}
                />
              </div>
              <div className="slideshow--item__wrapper">
                <SetupDeviceSetup
                  opacity={activeTab === 3 ? 1 : 0}
                />
              </div>
              <div className="slideshow--item__wrapper">
                <SetupSecuritySettings
                  opacity={activeTab === 4 ? 1 : 0}
                />
              </div>
            </div>
          </ScrollAnimation>
          <div className="cta-group">
            <Link href="/pricing">
              <ScrollAnimation
                animateOnce={animateOnce}
                animateIn="animate__fadeInUp"
                duration={0.675}
                className="cta"
              >
                <button
                  className="cta btn btn--filled j-text _400"
                  aria-label="Get started with our beta program by creating a network"
                >
                  Create a Network
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
          {isMobile && (
            <div
              data-InView={inView}
              className="tabs--mobile"
              style={{
                transform: inView
                  ? "translate(-50%, 0)"
                  : "translate(-50%, 150%)",
              }}
            >
              <button
                className="tabs--mobile--btn tabs--mobile__left"
                style={{
                  visibility: activeTab == 0 ? "hidden" : "visible",
                }}
                onClick={(e) => setActiveTab(activeTab > 0 ? activeTab - 1 : 4)}
              >
                <span className="tab--num">{activeTab}</span>
                <BsCaretLeftFill />
              </button>

              <button
                className="tabs--mobile--btn tabs--mobile__right"
                style={{
                  visibility: activeTab == 4 ? "hidden" : "visible",
                }}
                onClick={(e) =>
                  setActiveTab(activeTab <= 3 ? activeTab + 1 : 0)
                }
              >
                <span className="tab--num">{activeTab + 2}</span>
                <BsCaretRightFill />
              </button>
            </div>
          )}
        </article>
      </section>
    </ContentWrapper>
  );
};

export {
  ArchitectureSection,
  FineTunedControlSection,
  ThirdPartyAuthentication,
  OptimizedExperienceSection,
  SetupSection,
};
