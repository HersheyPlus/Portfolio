import useMediaaQuery from "../utility/useMediaQuery";
import {motion} from 'framer-motion'

function ProjectList(props) {
    const isMobileScreen = useMediaaQuery("(min-width: 768px)");
    const { img, alt, projectName, using, delay} = props;
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:2, delay:delay}}
    className="border-4 border-green-2 rounded-xl overflow-hidden group relative">
          {isMobileScreen ? (
            <>
              <img
                src={img}
                alt={alt}
                className="group-hover:scale-125 hover:opacity-60 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-5 group-hover:bottom-12 transition-all duration-500 z-50 ">
              {projectName}
              </div>
              {/* Title */}
              <div className="absolute -bottom-full left-5 group-hover:bottom-6 transition-all duration-500 z-50 ">
                {using}
              </div>
            </>
          ) : (
            <>
                      <img
            src={img}
            alt={alt}
          />
          <div className="absolute left-4 bottom-11 z-50 ">
            {projectName}
          </div>
          {/* Title */}
          <div className="absolute z-50 left-4 bottom-5 ">
            {using}
          </div>
            </>
          )}
        </motion.div>
  )
}

export default ProjectList