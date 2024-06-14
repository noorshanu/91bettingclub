import React from 'react'

function TotalBalnce() {
  return (
    <>
    <div className=' bg-white rounded-xl mx-4 py-4 px-6 shadow-xl my-4 border'>
      <div className=' border-b-2 pb-3'>
        <p className=' text-gray-600 text-base'>Total Balance</p>

        <h2 className='font-bold mt-2 text-xl'>₹0.00</h2>

      </div>
    <div className={`my-4 flex justify-between w-96`}>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/deposit-wallet.png" alt="Deposit Wallet" />
                  </div>
                  <div className="text-black text-sm my-1 font-bold">Deposit</div>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/withdraw.png" alt="Withdraw" />
                  </div>
                  <div className="text-black text-sm my-1 font-bold">Withdraw</div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/wallet-1.png" alt="Deposit History" />
                  </div>
                  <div className="text-black text-center text-sm my-1 w-20 font-bold">
                    Wallet
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="bg-white  w-20 p-3 rounded-xl flex flex-col justify-center items-center "
                    style={{ boxShadow: "0 .10667rem 2.21333rem #d0d0ed5c" }}
                  >
                    <img className="w-12" src="/images/vip.png" alt="Withdraw History" />
                  </div>
                  <div className="text-black text-center text-sm my-1 w-20 font-bold ">
                  VIP
                  </div>
                </div>
              </div>
    </div>
    </>
  )
}

export default TotalBalnce