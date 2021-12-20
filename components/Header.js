import Link from "next/link";
import { useEffect, useState } from "react";

import Menu from "./SVG/menu";
import Logo from './SVG/logo'
const Header = ({ isMobile, scrollOffset }) => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <>
      <div className="header__wrapper" style={{
        boxShadow: scrollOffset > 0 ? '0 1px 25px -10px rgba(5,5,5, 0.25)' : '0 1px 25px -10px rgba(5,5,5, 0)'
      }}>
        <header className="header">
          <div className="header--logo">
            <Link href="/">
              <Logo menuOpen={menuOpen}/>
            </Link>
          </div>
          <Nav isMobile={isMobile} menuOpen={menuOpen} />
          {/* should change to link */}
          {isMobile ? (
            <button id="menuIcon" onClick={(e) => toggleMenuOpen(!menuOpen)}>
              <Menu menuOpen={menuOpen} />
            </button>
          ) : (
            <button className="header--cta btn btn--filled j-text _600 capitalize">
              try beta
            </button>
          )}
        </header>
      </div>
      <span className="header__placeholder"></span>
    </>
  );
};

function Nav({ isMobile, menuOpen }) {
  console.log((isMobile && menuOpen) || !isMobile);
  const [navStyle, updateNavStyle] = useState();

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
        <li className="j-text _600 header--nav--item capitalize">
          <Link href="/features">
            <a>features</a>
          </Link>
        </li>
        <li className="j-text _600 header--nav--item capitalize">
          <Link href="/pricing">
            <a>pricing</a>
          </Link>
        </li>
        <li className="j-text _600 header--nav--item capitalize">
          <Link href="/contact">
            <a>contact</a>
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
