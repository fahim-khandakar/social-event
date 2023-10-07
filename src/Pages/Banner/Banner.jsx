import banner from "../../assets/banner3.jpg";

const Banner = () => {
  return (
    <div className="w-full object-cover">
      <div>
        <img className="w-full max-h-screen" src={banner} alt="" />
        <div className="absolute top-80 text-center right-0 left-0 bg-[#00000070]  ">
          <h1 className="text-5xl  font-bold text-white  py-5">
            We Are Ready For Your Events!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
