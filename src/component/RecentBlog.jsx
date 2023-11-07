import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const RecentBlog = () => {
    return (
        <div className="card">
            <figure>
                <img src="https://i.ibb.co/Zzh9F4d/Godavari-Bridge.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p>category</p>
                <div className="justify-end px-0">
                    <button className="btn btn-primary w-full my-5">Details</button><br />
                    <button className="btn btn-primary w-full">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;