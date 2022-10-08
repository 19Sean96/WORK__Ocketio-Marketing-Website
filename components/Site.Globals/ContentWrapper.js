const ContentWrapper = ({ children, width }) => {
    return <div className="main_wrapper" style={{
        maxWidth: width || 1382
    }}>{children}</div>;
  };
  export default ContentWrapper;
  