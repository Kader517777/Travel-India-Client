import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Wishlist from "./Wishlist";

const AllWishlist = () => {
    const [allWishList, setAllWishList] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3000/wishlist')
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
                    console.log(res.data.acknowledged);
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