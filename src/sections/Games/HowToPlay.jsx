import React from 'react'
import { MdOutlineSpeakerNotes } from "react-icons/md";


function HowToPlay() {
  return (
   <section className=' py-2 px-4 border rounded-full my-2'>
    <button className=' flex justify-center gap-2 items-center'>
    <MdOutlineSpeakerNotes />
    <p>How To Play</p>
    
    </button>
   </section>
  )
}

export default HowToPlay