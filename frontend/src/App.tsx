import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";

const App = () => {
  const HomePage = React.lazy(() => import("./pages/HomePage.tsx"));
  const TestingPage = React.lazy(() => import("./pages/TestingPage.tsx"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="testing-page" element={<TestingPage />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
