import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { userContext } from "../../Provider/AuthContext";

const Update = () => {
    const { user } = useContext(userContext);
    const id = useParams();
    const _id = id.id;
    const [getData, setGetData] = useState(null);

    useEffect(() => {
        axios.get(`https://travel-india-server.vercel.app/allBlogs/${_id}`)
            .then(res => {
                const [data] = res.data;
                setGetData(data);
            })
    }, [])

    const handleBlogUpdate = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleTimeString();
        const currentDay = new Date().toLocaleDateString();
        const title = e.target.title.value;
        const imgUrl = e.target.imgUrl.value;
        const category = e.target.category.value;
        const shortDescription = e.target.shortDescription.value;
        const LongDescription = e.target.LongDescription.value;
        const blog = { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription, writer: user.email };

        axios.put(`https://travel-india-server.vercel.app/update/${_id}`, blog)
            .then(res => {
                if (res.data.acknowledged) {
                    e.target.reset();
                    toast.success('Successfuly updated your blogs');
                };
            })

    }

    return (
        <div className="min-h-screen bg-[#F3F3FE]">
            <div className=" container mx-auto  pt-12">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="card rounded-l-none w-3/4  bg-[#FFFFFF]">
                        <form onSubmit={handleBlogUpdate} className="card-body ">
                            <h1 className="text-3xl flex justify-center items-center font-bold">Update your Blog</h1>
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Title</p>
                                <input type="text" defaultValue={getData?.title} name="title" className=" w-full border-[1px] h-[40px] text-xl font-semibold px-4 outline-none rounded-md" id="" />
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Image url</p>
                                <input type="text" defaultValue={getData?.imgUrl} name="imgUrl" className=" w-full border-[1px] h-[40px] text-xl font-semibold px-4 outline-none rounded-md" id="" />
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Category</p>
                                <select name="category" defaultValue={getData?.category} className="select select-bordered">
                                    <option disabled selected >Pick category</option>
                                    <option>Historical places</option>
                                    <option>Ancient temples and religious sites</option>
                                    <option>Historical site of war</option>
                                    <option>Historic roads and bridges</option>
                                </select>
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl my-7">Short description</p>
                                <textarea rows='2' defaultValue={getData?.shortDescription} name="shortDescription" className="textarea textarea-bordered   w-full text-xl" placeholder="Short description"></textarea>
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl my-7">Long description</p>
                                <textarea rows='5' defaultValue={getData?.LongDescription} name="LongDescription" className="textarea textarea-bordered   w-full text-xl" placeholder="Long description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#18BD5B] text-white font-bold text-2xl">UPDAtE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Update;