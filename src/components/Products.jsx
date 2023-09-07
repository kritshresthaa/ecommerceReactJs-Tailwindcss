import React from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const Products = ({ products, categories }) => {
  return (
    <div className="max-w-[1240px] mt-4 mx-auto  flex justify-center items-center flex-col p-2">
      <div className="text-center">
        <h1 className="text-[2rem] font-semibold">Latest Products</h1>
      </div>
      <div className="my-2 mx-auto md:w-[768px] md:gap-3 px-[5px] mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col justify-center items-center"
          >
            <Categories category={category} />
          </div>
        ))}
      </div>

      <div className="  w-full text-center p-2 grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"
// flex
