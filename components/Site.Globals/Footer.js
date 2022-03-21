import Link from "next/link";
import { useRouter } from "next/router";
import Logo from './Logo'
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";

const StyledFooter = styled.footer`
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: -1;
    transform: translate(-50%);
    width: 102vw;
    height: 150%;
    background: ${(props) => props.background};
  }
`;

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter
      className="footer"
      id="footer"
      background={router.pathname === "/pricing" ? "#252939" : "#fff"}
    >
      <div className="footer--top">
        <div className="footer--logo">
          <Link href="/">
            <a>
              <Logo darkMode={router.pathname === "/pricing"} />
            </a>
          </Link>
        </div>
        <nav className="footer--nav">
          <ul className="footer--nav--list">
            <li
              className="j-text p-small _700 bold"
              style={{
                color: router.pathname === "/pricing" ? "#fff" : "#5C5F6B",
              }}
            >
              Product
            </li>
            <li className="p-small">
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/">
                <a>Walkthrough</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/downloads">
                <a>Downloads</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
          </ul>
          <ul className="footer--nav--list">
            <li
              className="j-text p-small _700 bold"
              style={{
                color: router.pathname === "/pricing" ? "#fff" : "#5C5F6B",
              }}
            >
              Company
            </li>
            <li className="p-small">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/">
                <a>Newsletter</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
          <ul className="footer--nav--list">
            <li
              className="j-text p-small _700 bold"
              style={{
                color: router.pathname === "/pricing" ? "#fff" : "#5C5F6B",
              }}
            >
              Legal
            </li>
            <li className="p-small">
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
            <li className="p-small">
              <Link href="/terms">
                <a>Terms</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer--bot">
        <div
          className="j-display footer--copyright"
          style={{
            color: router.pathname === "/pricing" ? "#fff" : "#5C5F6B",
          }}
        >
          © {currentYear} Unwired Revolution
        </div>
        <div className="footer--social__wrapper">
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin
              style={{
                height: "25px",
                width: "auto",
                fill: router.pathname === "/pricing" ? "#fff" : "#5C5F6B",

              }}
            />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
