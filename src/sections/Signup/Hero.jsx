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
  const reducer = (state, action) => ({ ...state, [action.name]: action.value });
  const [state, dispatch] = useReducer(reducer, initialState);

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number cannot exceed 15 digits")
      .required("Phone number is required"),
    setPassword: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password cannot exceed 32 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("setPassword"), null], "Passwords must match"),
  });

  const validateForm = (event) => {
    event.preventDefault();
    validationSchema
      .validate(state, { abortEarly: false })
      .then(() => {
        setErrors({
          phone: "",
          setPassword: "",
          confirmPassword: "",
        });
        // If validation succeeds, call your registration function
        // registerUser(state);
      })
      .catch((error) => {
        // Handle validation errors
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      });
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
              htmlFor="phone"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoIosPhonePortrait className="text-2xl font-semibold" /> Phone
              number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={state.phone}
              onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
              required
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {errors.phone && <p className=" text-red-500">{errors.phone}</p>}
          </div>
          <div className=" my-4 flex flex-col gap-2">
            <label
              htmlFor="setPassword"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-2xl font-semibold" /> Set a password
            </label>
            <input
              type="password"
              name="setPassword"
              id="setPassword"
              value={state.setPassword}
              onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
              required
              minLength="8"
              maxLength="32"
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {errors.setPassword && <p className=" text-red-500">{errors.setPassword}</p>}
          </div>
          <div className=" my-4 flex flex-col gap-2">
            <label
              htmlFor="confirmPassword"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-2xl font-semibold" /> Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={state.confirmPassword}
              onChange={(e) => dispatch({ name: e.target.name, value: e.target.value })}
              required
              minLength="8"
              maxLength="32"
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {errors.confirmPassword && <p className=" text-red-500">{errors.confirmPassword}</p>}
          </div>
        </div>
        <button
          type="submit"
          onClick={validateForm}
          className=" mt-6 bg-blue-500 hover:bg-blue-600 transition duration-500 rounded-md text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </div>
    </>
  );
}

export default Hero;