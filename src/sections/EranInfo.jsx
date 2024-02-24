import React from 'react'
import EarnCard from '../components/EarnCard'

function EranInfo() {
  return (
    <section className=' mb-20'>
      <div>
        <h1 className=" text-2xl font-semibold ">Winning Information</h1>
      </div>

      <div className=" mt-6">
  <EarnCard/>
  <EarnCard/>
      </div>
    </section>
  )
}

export default EranInfo