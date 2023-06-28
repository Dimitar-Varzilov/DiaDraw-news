import React from "react";
import { NavBar } from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const Layout: React.FunctionComponent = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
