import ProjectList from "./ProjectList";
import useMediaaQuery from "../utility/useMediaQuery";
import { IoCodeWorkingSharp } from "react-icons/io5";
import project1 from "/img2.png";
import project2 from "/img3.png";
import { motion } from "framer-motion";

function Projects() {
  const isMobileScreen = useMediaaQuery("(min-width: 768px)");
  return (
    <section className="section" id="projects">
      {isMobileScreen ? (
        <></>
      ) : (
        <motion.div 
        initial   ={{opacity:0, scale:0.5}}
          whileInView={{opacity:1, scale:1}}
          transition={{duration:1}}
        className="py-3 border-2 border-green-2 bg-dark bg-opacity-50 mb-4 rounded-2xl flex gap-x-4 items-center justify-center">
          <h2 
          
          className="text-3xl">Projects</h2>
          <div className="text-4xl">
            <IoCodeWorkingSharp />
          </div>
        </motion.div>
      )}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-3 gap-y-4 h-full tablet:h-[28rem]">
        {isMobileScreen ? (
          <>
            <ProjectList
              img={project1}
              alt="project 1"
              projectName="Admin Dashboard"
              using="React & Tailwind"
              delay={0.4}
            />
            <ProjectList
              img={project2}
              alt="project 2"
              projectName="E-commmerce"
              using="NextJs"
              delay={1}
            />
            <ProjectList
              img={project1}
              alt="project 3"
              projectName="Networking"
              using="Docker"
              delay={1.5}
            />
            <ProjectList
              img={project2}
              alt="project 4"
              projectName="Shark Ulta"
              using="Kubenetes"
              delay={2}
            />
          </>
        ) : (
          <>
            <ProjectList
              img={project1}
              alt="project 1"
              projectName="Admin Dashboard"
              using="React & Tailwind"
              delay={0.5}
            />
            <ProjectList
              img={project2}
              alt="project 2"
              projectName="E-commmerce"
              using="NextJs"
              delay={0.5}
            />
            <ProjectList
              img={project1}
              alt="project 3"
              projectName="Networking"
              using="Docker"
              delay={0.5}
            />
            <ProjectList
              img={project2}
              alt="project 4"
              projectName="Shark Ulta"
              using="Kubenetes"
              delay={0.5}
            />
          </>
        )}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5 }}
        className="uppercase text-right mt-4 underline underline-offset-4 hover:text-gray"
      >
        <a target="blank" href="#">
          view all project &#x21aa;
        </a>
      </motion.h2>
    </section>
  );
}

export default Projects;
