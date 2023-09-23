const ContentContainer = ({ children }) => {
  return (
    <div className="container-md" style={{ maxWidth: "750px" }}>
      {children}
    </div>
  );
};

export default ContentContainer;
