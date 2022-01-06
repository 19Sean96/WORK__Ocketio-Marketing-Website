import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context";

import Menu from "./SVG/menu";
import Logo from "./SVG/logo";
const Header = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  const { isMobile } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      toggleMenuOpen(false)
    }
  }, [router.asPath])

  return (
    <>
      <div className="header__placeholder" style={{
        height: isMobile && menuOpen ? '52px' : '0px',
        margin: isMobile && menuOpen ? '25px auto' : '0'
      }}>
        
      </div>
      <div
        className="header__wrapper"
        style={{
          position: isMobile && menuOpen ? "fixed" : "relative",
        }}
      >
        <header className="header">
          <div className="header--logo">
            <Link href="/">
              <a>
                <Logo menuOpenOnMobile={menuOpen && isMobile} />
              </a>
            </Link>
          </div>
          {!isMobile && <Nav isMobile={isMobile} menuOpen={menuOpen} />}
          {/* should change to link */}
          {isMobile ? (
            <button id="menuIcon" onClick={(e) => toggleMenuOpen(!menuOpen)}>
              <Menu menuOpen={menuOpen} />
            </button>
          ) : (
            <div className="header--cta__wrapper">
              <button className="header--cta btn btn--filled j-text _600 capitalize">
                try beta
              </button>
            </div>
          )}
        </header>
      </div>
      {/* <span className="header__placeholder"></span> */}
      {isMobile && <Nav isMobile={isMobile} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen}/>}
    </>
  );
};

function Nav({ isMobile, menuOpen, toggleMenuOpen }) {
  // console.log((isMobile && menuOpen) || !isMobile);
  const [navStyle, updateNavStyle] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!isMobile) {
      updateNavStyle({
        transform: "translate(0)",
        opacity: 1,
      });
    } else if (isMobile) {
      if (menuOpen) {
        updateNavStyle({
          transform: "translate(-50%, -50%)",
          opacity: 1,
        });
      } else {
        updateNavStyle({
          transform: "translate(-50%, -175%)",
        });
      }
    }
  }, [isMobile, menuOpen]);

  return (
    <nav
      className={`header--nav${isMobile ? " header--nav__mobile" : ""}`}
      style={navStyle}
    >
      <ul className="header--nav--list">
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/features">
            <a
              style={{
                color: router.pathname === "/features" ? "#1688f2" : "#252939",
              }}
            >
              features
            </a>
          </Link>
        </li>
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/pricing">
            <a
              style={{
                color: router.pathname === "/pricing" ? "#1688f2" : "#252939",
              }}
            >
              pricing
            </a>
          </Link>
        </li>
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/contact">
            <a
              style={{
                color: router.pathname === "/contact" ? "#1688f2" : "#252939",
              }}
            >
              contact
            </a>
          </Link>
        </li>
        {/* <li className="j-text header--nav--item">blog</li> */}
      </ul>
      {isMobile && (
        <button className="header--cta btn btn--filled j-text _600 capitalize">
          try beta
        </button>
      )}
    </nav>
  );
}

export default Header;
