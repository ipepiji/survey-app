import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import FourOhFour from "pages/FourOhFour";

const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default ContentRoutes;
