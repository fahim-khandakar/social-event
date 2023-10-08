import { FaHandshake, FaAngrycreative, FaDollarSign } from "react-icons/fa";
import { MdSentimentVerySatisfied } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { CgStyle } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ReasonsToChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-auto max-w-6xl px-5 md:px-0 ">
      <h1 className="text-2xl md:text-4xl font-bold mt-20 text-center">
        Why Choose Us for Your Special Event?
      </h1>
      <p className="pt-5 text-center w-3/4 mx-auto">
        At Social Fiesta, we understand that your event is more than just an
        occasion; it is a cherished moment that deserves the utmost care and
        attention to detail. Here are some compelling reasons to entrust us with
        the planning and execution of your unforgettable celebration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 my-10">
        <div
          className="text-center mt-10"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <FaHandshake></FaHandshake>
          </div>
          <h3 className="text-2xl font-semibold py-5">
            Trusted Vendor Relationships
          </h3>
          <p>
            Our strong relationships with reputable vendors mean you will have
            access to the best services and products, often at preferential
            rates, saving you time and money.
          </p>
        </div>
        {/* first  */}
        <div
          className="text-center mt-10"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <FaAngrycreative></FaAngrycreative>
          </div>
          <h3 className="text-2xl font-semibold py-5">Creative Innovation</h3>
          <p>
            Our team is fueled by creativity and innovation. We love crafting
            unique and imaginative solutions that make your event stand out and
            leave a lasting impression.
          </p>
        </div>
        {/* first  */}
        <div
          className="text-center mt-24"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <FaDollarSign></FaDollarSign>
          </div>
          <h3 className="text-2xl font-semibold py-5">Budget-Friendly Magic</h3>
          <p>
            We believe that you do not need an unlimited budget to create magic.
            Our skilled budget management ensures your vision is realized
            without breaking the bank.
          </p>
        </div>
        {/* first  */}
        <div
          className="text-center mt-24"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <MdSentimentVerySatisfied></MdSentimentVerySatisfied>
          </div>
          <h3 className="text-2xl font-semibold py-5">Satisfied Clients</h3>
          <p>
            Do not just take our word for it—our satisfied clients speak volumes
            about our commitment to excellence. Read their testimonials to hear
            about their memorable experiences.
          </p>
        </div>
        {/* first  */}
        <div
          className="text-center mt-24"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <GrUserWorker></GrUserWorker>
          </div>
          <h3 className="text-2xl font-semibold py-5">
            Dedicated Professionals
          </h3>
          <p>
            Behind every successful event is a team of dedicated professionals.
            Meet our talented event planners, designers, and coordinators who
            are passionate about making your dreams a reality.
          </p>
        </div>
        {/* first  */}
        <div
          className="text-center mt-24"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="flex justify-center text-4xl">
            <CgStyle></CgStyle>
          </div>
          <h3 className="text-2xl font-semibold py-5">
            Personalization at Its Best
          </h3>
          <p>
            Your event should be a reflection of your unique style and
            preferences. We take pride in customizing every detail to create an
            event that truly embodies your vision.
          </p>
        </div>
        {/* first  */}
      </div>
    </div>
  );
};

export default ReasonsToChooseUs;
