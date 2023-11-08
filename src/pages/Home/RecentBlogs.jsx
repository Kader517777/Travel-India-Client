import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecentBlog from "../../component/RecentBlog";

const RecentBlogs = () => {

    const [allBlogs, setAllBlogs] = useState(null);

    const sortedDates = allBlogs?.sort((p1, p2) => (new Date(p2.currentDay) - new Date(p1.currentDay)));
    useEffect(() => {
        axios.get('http://localhost:3000/allBlogs')
            .then(res => {
                setAllBlogs(res.data)
            })
    }, [])

    return (
        <div className="my-12 ">
            <h1 className="mb-5 text-3xl font-bold">Recent Blogs</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                {sortedDates?.slice(1, 7).map(blog => <RecentBlog key={blog._id} blog={blog}></RecentBlog>)}
            </div>
        </div>
    );
};

export default RecentBlogs;