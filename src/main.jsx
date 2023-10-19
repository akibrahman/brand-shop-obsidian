import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import Banner from "./Components/Banner.jsx";
import Brand from "./Components/Brand.jsx";
import DetailsProduct from "./Components/DetailsProduct.jsx";
import EditProduct from "./Components/EditProduct.jsx";
import Login from "./Components/Login.jsx";
import MyCart from "./Components/MyCart.jsx";
import Products from "./Components/Products.jsx";
import Registration from "./Components/Registration.jsx";
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
        loader: () => fetch("http://localhost:5000/cart/products"),
        element: <MyCart></MyCart>,
      },
      {
        path: "/products/:brand",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brand}`),
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
        element: <DetailsProduct></DetailsProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
