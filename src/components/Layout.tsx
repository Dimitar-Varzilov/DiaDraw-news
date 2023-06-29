import React from "react";
import { NavBar } from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AppContextProvider from "../context/AppProvider";
import Header from "./Header";

const Layout: React.FunctionComponent = () => {
  return (
    <AppContextProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppContextProvider>
  );
};

export default Layout;
