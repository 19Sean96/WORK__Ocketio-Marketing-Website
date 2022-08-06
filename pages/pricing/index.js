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
                Try the beta completely free, and sign up to be notified when
                the paid version launches
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
              <ScrollAnimation
                animateOnce={animateOnce}
                duration={0.7}
                delay={400}
                animateIn="animate__fadeInLeft"
                className="section--body--item"
                id="priceFree"
              >
                <h6 className="price--type capitalize h6">free</h6>
                <h4 className="h4 price--num">$0.00 USD</h4>
                <p className="p-small price--rate">monthly per device</p>
                <Link href="#">
                  <button className="price--cta btn btn--filled capitalize">
                    get started
                  </button>
                </Link>
                <p className="p-small price--message">
                  Register up to three devices and create a single network, with
                  access to all Wirewise features. Upgrade any time.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                duration={0.9}
                delay={200}
                animateIn="animate__fadeInLeft"
                className="section--body--item blurred"
                id="priceMonthly"
              >
                <h6 className="price--type capitalize h6">monthly</h6>
                <h4 className="h4 price--num">$3.00 USD</h4>
                <p className="p-small price--rate">monthly per device</p>
                <Link href="#">
                  <button className="price--cta btn btn--filled capitalize">
                    get started
                  </button>
                </Link>
                <p className="p-small price--message">
                  Add devices and networks to your heart’s content.
                  <ul>
                    <li>Three devices free forever</li>
                    <li>1Second great features</li>
                    <li>Feature #3</li>
                  </ul>
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateOnce={animateOnce}
                duration={1.1}
                delay={0}
                animateIn="animate__fadeInLeft"
                className="section--body--item blurred"
                id="priceAnnual"
              >
                <h6 className="price--type capitalize h6">annual</h6>
                <h4 className="h4 price--num">$2.00 USD</h4>
                <p className="p-small price--rate">monthly per device</p>
                <Link href="#">
                  <button className="price--cta btn btn--filled capitalize">
                    get started
                  </button>
                </Link>
                <p className="p-small price--message">
                  The same great features with savings for an annual license
                  <ul>
                    <li>Three devices free forever</li>
                    <li>1Second great features</li>
                    <li>Feature #3</li>
                  </ul>
                </p>
              </ScrollAnimation>

              <caption id="comingSoonBanner">
                <p className="p-large j-display _500">
                  Paid tiers coming soon.
                </p>
              </caption>
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
