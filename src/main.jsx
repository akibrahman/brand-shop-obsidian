import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import Banner from "./Components/Banner.jsx";
import Brand from "./Components/Brand.jsx";
import MyCart from "./Components/MyCart.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/brands"),
        element: (
          <>
            <Banner></Banner>
            <Brand></Brand>
          </>
        ),
      },
      {
        path: "/add-product",
        loader: () => fetch("http://localhost:5000/brands"),
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/products/:id",
        element: <MyCart></MyCart>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
