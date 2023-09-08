import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Buy = ({ products }) => {
  const { productId } = useParams();
  console.log(productId);

  const [product, setProduct] = useState(null);

  // Fetch product details based on productId
  useEffect(() => {
    // Simulate fetching product details based on productId
    const fetchedProduct = products.find((p) => p.id === parseInt(productId));
    setProduct(fetchedProduct);
  }, [productId, products]);
  // ...
  if (!product) {
    return <div className="font-bold">Loading...</div>;
  }

  const handleBuyNow = () => {
    // Implement logic for the "Buy Now" action, e.g., navigate to a checkout page
    // For this example, we'll simulate a simple alert
    alert(`Buying ${product.title}!`);
  };

  return (
    <div className="max-w-[1240px] mx-auto p-2">
      <div className=" flex flex-col mt-4 justify-center items-center ">
        <h1 className=" text-2xl font-bold my-4">{product.category}</h1>

        <img
          className="rounded-md max-h-[400px]"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="border-2 p-5 rounded-md mt-5 w-628px :w-[768px] m-auto flex justify-center flex-col gap-2">
        <div className="flex justify-between">
          <h1 className=" text-xl md:text-2xl font-bold ">{product.title}</h1>
          <p className="text-xl md:text-2xl font-semibold">
            Rs. {product.price}
          </p>
        </div>
        <p className="text-basis mt-">{product.description}</p>
        <div className="flex justify-around gap-4">
          <button className="bg-[#131414] text-white text-xs rounded-md p-2 hover:bg-slate-800">
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-[#131414] text-white text-xs rounded-md p-2 hover:bg-slate-800"
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4"></div>
    </div>
  );
};
export default Buy;
