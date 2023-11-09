
import Baner from "./Baner";
import Footer from "./Footer";
import IndependenceDay from "./IndependenceDay";
import Newsletter from "./Newsletter";
import RecentBlogs from "./RecentBlogs";
import TravelInBus from "./TravelInBus";

const Home = () => {

    return (
        <div>
            <div className="container mx-auto">
                <Baner></Baner>
                <RecentBlogs></RecentBlogs>
                <Newsletter></Newsletter>
                <TravelInBus></TravelInBus>
                <IndependenceDay></IndependenceDay>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;