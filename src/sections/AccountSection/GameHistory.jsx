import React from "react";

function GameHistory() {
  return (
    <section className=" mx-4 py-4 px-2">
      <div className=" grid grid-cols-2 gap-6">
        <div className=" flex items-center gap-2 bg-white border-2  shadow-lg  rounded-lg p-2 ">
          <img src="images/gamehis.png" alt="" className=" w-auto h-[52px]" />
          <div>
            <p className=" text-base font-semibold">Game history</p>
            <p className=" text-xs font-medium">My game history</p>
          </div>
        </div>

        <div className=" flex items-center gap-2 bg-white border-2  shadow-lg  rounded-lg p-2 ">
          <img src="images/trans.png" alt="" className=" w-auto h-[52px]" />
          <div>
            <p className=" text-base font-semibold">Transaction</p>
            <p className=" text-xs font-medium">My transaction history</p>
          </div>
        </div>



        <div className=" flex items-center gap-2 bg-white border-2  shadow-lg  rounded-lg p-2 ">
          <img src="images/depo.png" alt="" className=" w-auto h-[52px]" />
          <div>
            <p className=" text-base font-semibold">Deposit</p>
            <p className=" text-xs font-medium">My deposit history</p>
          </div>
        </div>


        <div className=" flex items-center gap-2 bg-white border-2  shadow-lg  rounded-lg p-2 ">
          <img src="images/gamehis.png" alt="" className=" w-auto h-[52px]" />
          <div>
            <p className=" text-base font-semibold">Withdraw</p>
            <p className=" text-xs font-medium">My withdraw history</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default GameHistory;
