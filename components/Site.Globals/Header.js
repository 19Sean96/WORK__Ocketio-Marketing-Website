import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context";

import { Menu, MenuV2 } from "./NavMobileMenu";
import Logo from './Logo';
import Nav from './Nav';
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

export default Header;
