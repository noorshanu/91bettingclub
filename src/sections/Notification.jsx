import React from 'react'
import { AiTwotoneSound } from "react-icons/ai";
import RollingText from './Rolling';

function Notification() {
  return (
    <section>
        <div className=' bg-white rounded-full overflow-hidden py-3 px-6 '>
            <div className=' flex justify-between items-center gap-4'>
       <a href="/" className=' '>     <AiTwotoneSound  className=' text-2xl'/></a>
            <RollingText/>
                <button className=' bg-black rounded-full py-2 px-6 text-white '>
                    Details
                </button>
            </div>

        </div>
    </section>
  )
}

export default Notification