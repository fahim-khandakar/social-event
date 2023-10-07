import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import Error from "../Error page/Error";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoutes";

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
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
