import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Nav({ isMobile, menuOpen, darkMode }) {
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
          <Link href="/blog">
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

export default Nav;
