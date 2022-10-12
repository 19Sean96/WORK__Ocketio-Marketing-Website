const ContentWrapper = ({ children, width, padBot=undefined, id=null }) => {
    return <div id={id || null} className="main_wrapper" style={{
        maxWidth: width || 1382,
        paddingBottom: padBot || 'inset'
    }}>{children}</div>;
  };
  export default ContentWrapper;
  