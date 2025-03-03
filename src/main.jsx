import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Connection from "./components/Connection.jsx";
import Gallery from "./components/Gallery.jsx";
import Home from "./components/Home.jsx";
import Ramadan from "./components/Ramadan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/রমজান",
        element: <Ramadan></Ramadan>,
      },
      {
        path: "/গ্যালারী",
        element: <Gallery></Gallery>,
      },
      {
        path: "/যোগাযোগ",
        element: <Connection></Connection>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
