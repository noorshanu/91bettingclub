import React from 'react'
import Navbar from '../Navbar'
import Nvabar from './Nvabar'
import WalletSection from './WalletSection'
import Notification from '../Notification'
import GameSection from './GameSection'

function WinGo() {
  return (
  <>
  <div>
   <Nvabar/>
   <div className='bg-[#ecedf4] pt-4'>
   <WalletSection/>
   <div className=' mt-4 mx-8 pb-4'>
    <Notification/>

   </div>
   <div className='mt-4 mx-8 pb-4'>
    <GameSection/>
   </div>
   </div>
  
  </div>
  </>
  )
}

export default WinGo