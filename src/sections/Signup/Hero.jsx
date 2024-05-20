import { useReducer, useState } from "react";
import "react-tabs/style/react-tabs.css";

import { FaUser } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { useFormik } from "formik";

import { FcOnlineSupport } from "react-icons/fc";
//import { useRegisterUserMutation } from "../../redux/api/user/userApiSlice";
import * as yup from "yup";

function Hero() {
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    setPassword: "",
    confirmPassword: "",
  });

  const initialValues = {
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit=(values)=>{

    axios.post('https://game.myclub11.com/wingo/register',values)
    .then(res =>{
      alert(res.data.message)
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
  // const reducer = (state, action) => ({
  //   ...state,
  //   [action.name]: action.value,
  // });
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const validationSchema = yup.object().shape({
  //   username: yup
  //     .string()
  //     .required("Username is required")
  //     .min(3, "Username must be at least 3 characters long")
  //     .max(20, "Username must be at most 20 characters long")
  //     .matches(
  //       /^[a-zA-Z0-9_]+$/,
  //       "Username can only contain letters, numbers, and underscores"
  //     ),
  //   email: yup
  //     .string()
  //     .required("Email is required")
  //     .email("Email must be a valid email address"),
  //   phone: yup
  //     .string()
  //     .min(10, "Phone number must be at least 10 digits")
  //     .max(15, "Phone number cannot exceed 15 digits")
  //     .required("Phone number is required"),
  //   setPassword: yup
  //     .string()
  //     .min(8, "Password must be at least 8 characters")
  //     .max(32, "Password cannot exceed 32 characters")
  //     .required("Password is required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("setPassword"), null], "Passwords must match"),
  // });

  // const validateForm = (event) => {
  //   event.preventDefault();
  //   console.log("Log Events: ",event)
  //   validationSchema
  //     .validate(state, { abortEarly: false })
  //     .then(() => {
  //       setErrors({
  //         username: "",
  //         email: "",
  //         phone: "",
  //         setPassword: "",
  //         confirmPassword: "",
  //       });
  //       // If validation succeeds, call your registration function
  //       // registerUser(state);
  //     })
  //     .catch((error) => {
  //       // Handle validation errors
  //       const newErrors = {};
  //       error.inner.forEach((err) => {
  //         newErrors[err.path] = err.message;
  //       });
  //       setErrors(newErrors);
  //     });
  //   };

  
  // const RegisterForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       username: '',
  //       phone: '',
  //       email: '',
  //       password: '',
  //     },
  //     validationSchema: validationSchema,
  //     onSubmit: async (values) => {
  //       const url = 'https://game.myclub11.com/wingo/register';
  
  //       try {
  //         const response = await axios.post(url, values, {
  //           headers: {
  //             'Content-Type': 'application/json',
  //           }
  //         });
  
  //         if (response.status === 200 || response.status === 201) {
  //           console.log('Registration successful:', response.data);
  //           // Handle successful registration
  //         } else {
  //           console.error('Unexpected response:', response);
  //         }
  //       } catch (error) {
  //         console.error('Error during registration:', error);
  //         // Handle error during registration
  //       }
  //     },
   //  });

    
// axios()
// .post("https://game.myclub11.com/wingo/register")
// .then((response)=>{
// console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// })

  
    
  return (
    <>
      <div className=" flex justify-center flex-col items-center gap-2 my-6 px-6 border-b-2 border-black pb-2">
        
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
