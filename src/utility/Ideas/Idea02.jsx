

function Idea02() {
  return (
    <div className="w-64 h-64 bg-red-100 relative">
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <img src="/img1.svg" alt="" />
      </div>
      <div className="opacity-0 hover:opacity-100 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold transition-all duration-500 -bottom-full hover:bottom-11">
        Test
      </div>
    </div>
  );
}

export default Idea02;
