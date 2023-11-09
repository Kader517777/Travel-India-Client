import Baner from "./Baner";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
    return (
        <div className=" container mx-auto">
            <Baner></Baner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>

        </div>
    );
};

export default Home;