const ContentWrapper = ({ children, width }) => {
  return <div className="main_wrapper" style={{
      maxWidth: width
  }}>{children}</div>;
};
export default ContentWrapper;
