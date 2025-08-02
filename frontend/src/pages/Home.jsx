import { IoMdMagnet } from "react-icons/io";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import Newarrives from "../components/Products/Newarrives";
import ProductDetail from "../components/Products/ProductDetail";

const Home = () =>{
    return <div>
        <Hero/>
        <GenderCollection/>
        <Newarrives/>
        {/** best seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetail/>
    </div>
}
export default Home;