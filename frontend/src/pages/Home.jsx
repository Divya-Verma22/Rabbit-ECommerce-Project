import { IoMdMagnet } from "react-icons/io";
import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import Newarrives from "../components/Products/Newarrives";
import ProductDetail from "../components/Products/ProductDetail";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import Features from "../components/Products/Features";

const productplaceholder = [
    {
        _id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        image: [{ url: "https://picsum.photos/200/300?random=5" }]
    },
    {
        _id: 2,
        name: "Denim Jacket",
        price: 79.99,
        image: [{ url: "https://picsum.photos/200/300?random=6"}]
    },
    {
        _id: 3,
        name: "Casual Hoodie",
        price: 49.99,
        image: [{ url: "https://picsum.photos/200/300?random=7"}]
    },
    {
        _id: 4,
        name: "Black Leather Jacket",
        price: 119.99,
        image: [{ url: "https://picsum.photos/200/300?random=8" }]
    },
    {
        _id: 5,
        name: "Classic White T-Shirt",
        price: 29.99,
        image: [{ url: "https://picsum.photos/200/300?random=9" }]
    },
    {
        _id: 6,
        name: "Denim Jacket",
        price: 79.99,
        image: [{ url: "https://picsum.photos/200/300?random=27"}]
    },
    {
        _id: 7,
        name: "Casual Hoodie",
        price: 49.99,
        image: [{ url: "https://picsum.photos/200/300?random=11"}]
    },
    {
        _id: 8,
        name: "Black Leather Jacket",
        price: 119.99,
        image: [{ url: "https://picsum.photos/200/300?random=78" }]
    },
    
    

]

const Home = () =>{
    return <div>
        <Hero/>
        <GenderCollection/>
        <Newarrives/>
        {/** best seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetail/>
        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">
                Top wears for women
            </h2>
            <ProductGrid Products={productplaceholder}/>
            <div>
                  <FeaturedCollection/>
                  <Features/>


            </div>
          
        </div>
    </div>
}
export default Home;