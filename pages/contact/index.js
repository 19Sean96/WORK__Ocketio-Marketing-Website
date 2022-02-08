import { ContactPortal, MoreContact, ContactFAQ } from "../../components/Body/contact";
import styled from 'styled-components'

const StyledMain = styled.main`
  position: relative;

  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    top: -150px;
    left: 0;
    background-color: #252939;
    width: 78vw;
    max-width: calc(2027px + ((100vw - 2600px) / 2));
    min-width: 1415px;
    height: 66.6vw;
    max-height: 1665px;
    min-height: 1227px;
    clip-path: polygon(
      0% 0%,
      85% 0%,
      90% 735px,
      13.5% 950px,
      0% 100%
    );

    // @media (max-width: 1920px) {
    //   height: 1160px;
    // }
    @media (max-width: 980px) {
      width: 100vw;
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 735px,
        15% 960px,
        0% 100%
      )
    }
  }
`

export default function Contact() {

  return (
    <StyledMain className="main" id="main">
      <ContactPortal />
      <MoreContact />
      <ContactFAQ />
    </StyledMain>
  );
}
