import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "@context/app";

function Nav({ menuOpen }) {
  const [navStyle, updateNavStyle] = useState();
  const router = useRouter();
  const { headerDarkMode, isMobile } = useAppContext()

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
          opacity: 0,
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
        <li className="header--nav--item capitalize">
          <Link href="/features">
            <a
              className={`${headerDarkMode ? "darkmode" : ""} ${
                router.pathname.includes("features") ? "active" : ""
              }`}
            >
              features
            </a>
          </Link>
        </li>
        <li className="header--nav--item capitalize">
          <Link href="/pricing">
            <a
              className={`${headerDarkMode ? "darkmode" : ""} ${
                router.pathname.includes("pricing") ? "active" : ""
              }`}
            >
              pricing
            </a>
          </Link>
        </li>
        <li className="header--nav--item capitalize">
          <Link href="/contact">
            <a
              className={`${headerDarkMode ? "darkmode" : ""} ${
                router.pathname.includes("contact") ? "active" : ""
              }`}
            >
              contact
            </a>
          </Link>
        </li>
        <li className="header--nav--item capitalize">
          <Link href="/blog">
            <a
              className={`${headerDarkMode ? "darkmode" : ""} ${
                router.pathname.includes("blog") ? "active" : ""
              }`}
            >
              blog
            </a>
          </Link>
        </li>
        {/* <li className="j-text header--nav--item">blog</li> */}
      </ul>
      {isMobile && (
        <button
          className="header--cta btn btn--filled btn--filled__darkmode"
          aria-label="Get started with the beta program"
        >
          Try the Beta
        </button>
      )}
    </nav>
  );
}

export default Nav;