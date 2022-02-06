import Image from "next/image";

import { useState } from "react";
import styled from "styled-components";

import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../ContentWrapper";
import HoverInfoBox from "../util/HoverInfoBox";
import howItWorksDiagram from "../../public/images/_WW_Website_Features-Diagram.png";
import FeatureDiagram from "../SVG/FeatureDiagram";
import optimizeExperienceImage from "../../public/images/features-body_optimize-experience.png";
import Step1 from "../../public/images/features/setup_steps/step_1-register.svg";
import Step2 from "../../public/images/step-2.png";
import Step3 from "../../public/images/step-3.png";
import Step4 from "../../public/images/step-4.png";
import Step5 from "../../public/images/step-5.png";
import { useSwipeable } from "react-swipeable";
import {
  BsArrowRight,
  BsArrowLeft,
  BsKey,
  BsListUl,
  BsGear,
  BsPhone,
} from "react-icons/bs";
import { useAppContext } from "../../Context";
import {
  AzureADLogo,
  Auth0Logo,
  GSuiteLogo,
  OktaLogo,
} from "../SVG/ThirdPartyLogos";
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
          <h3 className="h3 capitalize">Thoughtful architecture</h3>
          <p className="p-small">
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
          {/* <Image
            src={howItWorksDiagram}
            id="howItWorksDiagram"
            alt="Diagram explaining how WireWise works"
            layout="responsive"
          /> */}
          <FeatureDiagram />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInUp"
          duration={0.95}
          className="text-block text-block-1"
        >
          <h5 className="h5 capitalize">industry-leading encryption</h5>
          <p className="p-small">
            Wirewise uses the WireGuard encryption framework, a new industry
            standard for securing tunneled traffic. With its state of the art
            cryptography and a code base just 1% the size of technologies
            leveraging OpenVPN, you can rest easy that Wirewise is secure and
            auditable against attacks. Its highly performant protocol also
            enables roaming across networks and instant connections, minimizing
            the need for user interaction.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInUp"
          duration={0.8}
          delay={175}
          className="text-block text-block-2"
        >
          <h5 className="h5 capitalize">small business teams</h5>
          <p className="p-small">
            For a tunnel to be established, the network gateway and its devices
            need to know each other’s private encryption keys. Wirewise
            efficiently manages the distribution and updating of authorized keys
            on gateways and end user devices so access can be revoked as quickly
            as it is granted. Automatic controls based on defined settings and
            conditions, such as last authenticated date, will instantly
            quarantine inactive devices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
          animateIn="animate__fadeInUp"
          duration={0.65}
          delay={325}
          className="text-block text-block-3"
        >
          <h5 className="h5 capitalize">extensible client support</h5>
          <p className="p-small">
            Do you have other devices besides Windows machines that need to
            access your network? Good news, we're working diligently to provide
            support for additional platforms. In the meantime, we’ve got you
            covered since Wirewise allows authenticated users to generate and
            download a config file that can be uploaded into a WireGuard client.
            This enables you to quickly and conditionally enable or disable
            access to your network for these clients.
          </p>
        </ScrollAnimation>
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
          <p className="p-small">
            No network administrator’s life needs to be harder. Mission-critical
            features allow you to simplify access management while dialing in
            core configuration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={animateOnce}
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
            animateOnce={animateOnce}
            animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
            duration={1.2}
            className="text-block text-block-1"
          >
            <BsKey
              style={{
                width: "auto",
                height: 35,
                marginBottom: "9px",
              }}
            />
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
            <BsListUl
              style={{
                width: "auto",
                height: 35,
                marginBottom: "9px",
              }}
            />
            <h6 className="h6 capitalize">Comprehensive Activity Logging</h6>
            <p className="p-small">
              A detailed event log ensures you can keep tabs on network activity
              and issues
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={animateOnce}
            animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
            duration={0.8}
            delay={600}
            className="text-block text-block-3"
          >
            <BsPhone
              style={{
                width: "auto",
                height: 35,
                marginBottom: "9px",
              }}
            />
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
            <BsGear
              style={{
                width: "auto",
                height: 35,
                marginBottom: "9px",
              }}
            />
            <h6 className="h6 capitalize">configure DNS</h6>
            <p className="p-small">
              Manage core settings and configuration from a streamlined online
              interface
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </ContentWrapper>
  );
};

const ThirdPartyAuthentication = (props) => {
  return (
    <ContentWrapper>
      <ScrollAnimation
        animateOnce={true}
        animateIn="animate__fadeInUp"
        duration={0.88}
        className="all-columns section__with-grid"
      >
        <section className="section__with-grid all-columns" id="thirdPartyAuth">
          <ScrollAnimation
            animateIn="animate__fadeInDown"
            animateOnce={true}
            duration={0.88}
            delay={440}
            className="section--heading"
          >
            <h6 className="h6">3rd Party Authentication</h6>
          </ScrollAnimation>
          <div className="section--body">
            <AzureADLogo />
            <OktaLogo />
            <Auth0Logo />
            <GSuiteLogo />
          </div>
        </section>
      </ScrollAnimation>
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
          <p className="p-small">
            A platform as usable as it is capable ensures that administrators
            and users alike can take full advantage of its protection while
            almost forgetting it’s there.
          </p>
        </ScrollAnimation>
        <div className="section--body">
          <div className="text-blocks text-blocks-1">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
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
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
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
            animateOnce={animateOnce}
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
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
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
              animateOnce={animateOnce}
              animateIn={isMobile ? "animate__fadeInUp" : "animate__fadeInDown"}
              duration={0.6}
              delay={900}
              className="text-block"
            >
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

const StyledSlideshowItem = styled(Image)`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;

const StyledTab = styled.li`
  opacity: ${(props) => (props.active ? 1 : 0.165)};
  position: relative;



    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0; left: 0;
      box-shadow: 
      0 1px 1px rgba(37,41,58,.06), 
      0 2px 2px rgba(37,41,58,.06), 
      0 4px 4px rgba(37,41,58,.06), 
      0 8px 8px rgba(37,41,58,.06),
      0 16px 16px rgba(37,41,58,.06);

      opacity: ${props => props.active ? 1 : 0}
    }

  @media (max-width: 875px) {
    opacity: ${(props) => (props.active ? 1 : 0)};
  }
`;

const SetupSection = (props) => {
  const { isMobile } = useAppContext();

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
      par: "Select your plan and create your account.",
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

  const swipeHandlers = useSwipeable({
    onSwiped: (evtData) => console.log("SWIPED!", evtData),
    onSwipedLeft: (evtData) =>
      setActiveTab(activeTab < tabs.length - 1 ? activeTab + 1 : 0),
    onSwipedRight: (evtData) =>
      setActiveTab(activeTab > 0 ? activeTab - 1 : tabs.length - 1),
  });

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
          <p className="p-small">
            Forget all the manual configuration historically required for
            WireGuard configuration. Instead get up and running in minutes with
            a delightfully simple setup process and accessible admin panel.
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
                <div className="tab--outer">
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
                </div>
              ))}
            </ul>
          </ScrollAnimation>

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
            animateOnce={animateOnce}
            animateIn="animate__fadeIn"
            duration={0.88}
            className="image__wrapper display"
          >
            <div className="slideshow" {...swipeHandlers}>
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
  ThirdPartyAuthentication,
  OptimizedExperienceSection,
  SetupSection,
};
