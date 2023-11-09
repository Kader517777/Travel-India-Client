
const Comment = ({ comment }) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">

            <div className="avatar p-5">
                <div className="w-24 h-24 rounded-full">
                    <img src={comment?.commenterPhotoUR} />
                </div>
            </div>

            <div className="ml-6 p-5">
                <p className="text-xl font-bold text-[tomato] mb-2">{comment?.name}</p>
                <p className="text-base ">{comment?.comment}</p>

            </div>
        </div>
    );
};

export default Comment;