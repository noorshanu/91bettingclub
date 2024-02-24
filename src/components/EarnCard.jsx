import React from 'react'

function EarnCard() {
  return (
    <div className=" bg-white rounded-2xl py-3 px-6 my-5">
    <div className=" flex justify-between items-center gap-2 ">
        <h1 className=' text-2xl font-bold text-gray-500'>1</h1>
      <div className=" flex justify-center items-center gap-4">
        <img
          src="images/avatar.png"
          alt=""
          className="w-auto h-[43px] rounded-full"
        />
        <p> mem ***3ge</p>
      </div>

 

      <div>
       <button className=' bg-black py-2 px-6 rounded-full text-white text-xl font-medium'>
       ₹236,986,089.20
       </button>
      </div>
    </div>
  </div>
  )
}

export default EarnCard