
function Footer() {
  return (
    <footer className='w-full h-full bg-footer bg-cover bg-no-repeat' id ='footer'>
    <div className='grid grid-cols-1 tablet:grid-cols-2 px-12 py-6'>
      <div className='' id='footer-logo'>
        <h1 className='text-4xl'>Logo</h1>
      </div>
      <div className='flex gap-x-10' id='message-to-me'>
        <h6 className='uppercase'>message</h6>
        <form className='w-full flex flex-col gap-y-4'>
        <input type="email" id="email" className="rounded-sm w-3/5 bg-white px-3 placeholder:text-gray py-1 font-roboto" placeholder='Email'/>
        <textarea id="message" rows="3" className="block  font-roboto p-2.5 w-full text-sm rounded-sm border " placeholder="Write your thoughts here..."></textarea>
        <div className='flex items-center justify-end'>
        <button className="bg-blue rounded-full py-2 px-8">Submit</button>
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