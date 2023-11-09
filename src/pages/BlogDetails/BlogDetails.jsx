import axios, { Axios } from "axios";
import { useContext } from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";
import Comment from "./comment";

const BlogDetails = () => {
    const { user } = useContext(userContext);
    const [blog, setBlog] = useState(null);
    const [blogComment, setBlogComment] = useState(null);
    const id = useParams();
    const _id = id.id;


    useEffect(() => {
        axios.get(`http://localhost:3000/allBlogs/${_id}`)
            .then(res => {
                const [data] = res.data;
                setBlog(data);
            })
    }, [])
    // it's blog comment
    useEffect(() => {
        axios.get(`http://localhost:3000/comment/${_id}`)
            .then(res => {
                setBlogComment(res.data);
            })
    }, [])
    // handle comment form
    const handleComment = (e) => {
        e.preventDefault();
        const comment = e?.target?.comment?.value;
        const name = e.target?.name?.value;
        const email = e.target?.email?.value;
        const userCommment = { comment, name, email, blog_id: _id, commenterPhotoUR: user?.photoURL };

        if (!user) {
            return toast.error('please login or sign up!')
        } else if (blog.writer == user?.email) {
            return toast.error("It's your Blog. you cann't comment!")
        } else if (comment.split(' ').length <= 9) {
            return toast.error("at least 10 word write!")
        } else if (name.split(' ').length <= 1) {
            return toast.error("at least 2 word write!")
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return toast.error("please write a email")
        }

        axios.post('http://localhost:3000/comment', userCommment)
            .then(res => {
                if (res.data.acknowledged) {
                    e.target.reset()
                };
            })

    }




    return (
        <div className=" container lg:mx-auto">
            <div className=" mb-28 mx-4 lg:mx-0">
                <img src={blog?.imgUrl} className='w-full h-[400px] lg:h-[800px]' alt="" />
                <p>published: {blog?.currentTime} {blog?.currentDay}</p>
                <p className="text-3xl font-bold mt-8 mb-2">{blog?.title}</p>
                <h1 className=" mb-8">{blog?.category}</h1>
                <p >{blog?.shortDescription}</p>
                <p className="my-8">{blog?.LongDescription}</p>
                {/* Check blog writer and show update button */}
                {blog?.writer == user?.email && <Link to={`/updated/${_id}`}><button className="btn bg-[tomato] text-white py-4 px-6 text-2xl font-bold content-center my-6">Update</button></Link>}
            </div>
            <div className="bg-[#F6F6F6] mb-24 p-12 mx-4 lg:mx-0">
                <h1 className="text-3xl font-bold">Comments:</h1>
                <div className=" mb-12 mt-4 grid md:grid-cols-2 grid-cols-1 gap-7">
                    {blogComment?.length && blogComment?.map(comment => <Comment key={comment.blog_id} comment={comment}></Comment>)}

                </div>
                <form onSubmit={handleComment} className=" flex flex-col justify-center items-center w-full mt-12">
                    <textarea name="comment" className=" border-[2px] w-full md:w-3/4 p-3 outline-none" id="" cols="15" rows="5"></textarea>
                    <h1 className="text-2xl w-3/4 my-6">Name:</h1>
                    <input type="text" name="name" defaultValue={user?.displayName} className="h-[40px] w-full md:w-3/4 border-[2px] text-xl p-3 outline-none" id="" />
                    <h1 className="text-2xl w-3/4 my-6">Email:</h1>
                    <input type="email" name="email" defaultValue={user?.email} className="h-[40px] w-full md:w-3/4 border-[2px] text-xl p-3 outline-none" id="" />
                    <button type="submit" className=" btn btn-outline btn-warning py-4 px-6 text-2xl font-bold content-center my-6">POST COMMENT</button>
                </form>
            </div>
        </div>
    );
};

export default BlogDetails;