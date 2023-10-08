import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLottie } from "lottie-react";
import animation from "../../../src/Animation/Animation - 1696690290970.json";

const Banner = () => {
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" mt-10">
      <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-down-left"
          data-aos-duration="2000"
        >
          {View}
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <h1 className="text-3xl md:text-7xl  font-bold text-[#000000af]   py-5">
            <span className="text-3xl md:text-7xl  font-bold text-[#000000af] ">
              Hey..
            </span>{" "}
            <br />
            We Are Ready For Your Events!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
