import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import AllToys from "../pages/allToys/AllToys";
import Blogs from "../pages/blogs/Blogs";
import AddToy from "../pages/addToys/AddToy";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Loading from "../pages/loading/Loading";
import Toys from "../pages/toys/Toys";
import Trains from "../pages/trains/Trains";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../pages/myToys/MyToys";
import ToyDetails from "../pages/toyDetails/ToyDetails";
import ErrorPage from "../pages/error/ErrorPage";
import UpdateModal from "../pages/update/UpdateModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/truck/:id",
        element: (
          <PrivateRoutes>
            <Toys />
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://speedy-toy-server.vercel.app/toys`),
      },
      {
        path: "/train/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <Trains />
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://speedy-toy-server.vercel.app/toys`),
      },
      {
        path: "/car/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <Toys />
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://speedy-toy-server.vercel.app/toys`),
      },

      {
        path: "toy-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateModal></UpdateModal>,
        loader: ({ params }) =>
          fetch(
            `https://speedy-toy-server-shakilkhan2.vercel.app/addedtoys/${params.id}`
          ),
      },
      {
        path: "/all-toys",
        element: <AllToys />,
      },
      {
        path: "my-toys",
        element: <MyToys />,
      },
      {
        path: "/add-toy",
        element: <AddToy />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/loader",
        element: <Loading />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
