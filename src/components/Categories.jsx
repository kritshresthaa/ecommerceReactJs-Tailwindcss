// Categories.js
import React from "react";

const Categories = ({ productCategory, onClick }) => {
  return (
    <div
      className="md:w-[full] h-9 md:p-1 w-[80%] p-[10px] border-2 border-slate-600 cursor-pointer md:hover:scale-105 duration-100  rounded-md text-center flex justify-center items-center"
      onClick={() => onClick(productCategory)} // Call the onClick handler with the category
    >
      {productCategory}
    </div>
  );
};

export default Categories;
