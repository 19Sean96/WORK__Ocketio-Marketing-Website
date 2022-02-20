import { ContactPortal, MoreContact, ContactFAQ } from "../../components/Body/contact";
import styled from 'styled-components'
import { ContactHeroBG } from "../../components/SVG/WavyBG";

const StyledMain = styled.main`
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background-color: #252939;
    width: 100vw;
    height: 700px;
    transform: translateY(-50%);
  }
`

export default function Contact() {

  return (
    <StyledMain className="main" id="main">
      <ContactHeroBG />
      <ContactPortal />
      {/* <MoreContact /> */}
      <ContactFAQ />
    </StyledMain>
  );
}
