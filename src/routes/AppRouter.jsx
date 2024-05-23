import React, { useState, useEffect } from "react";
import App from "../App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.jsx";
import Details from "../pages/Details.jsx";
import Chart from "../pages/Chart.jsx";
import Wishlist from "../pages/Wishlist.jsx";
import ReadBook from "../components/ReadBook.jsx";
import WishlistBook from "../components/WishlistBook.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Contact from "../pages/Contact.jsx";

// Fetch data function
const fetchData = () => {
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
      errorElement: <ErrorPage />,
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
          element: <Chart data={data} />,
        },
        {
          path: "/contact",
          element: <Contact />,
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
