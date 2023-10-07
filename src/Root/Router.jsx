import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import Error from "../Error page/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/serviceDetails/:id",
        loader: () => fetch("/data.json"),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
