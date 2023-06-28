import React from "react";
import { NavBar } from "./Navbar";
import Footer from "./Footer";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
