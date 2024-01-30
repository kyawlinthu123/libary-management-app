import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Search from "../pages/Search";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "",
            element: <Home/>
        },
        {
            path: "/create",
            element: <Create/>
        },
        {
            path: "/search",
            element: <Search/>
        }
      ]
    },
  ]);

export default router;
