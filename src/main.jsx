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
import Update from './pages/Update/Update';
import FeaturedBlogs from './pages/FeaturedBlogs/FeaturedBlogs';
import ErrorPage from './pages/ErrorPage/ErrorPage';


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
        element: < FeaturedBlogs ></FeaturedBlogs >,
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
      {
        path: '/updated/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>,
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
