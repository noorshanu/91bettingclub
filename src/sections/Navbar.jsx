import React from "react";
import { FaBell } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";

function Navbar() {
  return (
    <div className=" bg-white  mx-auto h-[50px] px-4 py-2 ">
      <div className=" flex justify-between items-center">
        <div>
         <a href="/">
         <img src="images/logo.png" alt="" className=" h-[40px]" />
         </a>
        </div>

        <div className=" flex justify-center gap-4 items-center ">
         <a href="/"> <FaBell className=" text-2xl text-[#fd5847] hover:text-black" /></a>
         <a href="/"> <FcAndroidOs className="text-3xl hover:text-black" /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
