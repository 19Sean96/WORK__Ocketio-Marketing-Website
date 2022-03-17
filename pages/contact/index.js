import {
  ContactPortal,
  MoreContact,
  ContactFAQ,
} from "../../components/Body/contact";
import styled from "styled-components";
import { ContactHeroBG } from "../../components/SVG/WavyBG";
import { NextSeo } from "next-seo";
import ScrollAnimation from 'react-animate-on-scroll';
const StyledMain = styled.main`
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-color: #252939;
    width: 100vw;
    height: 700px;
    transform: translateY(-50%);
  }
`;
const animateOnce = true;

export default function Contact() {
  const DIRECTUS_CMS_URL= process.env.DIRECTUS_CMS_URL;
  const THIS_URL = process.env.THIS_URL;

  return (
    <>
      <NextSeo
        title="Get in Touch | Wirewise"
        description="We would love to hear from you! Contact us here with any questions or feature requests."
        openGraph={{
          url: `${THIS_URL}/pricing`,
          title: "Get in Touch | Wirewise",
          description:
            "We would love to hear from you! Contact us here with any questions or feature requests.",
          images: [
            {
              url: `${DIRECTUS_CMS_URL}/assets/6172e5f8-2b3e-4ed2-b21f-dde9710c0a4c.webp`,
              width: 800,
              height: 600,
              alt: "Preview of the Wirewise Admin Panel - where you can manage devices and administer Tenant management",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <ScrollAnimation
        animateOnce={animateOnce}
        animateIn="animate__fadeInDown"
        duration={0.66}
      >
      <StyledMain className="main" id="main">
        <ContactHeroBG />
        <ContactPortal />
        <ContactFAQ />
      </StyledMain>

      </ScrollAnimation>
    </>
  );
}
