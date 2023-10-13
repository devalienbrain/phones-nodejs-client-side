import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import Phones from "./components/Phones";
import Phone from "./components/Phone";
import Home from "./components/Home";
import SinglePhone from "./components/SinglePhone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/phones/:id",
        element: <SinglePhone />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
