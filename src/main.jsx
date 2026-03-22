import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
///import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Root from "./components/Root";
import App from "./components/App";
import Installation from "./components/Installation";
import AppDetails from "./components/AppDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/app",
            element: <App></App>,
            loader: () => fetch("../appData.json"),
         },
         {
            path: "/installation",
            element: <Installation></Installation>,
         },
         {
            path: "/app-details/:appId",
            element: <AppDetails></AppDetails>,
            loader: () => fetch("../appData.json"),
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>,
);
