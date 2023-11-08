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
import AllBlogs from './pages/AllBlogs/AllBlogs';
import AllWishlist from './pages/Wishlist/allWishlist';
import PrivateRoute from './Route/PrivateRoute';
import BlogDetails from './pages/BlogDetails/BlogDetails';


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
        element: <PrivateRoute>
          <AddBlog></AddBlog>
        </PrivateRoute>,
      },
      {
        path: '/allblogs',
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: '/featuredblogs',
        element: <p className=' text-2xl text-red-900'>Featured Blogs</p>,
      },
      {
        path: '/wishlist',
        element: <PrivateRoute>
          <AllWishlist></AllWishlist>
        </PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails></BlogDetails>,
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
