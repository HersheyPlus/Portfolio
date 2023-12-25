import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

function About() {
  return (
    <section className='section'>
      <div className='h-[400px] bg-about bg-no-repeat bg-cover rounded-3xl relative'>
        <h2 className='absolute left-5 top-3'>About me</h2>
        <div className='w-[50%] tablet:w-[30%] h-1/2 border-2 absolute right-5 bottom-3 bg-dark bg-opacity-75 flex flex-col px-2 py-4 gap-y-2'>
          <div className='flex items-center justify-between text-dark-gray gap-x-1'>
            <h6 className='text-[9px] tablet:text-xs'>Click here</h6>
            <div className='bg-dark-gray h-[2px] w-[60%] flex-shrink-0'></div>
            <div className=''><FaArrowCircleRight /></div>
          </div>
          <div className='flex flex-col gap-y-1'>
            <h5 className='text-xs'>Want to know more</h5>
            <div className='bg-white min-h-[100px]'>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between p-3'>
        <div className='w-1/5'><h4 className='text-sm tablet:text-2xl'>Suphawat</h4></div>
        <div className='w-3/5'><p className='text-[12px] tablet:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas libero praesentium impedit ullam numquam cupiditate qui voluptates ducimus rerum voluptatibus labore harum, possimus, aliquam aliquid itaque natus dolorum? Iure?</p></div>
      </div>
    </section>
  )
}

export default About