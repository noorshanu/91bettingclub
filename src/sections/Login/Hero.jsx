import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoPhonePortrait } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FcLock } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";

function Hero() {
  return (
    <>
      <Tabs className=" bg-[#ecedf4] mt-4">
        <TabList>
          <Tab>
            <div className=" text-center flex justify-center flex-col sm:flex-row gap-2">
              <IoPhonePortrait className=" text-2xl text-center" />
              <p className=" uppercase ">LOGIN With PHone</p>
            </div>
          </Tab>

          <Tab>
            <div className=" text-center flex justify-center flex-col sm:flex-row gap-4">
              <MdMail className=" text-2xl text-center" />

              <p className=" uppercase">login with email</p>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className=" my-6 px-4">
            <div className=" flex flex-col gap-2 my-4">
              <div className=" my-4 flex flex-col gap-2 ">
                <label
                  htmlFor="number"
                  className=" flex items-center gap-2 text-xl font-semibold"
                >
                  {" "}
                  <IoIosPhonePortrait className="text-xl font-semibold" /> Phone
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
                  <FaLock className="text-xl font-semibold" /> Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  className=" bg-white py-2 px-4 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className=" my-6 px-4">
            <div className=" flex flex-col gap-2 my-4">
              <div className=" my-4 flex flex-col gap-2 ">
                <label
                  htmlFor="email"
                  className=" flex items-center gap-2 text-xl font-semibold"
                >
                  {" "}
                  <MdMail className="text-xl font-semibold" /> Email
                </label>
                <input
                  type="email"
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
                  <FaLock className="text-xl font-semibold" /> Password
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  className=" bg-white py-2 px-4 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <div className=" flex flex-col gap-4 justify-center items-center py-6 ">
        <a href="/login" className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center">
          Login
        </a>
        <a
          href="/signup"
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          Register
        </a>
      </div>

      <div className=" flex justify-evenly items-center mt-6 pb-1">
        <div>
          <h1 className=" flex items-center gap-2 font-medium text-xl justify-center text-center flex-col uppercase">
            {" "}
            <FcLock className="text-xl" /> Forget Password
          </h1>
        </div>

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
