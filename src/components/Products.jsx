import React, { useState } from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Create a Set to store unique categories
  const uniqueCategories = new Set();

  // Iterate through products to add categories to the Set
  products.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  // Filter products by selected category or show all products if no category is selected
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1240px] mx-auto  flex justify-center items-center flex-col p-2">
      <div className="text-center">
        <h1 className="text-[2rem] font-semibold">Latest Products</h1>
      </div>
      <div className="my-2 mx-auto md:w-[768px] md:gap-3 px-[5px] mt-2 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
        {/* Map through unique categories */}
        {[...uniqueCategories].map((category, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Categories
              productCategory={category}
              onClick={() => handleCategoryClick(category)}
            />
          </div>
        ))}
      </div>

      <div className="w-full text-center p-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
