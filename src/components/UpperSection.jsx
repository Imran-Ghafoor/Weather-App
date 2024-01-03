import React from 'react'

const UpperSection = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3' >
      {/* UpperSecion place */}
      <div className="text-5xl ">
        London
      </div>
      {/* UpperSecion temprature */}
      <div className="text-8xl ">
        20&deg;C
      </div>
      {/* UpperSecion date */}
      <div className="text-2xl">
        2023-7-6
      </div>
    </div>
  )
}

export default UpperSection