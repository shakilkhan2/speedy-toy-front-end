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
          
            <Toys/>
          
        ),
        loader: () => fetch(`http://localhost:5000/truck`),
      },
      {
        path: "/train/:id",
        element: (
          
          <Toys/>
          
        ),
        loader: () => fetch(`http://localhost:5000/train`),
      },
      {
        path: "/car/:id",
        element: (
          
            <Toys/>
          
        ),
        loader: () => fetch(`http://localhost:5000/formula-one`),
      },
      {
        path: "/all-toys",
        element: <AllToys />,
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
        element: <Loading/>
      }
    ],
  },
]);

export default router;
