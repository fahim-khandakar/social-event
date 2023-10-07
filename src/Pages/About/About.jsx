import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import banner from "../../assets/banner3.jpg";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0 pt-24">
      <div className="flex flex-col md:flex-row justify-around items-center gap-10">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img className="rounded-md" src={banner} alt="" />
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl font-bold font-serif pb-2">
            Our Beginnings and Aspirations
          </h1>
          <p>
            Welcome to Social Fiesta, where memorable moments and unforgettable
            experiences come to life. Our journey began with a passion for
            bringing people together to celebrate life's special moments. From
            weddings to birthdays, corporate gatherings to community festivals,
            we believe that every event deserves to be extraordinary. Our
            dedicated team of event enthusiasts is committed to crafting
            seamless, unique, and joy-filled experiences that leave lasting
            impressions. With years of expertise and a deep love for what we do,
            we've earned a reputation for excellence in event planning and
            coordination. Join us on this incredible journey as we continue to
            create magic, one event at a time. We can't wait to be a part of
            your next celebration. Let's make memories together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
