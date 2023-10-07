import banner from "../../assets/banner3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0 mt-24">
      <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-down-left"
          data-aos-duration="2000"
        >
          <img className="w-full rounded-lg" src={banner} alt="" />
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <h1 className="text-7xl  font-bold text-[#000000af]   py-5">
            We Are Ready For Your Events!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
