import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "../index";

const Layout = ({ children }) => {
  const appName = "Play'n Go Tournament";
  return (
    <>
      <Helmet>
        <title>{appName}</title>
      </Helmet>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
