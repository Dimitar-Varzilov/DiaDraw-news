import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AppContextProvider from "../context/AppProvider";
import Header from "./Header";

const Layout: React.FunctionComponent = () => {
  return (
    <AppContextProvider>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default Layout;
