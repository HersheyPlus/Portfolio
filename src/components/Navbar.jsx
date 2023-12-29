import { useState,useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import useMediaQuery from "../utility/useMediaQuery";
import { TbBrandReact } from "react-icons/tb";
import { Link,animateScroll, scroller, Events } from 'react-scroll'

function Navbar() {
  const [active, setActive] = useState('hero');
  const isMobileScreen = useMediaQuery("(min-width: 768px)");

  const handleSetActive = (to) => {
    setActive(to);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration:1200,
      smooth: true,
      offset:-150
    })
  }
  const scrollToSkills = () => {
    scroller.scrollTo('skills', {
      duration:1200,
      smooth: true,
      offset:-150
    })

  }
  const scrollToProjects = () => {
    scroller.scrollTo('projects', {
      duration:1200,
      smooth: true,
      offset:-150
    })
  }
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const aboutSection = document.getElementById('about').offsetTop;
    const skillsSection = document.getElementById('skills').offsetTop;
    const projectsSection = document.getElementById('projects').offsetTop;
    const contactSection = document.getElementById('contact').offsetTop; // Get the contact section
  
    if (scrollPosition >= contactSection) {
      handleSetActive('contact'); // Update active state for 'contact'
    } else if (scrollPosition >= projectsSection) {
      handleSetActive('projects');
    } else if (scrollPosition >= skillsSection) {
      handleSetActive('skills');
    } else if (scrollPosition >= aboutSection) {
      handleSetActive('about');
    } else {
      handleSetActive('hero');
    }
  };

  useEffect(() => {
    Events.scrollEvent.register('scroll', handleScroll);

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('scroll');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMobileScreen ? (
            <nav className="w-full py-4 max-w-screen-desktop desktop:mx-auto fixed left-0 z-50  top-0 backdrop-blur-xl" id="navbar">
            <div className="w-5/6 min-w-80 h-full mx-auto flex items-center justify-between gap-x-6 px-3 tablet:px-0">
              <div className="" id="logo">
                <h1 className="text-4xl cursor-pointer" onClick={scrollToTop}>Melbromss</h1>
              </div>
                <ul className="list-none flex items-center gap-x-8 text-xl">
                  <li className="border-t-2 border-l-2 border-green-1 py-1 px-3 rounded-xl menu-hover cursor-pointer hover:border-0" onClick={scrollToAbout}>About</li>
                  <li className="border-t-2 border-l-2 border-green-1 py-1 px-3 rounded-xl menu-hover cursor-pointer hover:border-0" onClick={scrollToSkills}>Skills</li>
                  <li className="border-t-2 border-l-2 border-green-1 py-1 px-3 rounded-xl menu-hover cursor-pointer hover:border-0" onClick={scrollToProjects}>Projects</li>
                  <li className="animate-spin text-2xl hover:text-dark-gray ho"><TbBrandReact /></li>
                </ul>
            </div>
          </nav>
      ) : (<nav className="fixed z-50 h-auto w-[40px] top-6 left-3 flex flex-col p-2 items-center gap-y-4 backdrop-blur-xl">
        <Link to='hero'  smooth={true} duration={1200} activeClass="active" className={active === 'hero' ? 'text-white' : 'text-green-1'} onClick={() => handleSetActive('hero')} ><FaHome /></Link>
        <Link to='about'  smooth={true} duration={1200} activeClass="active"  className={active === 'about' ? 'text-white' : 'text-green-1'} onClick={() => handleSetActive('about')}>
        <FaPerson />
        </Link>
        <Link to='skills'  smooth={true} duration={1200} activeClass="active"  className={active === 'skills' ? 'text-white' : 'text-green-1'} onClick={() => handleSetActive('skills')}>
        <FaStarHalfAlt />
        </Link>
        <Link to='projects'  smooth={true} duration={1200} activeClass="active"  className={active === 'projects' ? 'text-white' : 'text-green-1'} onClick={() => handleSetActive('projects')}>
        <IoDocumentsSharp />
        </Link>
        <Link to='contact'  smooth={true} duration={1200} activeClass="active"  className={active === 'contact' ? 'text-white' : 'text-green-1'} onClick={() => handleSetActive('contact')}>
        <IoIosContact />
        </Link>
      </nav>)}
    </>
    
  );
}

export default Navbar;
