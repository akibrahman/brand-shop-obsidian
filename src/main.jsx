import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import Banner from "./Components/Banner.jsx";
import Brand from "./Components/Brand.jsx";
import EditProduct from "./Components/EditProduct.jsx";
import MyCart from "./Components/MyCart.jsx";
import Products from "./Components/Products.jsx";
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
        path: "/edit-product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/edit/${params.id}`),
        element: <EditProduct></EditProduct>,
      },
      {
        path: "/my-cart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/products/:brand",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
        element: <Products></Products>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
