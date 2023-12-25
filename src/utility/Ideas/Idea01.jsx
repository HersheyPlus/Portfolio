function Idea01() {
  return (
    <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <div id='img'>
        <img
          src="/img1.svg"
          alt=""
          className="group-hover:scale-125 transition-all duration-500"
        />
      </div>
      {/* Pre Title*/}
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
        React & NextJs
      </div>
      {/* Title */}
      <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50 ">
        Admin Dashboard
      </div>
    </div>
  );
}

export default Idea01;
