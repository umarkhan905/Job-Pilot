import Navbar from "./navbar/NavbarLayout";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import LoadingScreen from "../components/loaders/LoadingScreen";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <React.Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </React.Suspense>
      <Footer />
    </>
  );
};

export default RootLayout;
