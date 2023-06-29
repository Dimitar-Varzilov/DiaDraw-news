import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  RouterProvider,
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
        path: "addNews",
        Component: Form,
      },
      {
        path: "newsDetail/:id",
        Component: Detail,
        id: ":id",
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
