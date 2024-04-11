import { useReducer, useState } from "react";
import "react-tabs/style/react-tabs.css";

import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

import { FcOnlineSupport } from "react-icons/fc";
import { useRegisterUserMutation } from "../../redux/api/user/userApiSlice";
import * as yup from "yup";

function Hero() {
  const [errors, setErrors] = useState({
    phone: "",
    setPassword: "",
    confirmPassword: "",
  });

  const initialState = {
    phone: "",
    setPassword: "",
    confirmPassword: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [registerUser] = useRegisterUserMutation();

  const validationSchema = yup.object().shape({
    phone: yup.string().required("Phone number is required"),
    setPassword: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("setPassword"), null], "Passwords must match"),
  });

  // Validate form data
  const validateForm = async () => {
    try {
      await validationSchema.validate(state, { abortEarly: false });
      setErrors({
        phone: "",
        setPassword: "",
        confirmPassword: "",
      });
      // If validation succeeds, call your registration function
      // registerUser(state);
    } catch (error) {
      // Handle validation errors
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

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
              number hello
            </label>
            <input
              type="number"
              name=""
              id=""
              value={state.phone}
              onChange={(e) => dispatch({ phone: e.target.value })}
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="set-password"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-xl font-semibold" /> Set Password
            </label>
            <input
              type="password"
              name=""
              id="set-password"
              value={state.setPassword}
              onChange={(e) => dispatch({ setPassword: e.target.value })}
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
            {errors.setPassword && (
              <p className="text-red-500">{errors.setPassword}</p>
            )}
          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="confirm-password"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-xl font-semibold" /> Confirm Password
            </label>
            <input
              type="password"
              name=""
              id="confirm-password"
              value={state.confirmPassword}
              onChange={(e) => dispatch({ confirmPassword: e.target.value })}
              className=" bg-white py-2 px-4 rounded-full shadow-lg"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
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

            <p>I have read and agree 【Privacy Agreement】</p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 justify-center items-center py-6 ">
        <a
          onClick={validateForm}
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          Register
        </a>
        <a
          href="/login"
          className=" bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
        >
          <span className=" font-light">I have an account</span> Login
        </a>
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
