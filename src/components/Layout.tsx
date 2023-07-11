import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import { store } from "../store/store";

const Layout: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
