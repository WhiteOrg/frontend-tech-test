import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "./common";

const Layout = ({ children }) => {
  const appName = "Play'n Go Tournament";
  return (
    <>
      <Helmet>
        <title>{appName}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
