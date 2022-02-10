import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../Context";

import { Menu, MenuV2 } from "./SVG/menu";
import Logo from "./SVG/logo";
const Header = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  const { isMobile } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (menuOpen) {
      toggleMenuOpen(false);
    }
  }, [router.asPath]);

  return (
    <>
      <div
        className="header__placeholder"
        style={{
          height: isMobile && menuOpen ? "52px" : "0px",
          margin: isMobile && menuOpen ? "25px auto" : "0",
        }}
      ></div>
      <div
        className="header__wrapper"
        style={{
          position: isMobile && menuOpen ? "fixed" : "relative",
          background:
            router.pathname === "/features" || router.pathname.includes("/blog")
              ? "#252939"
              : "transparent",
        }}
      >
        <header className="header">
          <div className="header--logo">
            <Link href="/">
              <a>
                <Logo
                  menuOpenOnMobile={menuOpen && isMobile}
                  darkMode={
                    router.pathname === "/features" ||
                    router.pathname.includes("/blog") ||
                    router.pathname === '/contact'
                  }
                />
              </a>
            </Link>
          </div>
          {!isMobile && (
            <Nav
              isMobile={isMobile}
              menuOpen={menuOpen}
              darkMode={
                router.pathname === "/features" ||
                router.pathname.includes("/blog") ||
                router.pathname === '/contact'
              }
            />
          )}
          {/* should change to link */}
          {isMobile ? (
            <button
              id="menuIcon"
              onClick={(e) => toggleMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "close mobile navigation" : "open mobile navigation"
              }
            >
              <MenuV2
                menuOpen={menuOpen}
                darkMode={
                  router.pathname === "/features" ||
                  router.pathname.includes("/blog") ||
                  router.pathname === '/contact'
                }
              />
            </button>
          ) : (
            <div className="header--cta__wrapper">
              <a href="#" className="j-text _500" id="login" aria-label="Log in to your account here" style={{
                color: router.pathname === "/features" ||
                router.pathname.includes("/blog") ||
                router.pathname === '/contact' ? '#f5f5f5' : '#121212'
              }}>Login</a>
              <span className="pipe" style={{
                background: router.pathname === "/features" ||
                router.pathname.includes("/blog") ||
                router.pathname === '/contact' ? '#f5f5f5' : '#121212'
              }} ></span>
              <button
                className="header--cta btn btn--filled j-text _400"
                aria-label="Get started with the beta program"
              >
                Try the Beta
              </button>
            </div>
          )}
        </header>
      </div>
      {/* <span className="header__placeholder"></span> */}
      {isMobile && (
        <Nav
          isMobile={isMobile}
          menuOpen={menuOpen}
          toggleMenuOpen={toggleMenuOpen}
          darkMode={
            router.pathname === "/features" || router.pathname.includes("/blog")
          }
        />
      )}
    </>
  );
};

function Nav({ isMobile, menuOpen, toggleMenuOpen, darkMode }) {
  // console.log((isMobile && menuOpen) || !isMobile);
  const [navStyle, updateNavStyle] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!isMobile) {
      updateNavStyle({
        transform: "translate(-50%, -50%)",
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
          transform: "translate(75%, -50%)",
          opacity: 0
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
            <a className={darkMode ? 'darkmode' : ''}>features</a>
          </Link>
        </li>
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/pricing">
            <a className={darkMode ? 'darkmode' : ''}>pricing</a>
          </Link>
        </li>
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/contact">
            <a className={darkMode ? 'darkmode' : ''}>contact</a>
          </Link>
        </li>
        <li className="j-text _400 header--nav--item capitalize">
          <Link href="/">
            <a className={darkMode ? 'darkmode' : ''}>blog</a>
          </Link>
        </li>
        {/* <li className="j-text header--nav--item">blog</li> */}
      </ul>
      {isMobile && (
        <button
          className="header--cta btn btn--filled j-text _400"
          aria-label="Get started with the beta program"
        >
          Try the Beta
        </button>
      )}
    </nav>
  );
}

export default Header;
