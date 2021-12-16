import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Header = () => {
  return (
    <ContentWrapper>
      <header className="header">
        <div className="header--logo">
          <Link href="/">
            <img src="/wirewise-logo.svg" alt="Logo for WireWise" />
          </Link>
        </div>
        <nav className="header--nav">
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
        </nav>
        {/* should change to link */}
        <button className="header--cta btn btn--filled j-text _600 capitalize">
          try beta
        </button>
      </header>
    </ContentWrapper>
  );
};

export default Header;
