import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../Provider/AuthContext";

const Blogs = ({ blog }) => {
    const { user } = useContext(userContext);
    const { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription } = blog;

    // handle wishlist
    const handleWishlist = () => {
        const blogWithUser = { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription, email: user?.email };
        axios.post('http://localhost:3000/wishlist', blogWithUser)
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div className="card">
            <figure>
                <img src={imgUrl} alt="Shoes" className="w-full h-[550px]" />
            </figure>
            <div className="card-body w-full">
                <p>Published: {currentTime} {currentDay}</p>
                <h2 className="card-title">{title}</h2>
                <p>{shortDescription}</p>
                <p>category: {category}</p>
                <div className="justify-end px-0">
                    <button className="btn btn-primary w-full my-5">Details</button><br />
                    <button onClick={() => handleWishlist()} className="btn btn-primary w-full">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;