import React from "react";

function ServiceCenter() {
  return (
    <section className="bg-white rounded-xl mx-4 py-4 px-6  border my-4">
      <div className=" grid grid-cols-3 items-center justify-center gap-6">
        <div>
          <img
            src="images/setting.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700">Settings</p>
        </div>

        <div>
          <img
            src="images/faq.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700">Feedback</p>
        </div>


        <div>
          <img
            src="images/notify.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700">Notification</p>
        </div>


        <div>
          <img
            src="images/cust.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700">Support</p>
        </div>



        <div>
          <img
            src="images/guide.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700"> Guide </p>
        </div>



        <div>
          <img
            src="images/about.png"
            alt=""
            className="pb-2 h-[38px] w-auto mx-auto"
          />

          <p className=" text-center font-semibold text-gray-700">About Us</p>
        </div>
      </div>
    </section>
  );
}

export default ServiceCenter;
