
function Footer() {
  return (
    <footer className='w-full h-full bg-footer bg-cover bg-no-repeat' id ='footer'>
    <div className='grid grid-cols-1 tablet:grid-cols-3 px-12 py-6 gap-y-8 gap-x-2'>
      <div className='' id='footer-logo'>
        <h1 className='text-4xl'>Logo</h1>
      </div>
      <div className="flex flex-col gap-y-4 tablet:flex-row justify-around mb-4 tablet:mb-0">
        <h4>FAQs</h4>
        <div className=" flex flex-col gap-y-4">
          <a href="#" className="hover:text-gray hover:underline hover:underline-offset-2">My mission</a>
          <a href="#" className="hover:text-gray hover:underline hover:underline-offset-2">Your impacts</a>
          <a href="#" className="hover:text-gray hover:underline hover:underline-offset-2">Passion and Insparation</a>
        </div>
      </div>
      <div className='flex  flex-col tablet:flex-row gap-x-10 gap-y-5' id='message-to-me'>
        <h6 className='uppercase'>message</h6>
        <form className='w-full flex flex-col gap-y-4'>
        <input type="email" id="email" className="rounded-sm border w-4/5 tablet:w-3/5 bg-dark/40 px-3  py-1 font-roboto" placeholder='Email'/>
        <textarea id="message" rows="3" className="bg-dark/40 block p-2.5 w-full text-sm rounded-sm border " placeholder="Write your thoughts here..."></textarea>
        <div className='flex items-center justify-end'>
        <button className="text-base full-desktop:text-lg text-white bg-green-1 hover:before:bg-dark border-green-1 relative rounded-xl overflow-hidden border-2 px-4 py-1 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-green-1  hover:before:left-0 hover:before:w-full"><span className="relative z-10">Submit</span></button>
        </div>
        </form>
      </div>
    </div>
    <hr className="h-px my-4 bg-gray-200 border-0 bg-white" id='footer-content-1'></hr>
    <div className='grid grid-cols-1 tablet:grid-cols-2 px-12 gap-y-4 py-3' id='footer-content-2'>
      <span className='text-xs uppercase text-center tablet:text-left'>copyright all rights reserved</span>
      <div className='flex justify-around items-center' id='footer-options'>
      <span className='text-xs uppercase'>color version</span>
      <span className='text-xs uppercase'>2024 version</span>
      <span className='text-xs uppercase'>back to top</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer