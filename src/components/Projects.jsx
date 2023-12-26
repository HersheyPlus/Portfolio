import ProjectList from "./ProjectList";
import useMediaaQuery from "../utility/useMediaQuery";
import { IoCodeWorkingSharp } from "react-icons/io5";

function Projects() {
  const isMobileScreen = useMediaaQuery("(min-width: 768px)");
  return (
    <section className="section" id="projects">
      {isMobileScreen ? (
        <></>
      ) : (
        <div className="py-3 border-2 border-green-3 bg-dark bg-opacity-50 mb-4 rounded-2xl flex gap-x-4 items-center justify-center">
          <h2 className="text-3xl">My Projects</h2>
          <div className="text-4xl"><IoCodeWorkingSharp /></div>
          </div>
      )}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-3 gap-y-4 h-full tablet:h-[28rem]">
        <ProjectList  img="/img2.png" alt="project 1" projectName="Admin Dashboard" using="React & Tailwind" />
        <ProjectList  img="/img3.png" alt="project 2" projectName="E-commmerce" using="NextJs"/>
        <ProjectList  img="/img3.png" alt="project 3" projectName="Networking" using="Docker"/>
        <ProjectList  img="/img2.png" alt="project 4" projectName="Shark Ulta" using="Kubenetes"/>
      </div>
      <h2 className="uppercase text-right mt-4 underline underline-offset-4">
        view all project ➡
      </h2>
    </section>
  );
}

export default Projects;
