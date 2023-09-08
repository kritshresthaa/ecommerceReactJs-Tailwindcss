import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPersonAdd } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="max-w-[1240px] mt-4 mx-auto p-2">
      <nav className="flex justify-between items-center gap-4">
        <Link to="/" onClick={closeNav}>
          <h1 className="font-bold text-2xl cursor-pointer">Ecommerce</h1>
        </Link>
        <ul className="hidden md:flex gap-9 text-xs">
          <li className="cursor-pointer">
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact" onClick={closeNav}>
              Contact
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/seller" onClick={closeNav}>
              Sellers
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-200 bg-[#ffffff] ease-out duration-500 z-20"
              : "fixed left-[-100%] top-0 w-[80%] h-full border-r border-r-gray-200 bg-[#343434] ease-in duration-500 z-20"
          }
        >
          <ul className="p-4 uppercase text-xs">
            <li className="p-4 border-b border-gray-300 cursor-pointer">
              <Link to="/" onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-300 cursor-pointer">
              <Link to="/about" onClick={closeNav}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-gray-300 cursor-pointer">
              <Link to="/contact" onClick={closeNav}>
                Contact
              </Link>
            </li>
            <li className="p-4 border-b border-gray-300 cursor-pointer">
              <Link to="/seller" onClick={closeNav}>
                Sellers
              </Link>
            </li>
          </ul>
          <div className="flex gap-2 justify-center pl-1 text-xs">
            <Link to="/signup" onClick={closeNav}>
              <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5">
                <BsPersonAdd size={16} />
                Signup
              </button>
            </Link>
            <Link to="/cart" onClick={closeNav}>
              <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5">
                <AiOutlineShoppingCart size={16} /> Cart
              </button>
            </Link>
            <Link to="/login" onClick={closeNav}>
              <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5 ">
                <FiLogIn size={16} />
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="md:flex hidden gap-2 text-xs">
          <Link to="/signup">
            <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5">
              <BsPersonAdd size={16} />
              Signup
            </button>
          </Link>
          <Link to="/cart">
            <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5">
              <AiOutlineShoppingCart size={16} /> Cart (0)
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-black text-white rounded-md border 2 border-gray-600 p-[6px] hover:scale-105 duration-100 items-center ease-in flex gap-1.5 ">
              <FiLogIn size={16} />
              Login
            </button>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
