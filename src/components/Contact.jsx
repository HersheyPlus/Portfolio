import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import useMediaQuery from "../utility/useMediaQuery";
import contactImg from "/img1.svg";
import { motion } from "framer-motion";

function Contact() {
  const isMobileScreen = useMediaQuery("(min-width: 768px)");
  return (
    <section className="section" id="contact">
      <div className="w-full h-full flex flex-col-reverse tablet:flex-row gap-8 tablet:justify-between  ">
        <div className=" h-full w-full tablet:w-1/2 flex flex-col gap-y-6 border-t-2 border-l-2 border-green-1 rounded-xl p-4">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 2 }}
            className="space-y-3"
            id="text"
          >
            <h1 className="text-4xl tracking-wide text-center tablet:text-left uppercase">
              Contact me
            </h1>
            <p className="text-sm w-4/5 mx-auto text-center tablet:w-full tablet:mx-0 tablet:text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              placeat dignissimos illum ipsam in odio necessitatibus ducimus.
              Sequi, saepe ea.
            </p>
          </motion.div>
          {isMobileScreen ? (
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-start gap-y-4 text-white text-3xl"
            >
              <a
                className="flex items-center gap-x-4 hover:text-[#E4405F] cursor-pointer"
                id="contact-instgram"
                target="blank"
                href="https://www.instagram.com/melbromss_/"
              >
                <FaInstagram />
                <h4 className="text-base">Instagram</h4>
              </a>

              <a
                className="flex items-center gap-x-4 hover:text-[#1877F2]"
                id="contact-facebook"
                target="blank"
                href="https://www.facebook.com/profile.php?id=100094458512009"
              >
                <FaFacebook />
                <h4 className="text-base">Facebook</h4>
              </a>

              <a
                className="flex items-center gap-x-4 hover:text-[#00A0DC]"
                id="contact-linkedin"
                target="blank"
                href="https://www.linkedin.com/in/suphawat-singka-5602b7270/"
              >
                <FaLinkedin />
                <h4 className="text-base">Linkedin</h4>
              </a>

              <a
                className="flex items-center gap-x-4 hover:text-[#1DA1F2]"
                id="contact-twitter"
                target="blank"
                href="https://twitter.com/MelbromssC"
              >
                <FaXTwitter />
                <h4 className="text-base">Twitter ( X )</h4>
              </a>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex mx-auto gap-x-6 text-3xl items-center"
            >
              <a
                className="text-[#E4405F]"
                target="blank"
                href="https://www.instagram.com/melbromss_/"
              >
                <FaInstagram />
              </a>
              <a
                className="text-[#1877F2]"
                target="blank"
                href="https://www.facebook.com/profile.php?id=100094458512009"
              >
                <FaFacebook />
              </a>
              <a
                className="text-[#00A0DC]"
                target="blank"
                href="https://www.linkedin.com/in/suphawat-singka-5602b7270/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-[#1DA1F2]"
                target="blank"
                href="https://twitter.com/MelbromssC"
              >
                <FaXTwitter />
              </a>
            </motion.div>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2}}
          className="w-full tablet:w-1/2 flex items-center tablet:h-full"
        >
          <img src={contactImg} alt="avatar" className="border-2 h-auto" />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
{
  /* <p className="w-5/6 text-justify text-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit doloribus, nostrum est animi numquam ipsam fugit totam adipisci illo rem recusandae dolor inventore corrupti asperiores cum, molestiae, eligendi explicabo culpa iste. Perspiciatis culpa sequi asperiores. Dignissimos itaque incidunt, numquam tempora suscipit ullam harum fugiat repellendus! Debitis culpa quod sequi in?</p> */
}
