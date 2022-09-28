import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../public/ocketio-logo.svg";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { useAppContext } from "../../Context";
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
  const { footerDarkMode } = useAppContext();
  return (
    <StyledFooter
      className="footer"
      id="footer"
      background={footerDarkMode ? "#101010" : "#f5f5f5"}
    >
      <div className="footer--top">
        <div className="footer--logo">
          <Link href="/">
            <a>
              <Logo
                style={{
                  fill: footerDarkMode ? "#f5f5f5" : "#101010",
                }}
              />
            </a>
          </Link>
        </div>
        <nav className="footer--nav">
          <ul className="footer--nav--list">
            <li>
              <h6
                className="h6"
                style={{
                  color: footerDarkMode ? "#f5f5f5" : "#101010",
                }}
              >
                Product
              </h6>
            </li>
            <li className="p-sm">
              <Link href="/features">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Features
                </a>
              </Link>
            </li>
            <li className="p-sm">
              <Link href="/pricing">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Pricing
                </a>
              </Link>
            </li>
          </ul>
          <ul className="footer--nav--list">
            <li>
              <h6
                className="h6"
                style={{
                  color: footerDarkMode ? "#f5f5f5" : "#101010",
                }}
              >
                Company
              </h6>
            </li>
            <li className="p-sm">
              <Link href="/">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="p-sm">
              <Link href="/contact">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="p-sm">
              <Link href="/blog">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
          <ul className="footer--nav--list">
            <li>
              <h6
                className="h6"
                style={{
                  color: footerDarkMode ? "#f5f5f5" : "#101010",
                }}
              >
                Legal
              </h6>
            </li>
            <li className="p-sm">
              <Link href="/privacy">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Privacy
                </a>
              </Link>
            </li>
            <li className="p-sm">
              <Link href="/terms">
                <a
                  style={{
                    color: footerDarkMode ? "#c8cccc" : "#333",
                  }}
                >
                  Terms
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="footer--bot"
        style={{
          borderTopColor: footerDarkMode ? "#f5f5f5" : "#101010",
        }}
      >
        <h6
          className="footer--copyright h6"
          style={{
            color: footerDarkMode ? "#999" : "#666",
          }}
        >
          © {currentYear} Unwired Revolution
        </h6>
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
                fill: footerDarkMode ? "#999" : "#666",
              }}
            />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
