


const Header = () => {
  return (
    <header className="header">
        <div className="header--logo">
            <img src="/wirewise-logo.svg" alt="Logo for WireWise" />
        </div>
        <nav className="header--nav">
            <ul className="header--nav--list">
                <li className="j-text _600 header--nav--item capitalize">features</li>
                <li className="j-text _600 header--nav--item capitalize">pricing</li>
                <li className="j-text _600 header--nav--item capitalize">contact</li>
                {/* <li className="j-text header--nav--item">blog</li> */}
            </ul>
        </nav>
        {/* should change to link */}
        <button className="header--cta btn btn--filled j-text _600 capitalize">try beta</button>
    </header>
  );
};

export default Header;
