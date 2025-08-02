import { useEffect, useState } from "react";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: "This is a stylish jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/500/500?random=1",
            altText: "Stylish Jacket 1"
        },
        {
            url: "https://picsum.photos/500/500?random=2",
            altText: "Stylish Jacket 2"
        }
    ]

}


const ProductDetail = () => {
    const [mainImg, setImg] = useState("");
    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setImg(selectedProduct.images[0].url)
        }
    }, [selectedProduct]);
    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/** left thumbnail */}
                    <div
                        className="hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                                    ${mainImg === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setImg(image.url)} />

                        ))}


                    </div>

                    {/** main content */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img className="w-full h-auto object-cover rounded-lg"
                                src={mainImg} alt="main product" />

                        </div>

                    </div>

                    {/** mobile thumbnail */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4  ">
                        {selectedProduct.images.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer border" />

                        ))}



                    </div>

                    {/** right thumnail */}
                    <div className="md:w-1/2 md:ml-10" >
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2" >
                            {selectedProduct.name}

                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice && `${selectedProduct.price}`}

                        </p>
                        <p className="text-lg text-gray-500 mb-2">
                            $ {selectedProduct.price}
                        </p>
                        <p className="text-gray-600 mb-4 ">{selectedProduct.description}</p>

                        <div className="mb-4">
                            <p className="text-gray-700"> Color : </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.colors.map((color) => (
                                    <button key={color} className="w-8 h-8 rounded-full border"
                                        style={{
                                            backgroundColor: color.toLocaleLowerCase(),
                                            filter: "brightness(0.5)",
                                        }}>

                                    </button>
                                ))}

                            </div>

                        </div>
                        <div className="mb-4">
                            <p className="text-gray-700"> Size : </p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button key={size} className="px-4 py-2 rounded border">
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">Quantity : </p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg"> - </button>
                                <span className="text-lg">1</span>
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg"> + </button>
                            </div>

                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">ADD TO CART</button>

                    </div>

                </div>

            </div>

        </div>
    )

}
export default ProductDetail;