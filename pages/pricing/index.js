import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import ContentWrapper from "../../components/Site.Globals/ContentWrapper";
import FAQList from "../../components/Site.Widgets/FAQList";
import EmailIntakeInput from "../../components/Site.Widgets/EmailInput";
import Background from "../../components/Site.Graphics/Waves/PricingHero";
import styled from "styled-components";
import Head from "../../components/Pages.Head/Pricing";
const StyledMain = styled.main`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: calc(45vw - 271px);
    left: 0;
    background-color: #252939;
    width: 100vw;
    height: calc(100% - 45vw + 140px);
  }

  @media (max-width: 2159px) {
    &::before {
      top: calc(48vw - 240px);
    }
  }

  @media (max-width: 1500px) {
    &::before {
      top: 480px;
    }
  }
`;

const animateOnce = true;

export default function Pricing() {
  const faqs = [
    {
      question: "Does Wirewise offer free trials?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "How many users can I invite to my account?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
    {
      question: "Can I get a refund if I don't like the product?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisi sit commodo tristique tincidunt eget egestas quam. Gravida mattis urna, bibendum feugiat vulputate feugiat mauris. Lacus facilisi viverra.",
    },
  ];
  return (
    <>
      <Head />
      <StyledMain className="main" id="main">
        <Background />
        <ContentWrapper>
          <section
            className="section__with-grid all-columns section__with-max-width_95vw"
            id="pricing"
          >
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeInLeft"
              duration={0.9}
              className="section--heading"
            >
              <h2 className="h2">Pricing</h2>
              <p className="p-large">
                We believe in simple, transparent pricing that helps you test
                and deploy Wirewise with ease at any scale
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              className="section--form__wrapper"
              animateOnce={animateOnce}
              animateIn="animate__fadeInUp"
              duration={1}
            >
              <EmailIntakeInput />
            </ScrollAnimation>
            <div className="section--body">

              <PriceCard 
                name="starter"
                price="Free"
                message="Take the core capabilities of the Essentials tier for a test drive!"
                basicFeatures={[
                  'Up to 2 users',
                  'Up to 5 devices / user',
                  'Up to 2 networks',
                  '1 gateway / network',
                  '1 identity provider integration'
                ]}
                advancedFeaturesHeading="Key Features"
                advancedFeatures={[
                  'Basic DNS settings',
                  'Centralized settings and configuration management',
                  'Configurable device validation and key rotation',
                  'Event monitoring for networks, gateways and devices'
                ]}
                btnURL='#'
                btnClass='btn--filled'
                btnText='get started'
              />

              <PriceCard
                name="essentials"
                price="$4"
                message="All the essential capabilities for providing secure access to
                network resources at any scale"
                basicFeatures={[
                  'Unlimited users',
                  'Up to 5 devices / user',
                  'Up to 2 networks',
                  'Up to 2 gateways / network',
                  'Up to 10 resources / network',
                  '1 identity provider integration'
                ]}
                advancedFeaturesHeading="Everything in Starter, plus"
                advancedFeatures={[
                  'ACL enforcement of basic access policies'
                ]}
                btnURL='#'
                btnClass='btn--bordered'
                btnText='start 14-day trial'
              />

              <PriceCard
                name="premium"
                price="$7"
                message="Advanced features to level up and fine-tune your Wirewise
                deployment"
                basicFeatures={[
                  'Unlimited users',
                  'Up to 5 devices / user',
                  'Up to 2 networks',
                  'Up to 2 gateways / network',
                  'Up to 50 resources / network',
                  'Multiple identity provider integrations'
                ]}
                advancedFeaturesHeading="Everything in Essentials, plus"
                advancedFeatures={[
                  'Advanced DNS settings',
                  'Device health monitoring',
                  'Enhanced usage tracking',
                  'API access'
                ]}
                btnURL='#'
                btnClass='btn--bordered'
                btnText='start 14-day trial'
              />
            </div>
            <ScrollAnimation
              animateOnce={animateOnce}
              duration={0.75}
              delay={700}
              animateIn="animate__fadeInUp"
              className="section--footer"
            >
              <h6 className="h6">Interested in a custom plan?</h6>
              <p className="p-small">
                <Link href="/contact">
                  <a>Contact us</a>
                </Link>
                <span> for information.</span>
              </p>
            </ScrollAnimation>
          </section>
        </ContentWrapper>

        <ContentWrapper>
          <section className="section__with-grid all-columns" id="pricingFAQ">
            <ScrollAnimation
              animateOnce={animateOnce}
              animateIn="animate__fadeIn"
              duration={0.9}
              className="section--heading"
            >
              <h4 className="h4 capitalize">frequently asked questions</h4>
            </ScrollAnimation>
            <div className="section--body">
              <FAQList list={faqs} />
            </div>
          </section>
        </ContentWrapper>
      </StyledMain>
    </>
  );
}

const PriceCard = ({
  name,
  price,
  message,
  basicFeatures,
  advancedFeatures,
  advancedFeaturesHeading,
  btnURL,
  btnClass,
  btnText
}) => {
  console.log('FEATURES: ',typeof basicFeatures)
  return (
    <ScrollAnimation
      animateOnce={true}
      duration={0.7}
      delay={400}
      animateIn="animate__fadeInLeft"
      className={`section--body--item price-card price-card-${name}`}
    >
      <div className="price-card--heading">
        <h3 className="price-card--type capitalize">{name}</h3>
        <h4 className="price-card--num">{price}</h4>
        {name !== 'starter' && (
          <p className="p-small price-card--rate">user / month</p>
        )}
      </div>

      <div className="price-card--cta">
        <Link href={btnURL}>
          <button className={`btn ${btnClass} capitalize j-display`}>{btnText}</button>
        </Link>
      </div>

      <div className="price-card--message">
        <p>{message}</p>
      </div>

      <div className="price-card--features__basic">
        <ul>
          {basicFeatures.map((feat) => (
            <li>{feat}</li>
          ))}
        </ul>
      </div>

      <div className="price-card--features__advanced">
        <h6>{advancedFeaturesHeading}</h6>
        <ul>
          {advancedFeatures.map((feat) => (
            <li>{feat}</li>
          ))}
        </ul>
      </div>
    </ScrollAnimation>
  );
};
