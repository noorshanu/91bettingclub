import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FcLock } from "react-icons/fc";

import { FcOnlineSupport } from "react-icons/fc";

function Hero() {
  return (
    <>
      <div className=" flex justify-center flex-col items-center gap-2 my-6 px-6 border-b-2 border-black pb-2">
        <IoIosPhonePortrait className=" text-5xl text-center" />
        <p className=" text-xl">Register your phone</p>
      </div>
      <div className=" my-6 px-4">
        <div className=" flex flex-col gap-2 my-4">
          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="number"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoIosPhonePortrait className="text-2xl font-semibold" /> Phone
              number
            </label>
            <input
              type="number"
              name=""
              id=""
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
          </div>
          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <FaLock className="text-xl font-semibold" /> Set Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <FaLock className="text-xl font-semibold" /> Confirm Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="password"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoMailOpenOutline className="text-xl font-semibold" /> Invite
              code
            </label>
            <input
              type="text"
              name=""
              id=""
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
          </div>
          <div className=" flex gap-2 items-center">
            <input type="checkbox" className=" bg-white rounded-full py-2" />

              <p>I have read and agree  【Privacy Agreement】</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 justify-center items-center py-6 ">
        <a
          href="/signup"
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          Register
        </a>
        <button className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px]">
          <span className=" font-light">I have an account</span> Login
        </button>
      </div>

      <div className=" flex justify-evenly items-center mt-6 pb-1">
      

        <div>
          <h1 className=" flex items-center gap-2 font-medium text-xl justify-center text-center flex-col uppercase">
            {" "}
            <FcOnlineSupport className="text-xl" /> Support
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
