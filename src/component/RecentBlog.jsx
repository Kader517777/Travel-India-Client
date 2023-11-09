import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { userContext } from "../Provider/AuthContext";


const RecentBlog = ({ blog }) => {
    const { user } = useContext(userContext);
    const { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription, _id } = blog;

    // handle wishlist
    const handleWishlist = () => {
        if (!user) {
            return toast.error('Please Sign Up or Login!')
        }
        const blogWithUser = { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription, email: user?.email };
        axios.post(`https://travel-india-server.vercel.app/wishlist/${_id}`, blogWithUser)
            .then(res => {
                if (res.data.acknowledged) {
                    toast.success('WishList added your Blog!')
                }
            })
    }
    return (
        <div className="card">
            <figure>
                <img src={imgUrl} alt="Shoes" className="w-full h-[300px] md:h-[550px]" />
            </figure>
            <div className="card-body w-full">
                <p>Published: {currentTime} {currentDay}</p>
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <p>category: {category}</p>
                <div className="justify-end px-0">
                    <Link to={`/blogDetails/${_id}`}><button className="btn btn-primary w-full my-5">Details</button></Link><br />
                    <button onClick={() => handleWishlist()} className="btn btn-primary w-full">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;