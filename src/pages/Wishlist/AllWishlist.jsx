import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../Provider/AuthContext";
import Wishlist from "./Wishlist";

const AllWishlist = () => {
    const { user } = useContext(userContext);
    const [allWishList, setAllWishList] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:3000/wishlist/?email=${user.email}`)
            .then(res => {
                setAllWishList(res.data);
            })
    }, [])

    const handleWishlistRemove = (id) => {
        axios.delete(`http://localhost:3000/${id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const filterdata = allWishList.filter(item => item._id !== id)
                    setAllWishList(filterdata);
                }
            })
    }

    return (
        <div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allWishList?.map(blog => <Wishlist key={blog._id} blog={blog} handleWishlistRemove={handleWishlistRemove}></Wishlist>)}
        </div>
    );
};

export default AllWishlist;