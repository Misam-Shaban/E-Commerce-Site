import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Sign_up from "./Pages/Sign_up";
import Product_Details from "./Pages/Products_details";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Sign_up /> },
  { path: "/Products/:id", element: <Product_Details /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
