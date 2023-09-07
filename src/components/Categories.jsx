import React from "react";

const Categories = ({ category }) => {
  return (
    <div className="md:w-[full] h-9  md:p-1 w-[80%] p-[1px] border-2 border-slate-600 cursor-pointer md:hover:scale-105 duration-100  rounded-md text-center flex justify-center  items-center">
      {category.name}
    </div>
  );
};

export default Categories;
