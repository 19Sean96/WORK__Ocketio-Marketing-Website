import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

import ContentWrapper from "../../components/ContentWrapper";
import FAQList from "../../components/util/FAQ";
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
    <main className="main" id="main">
      <ContentWrapper>
        <section className="section__with-grid all-columns" id="pricing">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            duration={0.9}
            className="section--heading"
          >
            <h2 className="h2">Pricing</h2>
            <p className="p-small">
              Pick a plan and get up and running. It's that simple.
            </p>
          </ScrollAnimation>
          <div className="section--body">
            <ScrollAnimation duration={.7} delay={400} animateIn="animate__fadeInLeft" className="section--body--item" id="priceFree">
              <h6 className="price--type capitalize h6">free</h6>
              <h4 className="h4 price--num">$ 0.00 USD</h4>
              <p className="p-small price--rate">monthly per user</p>
              <Link href="#">
                <button className="price--cta btn btn--filled capitalize">
                  get started
                </button>
              </Link>
              <p className="p-small price--message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper sceleris.
              </p>
            </ScrollAnimation>
            <ScrollAnimation duration={.9} delay={200} animateIn="animate__fadeInLeft"  className="section--body--item" id="priceMonthly">
              <h6 className="price--type capitalize h6">monthly</h6>
              <h4 className="h4 price--num">$ 10.00 USD</h4>
              <p className="p-small price--rate">monthly per user</p>
              <Link href="#">
                <button className="price--cta btn btn--filled capitalize">
                  get started
                </button>
              </Link>
              <p className="p-small price--message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper sceleris.
              </p>
            </ScrollAnimation>
            <ScrollAnimation duration={1.1} delay={0} animateIn="animate__fadeInLeft"  className="section--body--item" id="priceAnnual">
              <h6 className="price--type capitalize h6">annual</h6>
              <h4 className="h4 price--num">$ 8.00 USD</h4>
              <p className="p-small price--rate">monthly per user</p>
              <Link href="#">
                <button className="price--cta btn btn--filled capitalize">
                  get started
                </button>
              </Link>
              <p className="p-small price--message">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                semper sceleris.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation duration={.75} delay={700} animateIn="animate__fadeInUp" className="section--footer">
            <h6 className="h6">Need a custom plan?</h6>
            <p className="p-small">
              <Link href="/contact">
                <a>Contact us</a>
              </Link>
              <span> for information on enterprise pricing.</span>
            </p>
          </ScrollAnimation>
        </section>
      </ContentWrapper>

      <ContentWrapper>
        <section className="section__with-grid all-columns" id="pricingFAQ">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            duration={0.9} className="section--heading">
            <h4 className="h4 capitalize">frequently asked questions</h4>
          </ScrollAnimation>
          <div className="section--body">
            <FAQList list={faqs} />
          </div>
        </section>
      </ContentWrapper>
    </main>
  );
}
