import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function Navbar() {
  const goBack = () => {
    window.history.back();
  };
  return (
    <section>
      <div className=" bg-gradient-to-r from-[#F95A59] to-[#FF998D] mx-auto h-auto px-4 py-3 ">
        <div className=" flex justify-between items-center">
          <div onClick={goBack} className=" cursor-pointer">
            <IoIosArrowBack className=" text-white text-2xl" />
          </div>

          <div>
            <h1 className=" text-white text-2xl">91-club</h1>
          </div>

          <div className=" text-white">social media</div>
        </div>
        <div>
          <h1 className=" text-white text-3xl">Login</h1>

          <p className=" text-white py-3 text-base">
            {" "}
            Please log in with your phone number or email
          </p>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
