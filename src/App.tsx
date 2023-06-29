import "./App.css";
import AppContextProvider from "./context/AppProvider";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Form from "./pages/Form";
import Detail from "./pages/Detail";

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
        path: "/form",
        Component: Form,
      },
      {
        path: "/detail",
        Component: Detail,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
