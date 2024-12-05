import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/navbar.jsx";
import Announcement from "./components/Announcement.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Order from "./pages/Order.jsx";
import AllProducts from "./components/AllProducts.jsx";
import { CartProvider } from "../context/CartContext.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Paiement from "./pages/Paiement.jsx";

function App() {
  const Layout = () => {
    return (
      <>
        <Announcement />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/create-account",
        //   element: <Register />,
        // },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/products",
          element: <AllProducts />,
        },
        {
          path: "/myorders",
          element: <Order />,
        },
        {
          path: "/paiement",
          element: <Paiement />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
