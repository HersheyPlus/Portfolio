import { FaGithub } from "react-icons/fa";
import avatar from "/img1.svg";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import useMediaQuery from "../utility/useMediaQuery";

function Hero() {
  const isMobileScreen = useMediaQuery("(min-width: 768px)");
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 1200,
      smooth: true,
      offset: -150,
    });
  };
  return (
    <section className="section mt-0 tablet:mt-32" id="hero">
      <div className="w-full h-full flex flex-col-reverse tablet:flex-row gap-8 tablet:justify-between">
        <div className=" h-full w-full tablet:w-1/2 flex flex-col gap-y-4 tablet:gap-y-8">
          <div
            className="space-y-2 tracking-widest text-center tablet:text-left uppercase"
            id="text"
          >
            <motion.h4
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
              }}
              className="text-xl full-desktop:text-3xl"
            >
              Welcome, I&apos;m a
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2,
              }}
              className="text-4xl leading-12 full-desktop:text-5xl"
            >
              Full-Stack
              <br /> Developer
            </motion.h1>
          </div>
          <div className="flex items-center tablet:items-end flex-col tablet:text-right font-roboto gap-y-2">
            <motion.h5
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
              }}
              className="uppercase underline-offset-2 underline text-lg full-desktop:text-xl text-center tablet:text-left"
            >
              hello, my name&apos;s Suphawat Singka
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 250 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
              }}
              className="w-5/6 text-justify text-sm font-medium full-desktop:text-base"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit doloribus, nostrum est animi numquam ipsam fugit
              totam adipisci illo rem recusandae dolor inventore corrupti
              asperiores cum, molestiae, eligendi explicabo culpa iste.
              Perspiciatis culpa sequi asperiores. Dignissimos itaque incidunt,
              numquam tempora suscipit ullam harum fugiat repellendus! Debitis
              culpa quod sequi in?
            </motion.p>
            <div className="flex gap-x-4 mt-4">
              {isMobileScreen ? (<motion.button
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-base full-desktop:text-lg text-white bg-green-1 hover:before:bg-dark border-green-1 relative rounded-xl overflow-hidden border-2 px-6 py-2 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-green-1  hover:before:left-0 hover:before:w-full"
              >
                <span
                  className="relative z-10 cursor-pointer"
                  onClick={scrollToContact}
                >
                  Contact me
                </span>
              </motion.button>) : (<></>)}
              <motion.button
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="text-white bg-green-1 hover:before:bg-dark border-green-1 relative rounded-xl overflow-hidden border-2 px-6 py-2 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-green-1  hover:before:left-0 hover:before:w-full"
              >
                <a
                  target="blank"
                  href="https://github.com/HersheyPlus"
                  className="relative z-10 text-2xl"
                >
                  <FaGithub />
                </a>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-full tablet:w-1/2 flex items-center tablet:h-full">
          <motion.img
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            src={avatar}
            alt="avatar"
            className="border-2 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
