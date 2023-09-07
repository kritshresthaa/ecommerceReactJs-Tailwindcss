import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border-2 border-stone-150 rounded-md  drop-shadow- p-2 w-[full%] flex justify-center items-center flex-col gap-1">
      <div className="flex flex-col gap-1 justify-center items-center ">
        <img
          className="rounded-md max-h-[250px]"
          src={product.image}
          alt={product.image}
        />
        <h1 className="font-bold mt-1 text-xl">{product.title}</h1>

        <p className="text-basis">Rs. {product.price}</p>
      </div>
      <div className="flex gap-4">
        <button className=" bg-[#131414] text-white text-xs rounded-md p-2">
          Buy now
        </button>
        <button className=" bg-[#131414] text-white text-xs rounded-md p-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
