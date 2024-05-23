import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import Pages from "./components/Pages.jsx";
import Wishlist from "./components/Wishlist.jsx";
import ReadBook from "./components/ReadBook.jsx";
import WishlistBook from "./components/WishlistBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("data.json"),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        children: [
          {
            index: true,
            element: <ReadBook />,
            loader: () => fetch("data.json"),
          },
          {
            path: "wishlist-books",
            element: <WishlistBook />,
            loader: () => fetch("data.json"),
          },
        ],
      },
      {
        path: "/pages",
        element: <Pages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
