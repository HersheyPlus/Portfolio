import Countup from "react-countup";
import DonutChart from "./DonutChart";
import { skills } from "../utility/skills";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
        <div id="chart">
          <DonutChart />
        </div>
        <div className="grid grid-cols-4 tablet:grid-cols-5 px-2 py-4 mb-4 border-t-2 border-r-2 border-green-1 rounded-2xl gap-y-3 tablet:gap-y-4">
            {skills.map((skill, index) => (
                <motion.a whileHover={{scale:1.1}
                } key={index} href={skill.link} className="flex flex-col items-center gap-y-1" target="blank">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-12 h-12 tablet:w-14 tablet:h-14 full-desktop:w-16 full-desktop:h-16 hover:drop-shadow-green-2xl transition-all"
                  />
                  <span className="text-xs text-gray-1 capitalize">{skill.alt}</span>
                </motion.a>
            ))}
        </div>
        <div className=" border-y-2 border-green-1 rounded-lg grid grid-cols-3 gap-3 py-4 px-2 text-white">
          <div className="mx-auto text-4xl flex flex-col gap-y-1">
            <h2 className="text-sm text-gray desktop:text-base">
              Total Salary
            </h2>
            <span className="font-extrabold text-green-1">
              <Countup start={0} end={10} duration={7} />
              K+
            </span>
            <p className="text-xs text-gray desktop:text-sm">
              Garuntee Salary for our developer team
            </p>
          </div>
          <div className="mx-auto text-4xl flex flex-col gap-y-1">
            <h2 className="text-sm text-gray desktop:text-base">Experience</h2>
            <span className="font-extrabold text-green-1">? ? ?</span>
            <p className="text-xs text-gray desktop:text-sm">
              Garuntee Salary for our developer team
            </p>
          </div>
          <div className="mx-auto text-4xl flex flex-col gap-y-1">
            <h2 className="text-sm text-gray desktop:text-base">Satisfied</h2>
            <span className="font-extrabold flex gap-x-2 text-green-1">
              <Countup
                start={0}
                end={4.5}
                decimal="."
                decimals={1}
                duration={5}
              />
              <span className="text-yellow/85 ">
                <FaStar />
              </span>
            </span>
            <p className="text-xs text-gray desktop:text-sm">
              Garuntee Salary for our developer team
            </p>
          </div>
        </div>
        <div className="px-2">
          <h1 className="text-3xl mb-2 text-center tablet:text-left">My Skills</h1>
          <p className="text-xs text-center tablet:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magnam eaque id veniam nobis earum blanditiis dolorum? Debitis repellat, magni illum officia laboriosam, provident quo magnam ex corporis accusamus deserunt?</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;

