import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import useMediaQuery from "../utility/useMediaQuery";
import { RxCross2 } from "react-icons/rx";
import { AiFillRightSquare } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileScreen = useMediaQuery("(max-width: 767px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="mb-12 w-full py-4 max-w-screen-desktop desktop:mx-auto" id="navbar">
      <div className="w-5/6 min-w-80 h-full mx-auto flex items-center justify-between gap-x-6 px-3 tablet:px-0">
        <div className="" id="logo">
          <h1 className="text-4xl">Melbromss</h1>
        </div>
        {isMobileScreen ? (
          <button className="text-3xl bg-red" onClick={toggleMenu}>
            {!isOpen ? (<IoMenu />) : (<RxCross2 />)}
          </button>
        ) : (
          <ul className="list-none flex items-center gap-x-8 text-xl">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li><AiFillRightSquare /></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
