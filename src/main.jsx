import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewUser from "./pages/CreateAccount";
import Login from "./pages/Login";
import Post from "./pages/Post";
import NewPost from "./pages/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/Post", element: <Post /> }],
  },
  { path: "/NewUser", element: <NewUser /> },
  { path: "/Login", element: <Login /> },
  { path: "/NewPost", element: <NewPost /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
