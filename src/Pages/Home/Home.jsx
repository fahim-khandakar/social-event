import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import ReasonsToChooseUs from "../ReasonsToChooseUs/ReasonsToChooseUs";
import Review from "../Review/Review";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-4xl font-bold mt-20 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-0 mt-20 mx-auto max-w-6xl">
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
