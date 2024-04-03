import React from "react";
import Footer from "../sections/Footer";

const Activity = () => {
  return (
    <div className="bg-[#ecedf4]">
      <div className="bg-[#ecedf4]">
        <div className="w-100 font-serif">
          <div className="w-[500px] mx-auto h-[50px] px-4 py-3 bg-gradient-to-r from-[#F95A59] to-[#FF998D] fixed top-0 left-1/2 transform -translate-x-1/2 z-[100]">
            <div className="center items-center text-center text-white relative flex justify-center text-2xl">
              MyClub11
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ecedf4] p-0 m-0 box-border">
        <div className="bg-gradient-to-r from-[#F95A59] to-[#FF998D] flex items-center mt-10 text-lg text-white p-[1.32rem]">
          <div>
            <div>Activity</div>
            <div className="text-sm pb-0">
              Please remember to follow the event page
            </div>
            <div className="text-sm pb-0">
              We will launch user feedback activities from time to time
            </div>
          </div>
        </div>
        <div className="box-border mx-3 my-3">
          <div className="flex text-wrap justify-between">
            <div className="flex flex-col text-[#666] text-center items-center p-4">
              <div className="relative">
                <div className="bg-gradient-to-b from-[#FB6C5F] to-[#FCDCAB] rounded-md p-1 shadow-inner mb-1 w-[3.06666rem] h-[3.06667rem]">
                  <div className="bg-center  bg-[url('images/activityIcon1.png')] bg-no-repeat bg-contain w-[100%] h-full"></div>
                </div>
              </div>
              <div className=" text-center text-xs items-center overflow-clip">
                Activity Award
              </div>
            </div>

            <div className="flex flex-col text-[#666] text-center items-center p-4">
              <div className="relative">
                <div className="bg-gradient-to-b from-[#5CA6FF] to-[#A9E5FF] rounded-md p-1 shadow-inner mb-1 w-[3.06666rem] h-[3.06667rem]">
                  <div className="bg-center  bg-[url('images/activityIcon2.png')] bg-no-repeat bg-contain w-[100%] h-full"></div>
                </div>
              </div>
              <div className=" text-center text-xs items-center overflow-clip">
                Invitation bonus
              </div>
            </div>

            <div className="flex flex-col text-[#666] text-center items-center p-4">
              <div className="relative">
                <div className="bg-gradient-to-b from-[#F87700] to-[#FFCE22] rounded-md p-1 shadow-inner mb-1 w-[3.06666rem] h-[3.06667rem]">
                  <div className="bg-center  bg-[url('images/activityIcon3.png')] bg-no-repeat bg-contain w-[100%] h-full"></div>
                </div>
              </div>
              <div className=" text-center text-xs items-center overflow-clip">
                Betting rebate
              </div>
            </div>

            <div className="flex flex-col text-[#666] text-center items-center p-4">
              <div className="relative">
                <div className="bg-gradient-to-b from-[#15CEA2] to-[#B6FFE0] rounded-md p-1 shadow-inner mb-1 w-[3.06666rem] h-[3.06667rem]">
                  <div className="bg-center  bg-[url('images/activityIcon4.png')] bg-no-repeat bg-contain w-[100%] h-full"></div>
                </div>
              </div>
              <div className=" text-center text-xs items-center overflow-clip">
                Super Jackpot
              </div>
            </div>
          </div>

          <div className="flex justify-between  flex-wrap">
            <div
              style={{ width: `calc((100% - 0.24rem) / 2.05)` }}
              className={`overflow-hidden`}
            >
              <img src="/images/signInBanner-33f86d3f.png" />
              <div className="bg-white p-3">
                <div className="font-bold">Gift</div>
                <p className="text-xs">
                  Enter the redemption code to recieve gift rewards
                </p>
              </div>
            </div>

            <div
              style={{ width: `calc((100% - 0.24rem) / 2.05)` }}
              className={`overflow-hidden`}
            >
              <img src="/images/signInBanner-33f86d3f.png" />
              <div className="bg-white p-3">
                <div className="font-bold">Attandance bonus</div>
                <p className="text-xs">
                  The more consecutive days you sign in, the higher the reward
                  will be
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3">
          <div className={`overflow-hidden rounded-xl mb-4`}>
            <img src="/images/Banner_202403021314318bw3.png" />
            <div className="bg-white p-3">
              <div className="font-bold capitalize">new member first deposit bonus</div>
            </div>
          </div>
          <div className={`overflow-hidden rounded-xl mb-4`}>
            <img src="/images/Banner_2024020413014726oj.png" />
            <div className="bg-white p-3">
              <div className="font-bold capitalize">91CLUB Official Channel </div>
            </div>
          </div>
          <div className={`overflow-hidden rounded-xl mb-4`}>
            <img src="/images/Banner_20240327152703xq8d.jpg" />
            <div className="bg-white p-3">
              <div className="font-bold capitalize">Real-Time Rebate</div>
            </div>
          </div>
          <div className={`overflow-hidden rounded-xl mb-4`}>
            <img src="/images/Banner_20240327152710ihgy.jpg" />
            <div className="bg-white p-3">
              <div className="font-bold capitalize">Super Jackpot</div>
            </div>
          </div>
          <div className={`overflow-hidden rounded-xl mb-4`}>
            <img src="/images/Banner_20240131164605jo9h.jpg" />
            <div className="bg-white p-3">
              <div className="font-bold capitalize">Youtube Creative Video</div>
            </div>
          </div>
        </div>
        <dl style={{ height: "4rem" }} />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Activity;
