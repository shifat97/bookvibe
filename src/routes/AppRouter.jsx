import React, { useState, useEffect } from "react";
import App from "../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import Details from "../components/Details.jsx";
import Pages from "../components/Pages.jsx";
import Wishlist from "../components/Wishlist.jsx";
import ReadBook from "../components/ReadBook.jsx";
import WishlistBook from "../components/WishlistBook.jsx";

// Fetch data function
const fetchData = async () => {
  return fetch("data.json").then((response) => response.json());
};

export const AppRouter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

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
          element: <Details data={data} />,
        },
        {
          path: "/wishlist",
          element: <Wishlist data={data} />,
          children: [
            {
              path: "",
              element: <ReadBook />,
            },
            {
              path: "wishlist-books",
              element: <WishlistBook />,
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

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
