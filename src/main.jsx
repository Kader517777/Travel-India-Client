import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navber from './component/Navber';
import AuthContext from './Provider/AuthContext';
import Main from './layout/Main';
import "./index.css";
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import AddBlog from './pages/AddBlog/AddBlog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addblog',
        element: <AddBlog></AddBlog>,
      },
      {
        path: '/allblogs',
        element: <p>All Blogs page</p>,
      },
      {
        path: '/featuredblogs',
        element: <p className=' text-2xl text-red-900'>Featured Blogs</p>,
      },
      {
        path: '/wishlist',
        element: <p>Wishlist</p>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
