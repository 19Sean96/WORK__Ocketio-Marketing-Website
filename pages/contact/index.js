import { ContactPortal, ContactFAQ } from "../../components/Pages.Body/Contact";
import styled from "styled-components";
import Background from "../../components/Site.Graphics/Waves/ContactHero";
import Head from "../../components/Pages.Head/Contact";
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
    height: 295px;
    transform: translateY(-50%);
  }
`;

export default function Contact() {
  return (
    <>
      <Head />
      <div>
        <StyledMain className="main" id="main">
          <Background />
          <ContactPortal />
          <ContactFAQ />
        </StyledMain>
      </div>
    </>
  );
}
