import React, { useReducer } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoPhonePortrait } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FcLock } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";
import { useLoginUserMutation } from "../../redux/api/user/userApiSlice";

function Hero() {
  const [login] = useLoginUserMutation();

  const initialState = {
    username: "",
    password: "",
  };

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async () => {
    try {
      const data = login({
        username: state.username,
        password: state.password,
      });
      console.log(data);

      let result = await fetch("https://game.myclub11.com/wingo/login", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({
          identifier: data.username,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(typeof identifier, typeof password)
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
  

      console.log(await result.json());

    } catch (error) {
      // Handle validation errors
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      const res = await fetch("https://game.myclub11.com/wingo/logout/", {
        credentials: 'include',
      });

      console.log("res = ", await res.json());
    } catch (error) {
      console.log("ERROR in Logout ====");
      console.log(error);
    }
  };

  return (
    <>
      <Tabs className=" bg-[#ecedf4] mt-4">
        <TabList>
          <Tab>
            <div className="w-52 text-center flex justify-center flex-col sm:flex-row gap-2">
              <div className="flex flex-col items-center">
                <IoPhonePortrait className=" text-2xl text-center" />
                <p className=" uppercase ">LOGIN With Phone</p>
              </div>
            </div>
          </Tab>

          <Tab>
            <div className="w-52 text-center flex justify-center flex-col sm:flex-row gap-4">
              <div className="flex flex-col items-center">
                <MdMail className=" text-2xl text-center" />
                <p className=" uppercase">login with email</p>
              </div>
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
                  <IoIosPhonePortrait className="text-xl font-semibold" /> User
                  Name
                </label>
                <input
                  type="text"
                  name=""
                  id="username"
                  value={state.username}
                  onChange={(e) => dispatch({ username: e.target.value })}
                  className=" bg-white py-2 px-4 rounded-full shadow-lg"
                />
              </div>
              <div className=" my-4 flex flex-col gap-2 ">
                <label
                  htmlFor="password"
                  className=" flex items-center gap-2 text-xl font-semibold"
                >
                  <FaLock className="text-xl font-semibold" /> Password
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  value={state.password}
                  onChange={(e) => dispatch({ password: e.target.value })}
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
                  name="email"
                  id="email"
                  className=" bg-white py-2 px-4 rounded-full shadow-lg"
                  value={state.username}
                  onChange={(e) => dispatch({ username: e.target.value })}
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
                  name="password"
                  id="password"
                  className=" bg-white py-2 px-4 rounded-full shadow-lg"
                  value={state.password}
                  onChange={(e) => dispatch({ password: e.target.value })}
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <div className=" flex flex-col gap-4 justify-center items-center py-6 ">
        <button
          onClick={handleLogin}
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          Login
        </button>

        <button className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center">
          Register
        </button>

        <button
          onClick={handleLogOut}
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          Logout
        </button>
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
