
const Wishlist = ({ blog, handleWishlistRemove }) => {
    const { currentTime, currentDay, title, imgUrl, category, shortDescription, _id } = blog;
    console.log(blog);
    return (
        <div className="card">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <figure>
                <img src={imgUrl} alt="Shoes" className="w-full h-[250px]" />
            </figure>
            <div className="card-body w-full">
                <p>Published: {currentTime} {currentDay}</p>

                <p>{shortDescription}</p>
                <p>category: {category}</p>
                <div className="justify-end px-0">
                    <button className="btn btn-primary w-full my-5">Details</button><br />
                    <button onClick={() => handleWishlistRemove(_id)} className="btn btn-primary w-full">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;