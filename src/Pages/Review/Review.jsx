/* eslint-disable react/no-unescaped-entities */
import clint1 from "../../assets/clint1.jpg";
import clint2 from "../../assets/clint2.jpg";
import clint3 from "../../assets/clint3.jpg";
import clint4 from "../../assets/clint4.jfif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold my-10 text-center font-serif text-[#403f3f]">
        Our Clients' Reviews.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div
          className="flex flex-col md:flex-row items-center gap-10 bg-slate-100 rounded-md shadow-lg p-5 "
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <div>
            <img
              className="rounded-md md:rounded-full object-cover  h-[150px] md:h-[70px] w-[500px]"
              src={clint1}
              alt=""
            />
          </div>
          <div>
            <h3 className="pb-5 text-2xl font-semibold">David</h3>
            <p>
              We could not have asked for a more perfect wedding day, and it is
              all thanks to Social Fiesta. From the venue selection to the
              smallest details, they exceeded our expectations. Our guests are
              still talking about how magical the day was. Thank you for making
              our dream wedding a reality!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row  items-center gap-10 bg-slate-100 rounded-md shadow-lg p-5"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div>
            <img
              className="rounded-md md:rounded-full object-cover h-[150px] md:h-[70px] w-[500px]"
              src={clint2}
              alt=""
            />
          </div>
          <div>
            <h3 className="pb-5 text-2xl font-semibold">Michael</h3>
            <p>
              For our 25th wedding anniversary, we wanted something truly
              special. Social Fiesta created an elegant silver anniversary
              celebration that left us and our guests in awe. The attention to
              detail and the beautiful venue made it an unforgettable evening.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row  items-center gap-10 bg-slate-100 rounded-md shadow-lg p-5 mt-24"
          data-aos="flip-up"
          data-aos-duration="1500"
        >
          <div>
            <img
              className="rounded-md md:rounded-full object-fill w-[500px] h-[150px] md:h-[70px]"
              src={clint3}
              alt=""
            />
          </div>
          <div>
            <h3 className="pb-5 text-2xl font-semibold">Julia</h3>
            <p>
              Planning our engagement party was a breeze with Social Fiesta.
              They took our rustic-themed vision and turned it into a cozy,
              charming soirée. The decor, food, and photo booth were perfect. We
              can not wait to work with them for our wedding!
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row  items-center gap-10 bg-slate-100 rounded-md shadow-lg p-5 mt-24"
          data-aos="flip-down"
          data-aos-duration="1500"
        >
          <div>
            <img
              className="rounded-md md:rounded-full object-cover h-[150px] md:h-[70px] w-[500px]"
              src={clint4}
              alt=""
            />
          </div>
          <div>
            <h3 className="pb-5 text-2xl font-semibold">Jennifer </h3>
            <p>
              Our baby shower was an absolute delight thanks to Social Fiesta.
              The whimsical decorations and games they organized created a
              joyful atmosphere. The dessert bar was a hit with our guests, and
              we could not have asked for a more special celebration of our
              upcoming arrival
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
