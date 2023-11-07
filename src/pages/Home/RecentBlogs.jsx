import RecentBlog from "../../component/RecentBlog";

const RecentBlogs = () => {
    return (
        <div className="my-12 ">
            <h1 className="mb-5 text-3xl font-bold">Recent Blogs</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <RecentBlog></RecentBlog>
                <RecentBlog></RecentBlog>
            </div>
        </div>
    );
};

export default RecentBlogs;