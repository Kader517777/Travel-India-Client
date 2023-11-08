import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const id = useParams();
    const _id = id.id;
    const [blog, setBlog] = useState(null);
    // const { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription } = blog;
    console.log(blog);
    useEffect(() => {
        axios.get(`http://localhost:3000/allBlogs/${_id}`)
            .then(res => {
                const [data] = res.data;
                setBlog(data);
            })
    }, [])
    return (
        <div className=" container mx-auto">
            <img src={blog?.imgUrl} className='w-full h-[400px] lg:h-[800px]' alt="" />
            <p>published: {blog?.currentTime} {blog?.currentDay}</p>
            <p className="text-3xl font-bold mt-8 mb-2">{blog?.title}</p>
            <h1 className=" mb-8">{blog?.category}</h1>
            <p >{blog?.shortDescription}</p>
            <p className="my-8">{blog?.LongDescription}</p>
        </div>
    );
};

export default BlogDetails;