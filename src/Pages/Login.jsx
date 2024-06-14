
import Navbar from "../sections/Login/Navbar";
import Hero from "../sections/Login/Hero";
import Footer from "../sections/Footer";

function Login() {
  return (
    <>
      <div className=" bg-[#ecedf4]   ">
        <div>
          <Navbar />
        </div>
      </div>
      <div className=" bg-[#ecedf4] px-4 py-4">
        <Hero />
      </div>
    </>
  );
}

export default Login;
