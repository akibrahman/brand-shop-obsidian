import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddProduct from "./Components/AddProduct.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import Banner from "./Components/Banner.jsx";
import Brand from "./Components/Brand.jsx";
import DetailsProduct from "./Components/DetailsProduct.jsx";
import EditProduct from "./Components/EditProduct.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Login from "./Components/Login.jsx";
import MV from "./Components/MV.jsx";
import MyCart from "./Components/MyCart.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Products from "./Components/Products.jsx";
import Registration from "./Components/Registration.jsx";
import Review from "./Components/Reviesw.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch(
            "https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/brands"
          ),
        element: (
          <>
            <Banner></Banner>
            <MV></MV>
            <Brand></Brand>
            <Review></Review>
          </>
        ),
      },
      {
        path: "/add-product",
        loader: () =>
          fetch(
            "https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/brands"
          ),
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-product/:id",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/product/edit/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EditProduct></EditProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        loader: () =>
          fetch(
            "https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/cart/products"
          ),
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:brand",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/products/${params.brand}`
          ),
        element: <Products></Products>,
      },
      {
        path: "/product/:id",
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-4dp125u6l-akib-rahmans-projects.vercel.app/product/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <DetailsProduct></DetailsProduct>
          </PrivateRoute>
        ),
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
