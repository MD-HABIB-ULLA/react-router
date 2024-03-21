import React from "react";
import ReactDOM from "react-dom/client"; 
import './index.css';

import { createBrowserRouter, RouterProvider   } from "react-router-dom";
import Root from "./components/root/Root";
import ErrorPage from "./components/errorpage/ErrorPage";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github from "./components/Github/Github";
const router = createBrowserRouter([
  {
    path:"/",
    element : <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"",
        element:<Home></Home>
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"github",
        element:<Github/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);
