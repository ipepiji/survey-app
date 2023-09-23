import ContentContainer from "utils/components/ContentContainer";
import ContentRoutes from "routes/ContentRoutes";

const OneColumnLayout = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <ContentContainer>
        <ContentRoutes />
      </ContentContainer>
    </div>
  );
};

export default OneColumnLayout;
