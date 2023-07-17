import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import AddNews from "./pages/AddNews";

const router = createBrowserRouter([
  {
    path: "*",
    Component: () => <div>Page Not Found</div>,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "addNews",
        Component: AddNews,
      },
      {
        path: "newsDetail/:id",
        Component: Detail,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
