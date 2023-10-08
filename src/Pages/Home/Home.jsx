import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ReasonsToChooseUs from "../ReasonsToChooseUs/ReasonsToChooseUs";
import Review from "../Review/Review";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0">
      <Banner></Banner>
      <div>
        <h1 className="text-2xl md:text-4xl font-serif text-[#403f3f] font-bold mt-10 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-0 mt-10 mx-auto max-w-6xl">
          {data.map((item) => (
            <Services key={item.id} item={item}></Services>
          ))}
        </div>
      </div>
      <ReasonsToChooseUs></ReasonsToChooseUs>
      <Review></Review>
    </div>
  );
};

export default Home;
