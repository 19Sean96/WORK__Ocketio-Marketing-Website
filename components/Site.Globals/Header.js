import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context";

import { Menu, MenuV2 } from "./NavMobileMenu";

import Logo from "../../public/ocketio-logo.svg";
import Nav from "./Nav";

const Header = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);
  const { isMobile, headerDarkMode } = useAppContext();
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
          background: headerDarkMode ? "#101010" : "transparent",
        }}
      >
        <header className="header">
          <div className="header--logo">
            <Link href="/">
              <a>
                <Logo
                  menuOpenOnMobile={menuOpen && isMobile}
                  style={{
                    fill: headerDarkMode ? "#f5f5f5" : "#101010",
                  }}
                />
              </a>
            </Link>
          </div>
          {!isMobile && (
            <Nav
              isMobile={isMobile}
              menuOpen={menuOpen}
              headerDarkMode={
                router.pathname === "/features" ||
                router.pathname.includes("/blog") ||
                router.pathname === "/contact"
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
                headerDarkMode={
                  router.pathname === "/features" ||
                  router.pathname.includes("/blog") ||
                  router.pathname === "/contact"
                }
              />
            </button>
          ) : (
            <div className="header--cta__wrapper">
              <a
                href="#"
                id="login"
                aria-label="Log in to your account here"
                style={{
                  color: headerDarkMode ? "#f5f5f5" : "#121212",
                }}
              >
                Login
              </a>
              <button
                className={`btn btn--filled ${headerDarkMode ? 'btn--filled__darkmode' : ''}`}
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
          headerDarkMode={
            router.pathname === "/features" || router.pathname.includes("/blog")
          }
        />
      )}
    </>
  );
};

export default Header;
