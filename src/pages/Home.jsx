import React from "react";
import Products from "../components/Products";
const Home = ({ products, categories }) => {
  return (
    <>
      <div className=" max-w-[1240px] mt-4 p-2 mx-auto ">
        <div className="w-full md:h-[85vh]  relative">
          <img
            className="rounded-md md:h-[100%]"
            src="https://images.unsplash.com/photo-1618078224976-654407c4e560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1836&q=80"
            alt=""
          />
          <div className=" text-white px-5 md:left-11 absolute top-[15%] md:top-[45%]  flex flex-col gap-5">
            <h1 className="text-3xl font-bold">New Season Arrivals</h1>
            <p className="md:text-xl  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              consequuntur?
            </p>
          </div>
        </div>
      </div>
      <Products products={products} categories={categories} />
    </>
  );
};

export default Home;
