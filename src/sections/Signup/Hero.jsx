import { useReducer, useState } from "react";
import "react-tabs/style/react-tabs.css";

import { FaUser } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useFormik } from "formik";




function Hero() {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    referalNumber: "",
    setPassword: "",
    confirmPassword: "",
  });

  const initialValues = {
    username: "",
    email: "",
    phone_number: "",
    referalNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit=(values)=>{

    axios.post('https://game.myclub11.com/wingo/register',values)
    .then(res =>{
      console.log(res.data.message)
      setShowThankYou(true);
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const validation=(values)=>{
    const errors={};

    if(!values.username){
      errors.username ="Username is required"
    } else if(! /^[a-zA-Z0-9_]{3,20}/i.test(values.username)){
      errors.username= "Invalid Username"
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone_number) {
      errors.phone_number = "Required";
    } else if (!/^[0-9]\d{11}$/i.test(values.phone_number)) {
      errors.phone_number = "Invalid phone number";
    }

    // Validation for Referal number

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must contain 8 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword.length < 8) {
      errors.confirmPassword = "Minimum length is 8 characters";
    } else if (!(values.password === values.confirmPassword)) {
      errors.confirmPassword = "Password does not match";
    }

    return errors;  
  };

  const formik = useFormik({initialValues, onSubmit, validate: validation})
  
    
  return (
    <>
      <div className=" flex justify-center flex-col items-center gap-2 my-6 px-6 border-b-2 border-black pb-2">
      {showThankYou && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-xl z-50">
          <h2 className="text-2xl font-bold mb-4">Thank You for Registering!</h2>
          <p className="mb-4">You are successfully registred.</p>
          <button className="mt-2 px-4 py-2 bg-white text-purple-600 font-semibold rounded hover:bg-gray-300" onClick={() => setShowThankYou(false)}>Close</button>
        </div>
      )}
        <IoIosPhonePortrait className=" text-5xl text-center" />
        <p className=" text-xl">Register your phone</p>
      </div>
      <div className=" my-6 px-4">
      <form onSubmit={formik.handleSubmit}>
        <div className=" flex flex-col gap-2 my-4">
          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="name"
              id="username"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <FaUser className="text-2xl font-semibold" /> User Name
            </label>
           
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={formik.values.username}
              onChange={formik.handleChange}

              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.username && (
              <p className=" text-red-500">{errors.username}</p>
            )} */}
             {formik.errors.username && formik.touched.username && formik.errors.username}

          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="email"
              id="email"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <MdEmail className="text-2xl font-semibold" /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.email && (
              <p className=" text-red-500">{errors.email}</p>
            )} */}
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="tel"
              id="phone_number"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoIosPhonePortrait className="text-2xl font-semibold" /> Phone
              number
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              placeholder="Phone number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              required
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.phone_number && <p className=" text-red-500">{errors.phone_number}</p>} */}
            {formik.errors.phone_number && formik.touched.phone_number && formik.errors.phone_number}

          </div>

          <div className=" my-4 flex flex-col gap-2 ">
            <label
              htmlFor="tel"
              id="phone_number"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              {" "}
              <IoIosPhonePortrait className="text-2xl font-semibold" /> Referal Number
            </label>
            <input
              type="text"
              name="referalNumber"
              id="referalNumber"
              placeholder="Enter referal code"
              value={formik.values.referalNumber}
              onChange={formik.handleChange}
              // required
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.phone_number && <p className=" text-red-500">{errors.phone_number}</p>} */}
            {formik.errors.referalNumber && formik.touched.referalNumber && formik.errors.referalNumber}

          </div>

          <div className=" my-4 flex flex-col gap-2">
            <label
              htmlFor="password"
              id="passwords"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-2xl font-semibold" /> Set a password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
              minLength="8"
              maxLength="32"
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.setPassword && (
              <p className=" text-red-500">{errors.setPassword}</p>
            )} */}
           {formik.errors.password && formik.touched.password && formik.errors.password}
          </div>

          <div className=" my-4 flex flex-col gap-2">
            <label
              htmlFor="password"
              id="confirmPassword"
              className=" flex items-center gap-2 text-xl font-semibold"
            >
              <FaLock className="text-2xl font-semibold" /> Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              required
              minLength="8"
              maxLength="32"
              className=" bg-white rounded-md p-2 border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-500"
            />
            {/* {errors.confirmPassword && (
              <p className=" text-red-500">{errors.confirmPassword}</p>
            )} */}
            {formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}
          </div>
        </div>

        <button
          type="submit"
          // onClick={RegisterForm}
          className=" mt-6 bg-blue-500 hover:bg-blue-600 transition duration-500 rounded-md text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline">
          Register
        </button>
        </form>
      </div>
    </>
  );
}

export default Hero;
