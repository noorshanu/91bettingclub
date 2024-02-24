import React from 'react'

function WinCard() {
  return (
    <div className=" bg-white rounded-2xl py-3 px-6 my-5">
    <div className=" flex justify-between items-center gap-2 ">
      <div className=" flex justify-center items-center gap-4">
        <img
          src="images/avatar.png"
          alt=""
          className="w-auto h-[43px] rounded-full"
        />
        <p> mem ***3ge</p>
      </div>

      <div>
        <img
          src="images/gameicon.png"
          alt=""
          className=" h-[47px] w-[67px] "
        />
      </div>

      <div>
        <h1 className="text-sm font-bold ">Receive $400.00</h1>
        <p className="text-[#b0aeae] text-sm font-bold">Winning amount</p>
      </div>
    </div>
  </div>
  )
}

export default WinCard