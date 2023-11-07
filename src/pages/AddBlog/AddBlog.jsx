import axios from "axios";

const AddBlog = () => {

    const handleBlogSubmit = (e) => {
        e.preventDefault();
        const currentTime = new Date().toLocaleTimeString();
        const currentDay = new Date().toLocaleDateString();
        const title = e.target.title.value;
        const imgUrl = e.target.imgUrl.value;
        const category = e.target.category.value;
        const shortDescription = e.target.shortDescription.value;
        const LongDescription = e.target.LongDescription.value;
        console.log(title, imgUrl, category, shortDescription, LongDescription);
        const blog = { currentTime, currentDay, title, imgUrl, category, shortDescription, LongDescription };

        axios.post('http://localhost:3000/addBlog', blog)
            .then(res => {
                if (res.data.acknowledged) {
                    e.target.reset()
                };
            })
    }

    return (
        <div className="min-h-screen bg-[#F3F3FE]">
            <div className=" container mx-auto  pt-12">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="card rounded-l-none w-3/4  bg-[#FFFFFF]">
                        <form onSubmit={handleBlogSubmit} className="card-body ">
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Title</p>
                                <input type="text" name="title" className=" w-full border-[1px] h-[40px] text-xl font-semibold px-4 outline-none rounded-md" id="" />
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Image url</p>
                                <input type="text" name="imgUrl" className=" w-full border-[1px] h-[40px] text-xl font-semibold px-4 outline-none rounded-md" id="" />
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl mb-7">Category</p>
                                <select name="category" className="select select-bordered">
                                    <option disabled selected>Pick category</option>
                                    <option>Historical places</option>
                                    <option>Ancient temples and religious sites</option>
                                    <option>Historical site of war</option>
                                    <option>Historic roads and bridges</option>
                                </select>
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl my-7">Short description</p>
                                <textarea rows='2' name="shortDescription" className="textarea textarea-bordered   w-full text-xl" placeholder="Short description"></textarea>
                            </div>
                            <div className="w-full ">
                                <p className="text-2xl my-7">Long description</p>
                                <textarea rows='5' name="LongDescription" className="textarea textarea-bordered   w-full text-xl" placeholder="Long description"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#18BD5B] text-white font-bold text-2xl">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;