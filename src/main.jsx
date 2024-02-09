import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewUser from "./pages/CreateAccount";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import MainScreen from "./pages/MainScreen";
import Logout from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/MainScreen", element: <MainScreen /> }],
  },
  ,
  { path: "/PostDetail", element: <PostDetail /> },
  { path: "/NewUser", element: <NewUser /> },
  { path: "/Login", element: <Login /> },
  { path: "/NewPost", element: <NewPost /> },
  { path: "/Logout", element: <Logout /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
