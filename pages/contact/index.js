import {
  ContactPortal,
  MoreContact,
  ContactFAQ,
} from "../../components/Body/contact";
import styled from "styled-components";
import { ContactHeroBG } from "../../components/SVG/WavyBG";
import ScrollAnimation from 'react-animate-on-scroll';
import Head from '../../components/Pages.Head/Contact'
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

  return (
    <>
      <Head />
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
