import React, { useReducer, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoPhonePortrait } from "react-icons/io5";
import { IoPhonePortrait } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FcLock, FcOnlineSupport } from "react-icons/fc";
import { useLoginUserMutation } from "../../redux/api/user/userApiSlice";
import Cookies from "js-cookie";

function Hero() {
  const [login] = useLoginUserMutation();
  const [loginStatus, setLoginStatus] = useState(null);

const initialState = {
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Hero() {
  const [login] = useLoginUserMutation();
  const [loginStatus, setLoginStatus] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async () => {
    try {
      const { username, password } = state;
      if (!username || !password) throw new Error("Username and password must be provided");

      const payload = { identifier: username, password };

      const result = await fetch("https://game.myclub11.com/wingo/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });


      if (!result.ok) {
        const errorData = await result.json();
        console.error("Error response from server:", errorData);
        throw new Error(
          `HTTP error! status: ${result.status}, message: ${errorData.message}`
        );
        throw new Error(`HTTP error! status: ${result.status}, message: ${errorData.message}`);
      }

      await result.json();

      const resultData = await result.json();
      console.log("Successful login:", resultData);
      setLoginStatus("success");

      // // Unable to get the token.  - Err -
      // const token = resultData.csrftoken;
      // Cookies.set("token", csrftoken, { expires: 1 }); // Store token in a cookie for 1 days

      // // Log the cookie
      // const loggedInToken = Cookies.get("csrftoken");
      // console.log("Logged in token:", loggedInToken);

      // return token;
    } catch (error) {
      setLoginStatus("error");
    }
  };


  const handleLogOut = async () => {
    try {
      await fetch("https://game.myclub11.com/wingo/logout", { credentials: "include" });
      setLoginStatus(null);
      dispatch({ type: "reset" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <Tabs className="bg-[#ecedf4] mt-4">
        <TabList className="flex">
          <Tab>
            <div className="w-42 text-center flex justify-center flex-col sm:flex-row gap-2">
              <div className="flex flex-col items-center">
                <IoPhonePortrait className="text-2xl text-center" />
                <p className="uppercase">Login with Phone</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="w-42 text-center flex justify-center flex-col sm:flex-row gap-4">
              <div className="flex flex-col items-center">
                <MdMail className="text-2xl text-center" />
                <p className="uppercase">Login with Email</p>
              </div>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <LoginForm state={state} dispatch={dispatch} />
          <div className="my-6 px-4">
            <div className="flex flex-col gap-2 my-4">
              <div className="my-4 flex flex-col gap-2">
                <label
                  htmlFor="username"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  User Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={state.username}
                  onChange={(e) =>
                    dispatch({ type: "setUsername", payload: e.target.value })
                  }
                  className="bg-white py-2 px-4 rounded-full shadow-lg"
                />
              </div>
              <div className="my-4 flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="flex items-center gap-2 text-xl font-semibold"
                >
                  <FaLock className="text-xl font-semibold" /> Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({ type: "setPassword", payload: e.target.value })
                  }
                  className="bg-white py-2 px-4 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <LoginForm state={state} dispatch={dispatch} isEmail />
        </TabPanel>
      </Tabs>

      <div className="flex flex-col gap-4 justify-center items-center py-6">
        <button
          onClick={handleLogin}
          className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          {loginStatus === "success" ? "Logged In" : "Login"}
        </button>
        <button className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center">
          Register
        </button>
        {loginStatus === "success" && (
          <button
            onClick={handleLogOut}
            className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
          >
            Logout
          </button>
        )}
      </div>

      <div className="flex justify-evenly items-center mt-6 pb-1">
        <InfoBlock icon={<FcLock className="text-xl" />} text="Forget Password" />
        <InfoBlock icon={<FcOnlineSupport className="text-xl" />} text="Support" />
      </div>

      {loginStatus === "error" && (
        <div className="text-center text-red-600 font-semibold mt-4">
          Failed to login. Please try again.
        </div>
      )}
    </>
  );
}

function LoginForm({ state, dispatch, isEmail = false }) {
  return (
    <div className="my-6 px-4">
      <div className="flex flex-col gap-2 my-4">
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="username" className="flex items-center gap-2 text-xl font-semibold">
            {isEmail ? (
              <>
                <MdMail className="text-xl font-semibold" /> Email
              </>
            ) : (
              <>User Name</>
            )}
          </label>
          <input
            type={isEmail ? "email" : "text"}
            id="username"
            value={state.username}
            onChange={(e) => dispatch({ type: "setUsername", payload: e.target.value })}
            className="bg-white py-2 px-4 rounded-full shadow-lg"
          />
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2 text-xl font-semibold">
            <FaLock className="text-xl font-semibold" /> Password
          </label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) => dispatch({ type: "setPassword", payload: e.target.value })}
            className="bg-white py-2 px-4 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ icon, text }) {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-medium text-xl justify-center text-center flex-col uppercase">
        {icon} {text}
      </h1>
    </div>
  );
}

export default Hero;
