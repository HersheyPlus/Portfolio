import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import useMediaQuery from "../utility/useMediaQuery";

function Contact() {
  const isMobileScreen = useMediaQuery("(min-width: 768px)");
  return (
    <section className='section' id ='contact'>
        <div className="w-full h-full flex flex-col-reverse tablet:flex-row gap-8 tablet:justify-between">
        <div className=" h-full w-full tablet:w-1/2 flex flex-col gap-y-6">
          <div className='space-y-3' id='text'>
          <h1 className="text-4xl tracking-wide text-center tablet:text-left uppercase">Contact me</h1>
          <p className='text-sm w-4/5 mx-auto text-center tablet:w-full tablet:mx-0 tablet:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque placeat dignissimos illum ipsam in odio necessitatibus ducimus. Sequi, saepe ea.</p>
          </div>
          {isMobileScreen ? (
            <div className='flex flex-col gap-y-4 text-white text-3xl'>
            <div className='flex items-center gap-x-4' id='contact-instgram'>
              <a href="https://www.instagram.com/melbromss_/"><FaInstagram /></a>
              <h4 className="text-base">Instagram</h4>
            </div>
            <div className='flex items-center gap-x-4' id='contact-facebook'>
              <a href="https://www.facebook.com/profile.php?id=100094458512009"><FaFacebook /></a>
              <h4 className="text-base">Facebook</h4>
            </div>
            <div className='flex items-center gap-x-4' id='contact-linkedin'>
              <a href="https://www.linkedin.com/in/suphawat-singka-5602b7270/"><FaLinkedin /></a>
              <h4 className="text-base">Linkedin</h4>
            </div>
            <div className='flex items-center gap-x-4' id='contact-twitter'>
              <a href="https://twitter.com/MelbromssC"><FaXTwitter /></a>
              <h4 className="text-base">Twitter ( X )</h4>
            </div>
          </div>
          ) : (
            <div className="flex mx-auto gap-x-6 text-3xl items-center">
               <a href="https://www.instagram.com/melbromss_/"><FaInstagram /></a>
               <a href="https://www.facebook.com/profile.php?id=100094458512009"><FaFacebook /></a>
               <a href="https://www.linkedin.com/in/suphawat-singka-5602b7270/"><FaLinkedin /></a>
               <a href="https://twitter.com/MelbromssC"><FaXTwitter /></a>
            </div>
          )}
        </div>
        <div className="w-full tablet:w-1/2 flex items-center tablet:h-full">
          <img src="/img1.svg" alt="avatar" className="border-2 h-auto" />
        </div>
      </div>
  </section>
  )
}

export default Contact
{/* <p className="w-5/6 text-justify text-sm font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit doloribus, nostrum est animi numquam ipsam fugit totam adipisci illo rem recusandae dolor inventore corrupti asperiores cum, molestiae, eligendi explicabo culpa iste. Perspiciatis culpa sequi asperiores. Dignissimos itaque incidunt, numquam tempora suscipit ullam harum fugiat repellendus! Debitis culpa quod sequi in?</p> */}