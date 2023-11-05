import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";

const Navber = () => {
    const { user, signUp } = useContext(userContext);
    const userName = user?.auth?.currentUser?.displayName;
    const email = user?.auth?.currentUser?.email;
    const photoURL = user?.auth?.currentUser?.photoURL;
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                            }
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/addblog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                            }
                        >
                            Add Blog
                        </NavLink></li>
                        <li><NavLink
                            to="/allblogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                            }
                        >
                            All Blogs
                        </NavLink></li>
                        <li><NavLink
                            to="/featuredblogs"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                            }
                        >
                            Featured Blogs
                        </NavLink></li>
                        <li><NavLink
                            to="/wishlist"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                            }
                        >
                            Wishlist
                        </NavLink></li>
                    </ul>
                </div>
                <p className="flex items-center text-xl"><img className="w-8 h-6 mr-2 ml-0 md:ml-6" src="" alt="" />Travel India</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : " text-2xl font-bold"
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/addblog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                        }
                    >
                        Add Blog
                    </NavLink></li>
                    <li><NavLink
                        to="/allblogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                        }
                    >
                        All Blogs
                    </NavLink></li>
                    <li><NavLink
                        to="/featuredblogs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                        }
                    >
                        Featured Blogs
                    </NavLink></li>
                    <li><NavLink
                        to="/wishlist"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending text-2xl font-bold" : isActive ? "active text-2xl font-bold" : "text-2xl font-bold"
                        }
                    >
                        Wishlist
                    </NavLink></li>


                </ul>
            </div>
            <div className="navbar-end">
                {!user ? <Link className="btn text-3xl mr-0 md:mr-6" to='login'>Login</Link> :
                    <div className=" flex justify-center items-center">
                        {userName ? <h1 className="hidden md:flex text-xl">{userName}</h1>
                            : <h1 className="hidden md:flex text-2xl mx-0 md:mx-3">{email}</h1>}
                        {photoURL && <div className="avatar mx-0 md:mx-3">
                            <div className="w-12 rounded-full">
                                <img src={photoURL} />
                            </div>
                        </div>}
                        <Link onClick={() => signUp()} className="btn text-3xl mr-0 md:mr-6" to='/'>LogOut</Link>
                    </div>


                }
            </div>
        </div>
    );
};

export default Navber;