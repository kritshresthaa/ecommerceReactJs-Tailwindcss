import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Outlet, Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" max-w-[768px] mt-4 p-2 mx-auto  text-center flex flex-col gap-3 justify-center items-center">
      <h1 className="text-[2rem] font-semibold">Login</h1>
      <div className="rounded px-2 py-2 md:px-[4rem] md:py-3 w-[70%] md:w-[50%] flex flex-col justify-start items-start gap-2">
        <form className="text-xs flex flex-col gap-3" action="">
          <div className="flex flex-col items-start gap-1">
            <label for="email">Email Address</label>
            <input
              className="border-2 p-2 rounded"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label for="password">Password</label>
            <input
              className="border-2 p-2 rounded "
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <p className="text-xs ">
          Create an account.
          <Link to="/signup">
            <span className="cursor-pointer text-cyan-600"> Click here</span>
          </Link>
        </p>
        <div className="flex justify-start  w-full ">
          <button className=" bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5 ">
            <FiLogIn size={16} />
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
