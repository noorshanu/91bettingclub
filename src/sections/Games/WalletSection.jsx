import React from 'react'

function WalletSection() {
  return (
<div className="mx-auto max-w-md flex items-start justify-between ">
    <div className=' w-full bg-white m-4 rounded-lg p-4'>
        <h1 className=' text-center font-[400] text-2xl'>0.00</h1>
        <p className=' text-center  text-sm'>Wallet balance</p>


        <div className=' flex justify-between my-3'>
            <button className=' bg-[#f3bd14] text-lg font-medium uppercase py-2 px-6 text-black rounded-full'>Withdraw</button>
            <button className='bg-[#000] text-lg font-medium uppercase py-2 px-6 text-white rounded-full'>Deposit</button>
        </div>

    </div>

</div>
  )
}

export default WalletSection