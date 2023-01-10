import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Index'
import Favourites from '../Pages/Favourites/Index'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/favourites",
    element: <Favourites/>,
  },
]);
