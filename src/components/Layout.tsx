import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
