import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Blogs from "./Blogs";

const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState(null);
    const [filterData, setFilterData] = useState(null);



    // category search and input search
    const handleTitleSearch = (e) => {
        const inputCategory = e?.target?.value;
        const filterDatas = allBlogs?.filter(item => item.title.toLowerCase().includes(inputCategory.toLowerCase()));
        setFilterData(filterDatas)
    }

    const handleChange = (e) => {
        const inputCategory = e?.target?.value;
        const filterDatas = allBlogs?.filter(item => item.category == inputCategory);
        if (filterDatas.length == 0) {
            setFilterData('ther is no data');
        }
        else {
            setFilterData(filterDatas);
        }

    }



    useEffect(() => {
        axios.get('http://localhost:3000/allBlogs')
            .then(res => {
                setAllBlogs(res.data)
            })
    }, [])

    return (
        <div className="mb-12">
            <div className="container mx-auto form-control">
                <div className="flex flex-col md:flex-row mx-auto w-3/4 my-12">
                    <div className="flex justify-center">
                        <select onChange={handleChange} className="select select-bordered">
                            <option selected>All</option>
                            <option>Historical places</option>
                            <option>Ancient temples and religious sites</option>
                            <option>Historical site of war</option>
                            <option>Historic roads and bridges</option>
                        </select>
                    </div>
                    <div className="input-group justify-center">
                        <input onChange={handleTitleSearch} type="text" placeholder="Search…" className="input input-bordered w-3/4 " />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                    {!filterData?.length ? allBlogs?.map(blog => <Blogs key={blog._id} blog={blog}></Blogs>)
                        : filterData?.map(blog => <Blogs key={blog._id} blog={blog}></Blogs>)}
                </div>
            </div>

        </div>
    );
};

export default AllBlogs;