import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="section h-[80vh]" id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="h-[400px] bg-about bg-no-repeat bg-cover rounded-3xl relative drop-shadow-green-2xl"
      >
        <h2 className="absolute left-5 top-3 text-2xl full-desktop:text-4xl">
          About me
        </h2>
        <div className="w-[50%] tablet:w-[30%] desktop:max-w-[20%] h-1/2 border-2 absolute right-5 bottom-3 bg-dark bg-opacity-75 flex flex-col px-2 py-4 gap-y-2">
          <div className="flex items-center justify-between text-dark-gray gap-x-1">
            <h6 className="text-[9px] tablet:text-xs">Click here</h6>
            <div className="bg-dark-gray h-[2px] w-[60%] flex-shrink-0"></div>
            <div className="">
              <FaArrowCircleRight />
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <h5 className="text-xs">Want to know more</h5>
            <div className="bg-white min-h-[95px]"></div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row justify-between p-3"
      >
        <div className="w-2/5">
          <h4 className="text-sm tablet:text-2xl">Suphawat Singka</h4>
        </div>
        <div className="w-3/5">
          <p className="text-xs tablet:text-sm font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas
            libero praesentium impedit ullam numquam cupiditate qui voluptates
            ducimus rerum voluptatibus labore harum, possimus, aliquam aliquid
            itaque natus dolorum? Iure?
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
