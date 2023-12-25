
function Hero() {
  return (
    <section className="section" id="hero">
      <div className="w-full h-full flex flex-col-reverse tablet:flex-row gap-8 tablet:justify-between">
        <div className=" h-full w-full tablet:w-1/2 flex flex-col gap-y-8">
          <div className="space-y-2 tracking-widest text-center tablet:text-left uppercase" id='text'>
            <h4 className="text-xl">Welcome, I&apos;m a</h4>
            <h1 className="text-4xl leading-8">Full-Stack<br /> Developer</h1>
          </div>
          <div className="flex items-center tablet:items-end flex-col tablet:text-right font-roboto gap-y-2">
              <h5 className="uppercase">hello, my name&apos;s Suphawat Singka</h5>
              <p className="w-5/6 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit doloribus, nostrum est animi numquam ipsam fugit totam adipisci illo rem recusandae dolor inventore corrupti asperiores cum, molestiae, eligendi explicabo culpa iste. Perspiciatis culpa sequi asperiores. Dignissimos itaque incidunt, numquam tempora suscipit ullam harum fugiat repellendus! Debitis culpa quod sequi in?</p>
              <button className="bg-blue rounded-full py-2 px-8 mt-4">Contact me</button>
          </div>
        </div>
        <div className="w-full tablet:w-1/2 flex items-center tablet:h-full">
          <img src="/img1.svg" alt="avatar" className="border-2 h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
