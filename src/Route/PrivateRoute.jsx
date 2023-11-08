import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loader } = useContext(userContext);

    if (user) {
        return children;
    }
    if (loader) {
        return <div className=" h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    return <Navigate state={location} to='/login' replace></Navigate>
};

export default PrivateRoute;