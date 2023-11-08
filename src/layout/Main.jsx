import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <div><Toaster /></div>
        </div>
    );
};

export default Main;