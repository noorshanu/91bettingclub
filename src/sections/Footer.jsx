import React from "react";
import { IoHome } from "react-icons/io5";
import { RxActivityLog } from "react-icons/rx";
import bgImg from "../../public/images/footer-bg.png";
import { FaWallet } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

function Footer() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" fixed bottom-0 left-0 right-0 mx-auto rounded-t-[40px] w-full sm:w-[500px] pt-3  "
    >
      <div className=" flex justify-center items-center gap-10 px-4">
        <div className=" flex justify-center flex-col text-center">
          <a href="/" className=" text-center ">
            {" "}
            <IoHome className=" text-center text-xl mx-auto text-[#fd5847] hover:text-black" />
          

          <h2 className=" text-center font-semibold text-base hover:text-[#fd5847]">Home</h2>
          </a>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/activity" className=" text-center ">
            {" "}
            <RxActivityLog className=" text-center text-xl mx-auto text-[#fd5847] hover:text-black" />
        

          <h2 className=" text-center font-semibold text-base hover:text-[#fd5847]">Activity</h2>  </a>
        </div>

        <div className=" flex justify-center items-center flex-col gap-3 text-center relative">
          <a href="/promotion" className=" text-center text-3xl">
            <svg
              data-v-67fe8f9c=""
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="39"
              fill="none"
              viewBox="0 0 57 49"
              className={`z-20 relative  w-[2.5rem] h-[2.5rem]`}
            >
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M8.939 1.501A4 4 0 0 1 12.062 0h32.155a4 4 0 0 1 3.124 1.501l7.738 9.673c.427.533.749 1.12.968 1.735H.233a6 6 0 0 1 .967-1.735zM0 16.091h56.28a6 6 0 0 1-1.277 2.673l-23.79 28.549a4 4 0 0 1-6.146 0l-23.79-28.55A6 6 0 0 1 0 16.092m20.556 5.936 7.195 10.102a.5.5 0 0 0 .816-.002l7.118-10.093a2.44 2.44 0 0 1 4.435 1.406v.2h-.223c-.326 0-.782.248-1.304.93-.506.663-6.466 8.724-9.651 13.035a.975.975 0 0 1-1.563.007L17.32 24.26s-.394-.62-1.06-.62h-.14v-.195a2.445 2.445 0 0 1 4.436-1.418"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="data-v-67fe8f9c z-10 absolute -top-[15%] left-[9px] right-0 rounded-full  w-auto h-16 bg-white"></div>
          <h2 className=" text-center font-semibold text-base hover:text-[#fd5847]">Promotion</h2>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/wallet" className=" text-center text-4xl">
            {" "}
            <FaWallet className="text-center text-xl mx-auto text-[#fd5847] hover:text-black" />
        

          <h2 className=" text-center font-semibold text-base hover:text-[#fd5847]">Wallet</h2>  </a>
        </div>

        <div className=" flex justify-center flex-col text-center">
          <a href="/main" className=" text-center text-4xl">
            {" "}
            <MdManageAccounts className=" text-center text-2xl mx-auto text-[#fd5847] hover:text-black" />
        

          <h2 className=" text-center font-semibold text-base hover:text-[#fd5847]">Account</h2>  </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
