import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Search from "../pages/Search";
import BookDetails from "../pages/BookDetails";
import NotFound from "../pages/NotFound";
  
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
          path: "/books/:id",
          element: <BookDetails/>
        },
        {
            path: "/create",
            element: <Create/>
        },
        {
            path: "/search",
            element: <Search/>
        },
        {
          path: '*',
          element: <NotFound/>
        }
      ]
    },
  ]);

export default router;
