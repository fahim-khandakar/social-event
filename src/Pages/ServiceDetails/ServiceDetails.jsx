import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleData = data.find((item) => item.id === id);
  console.log(singleData);
  const { name, description, image, price } = singleData;
  console.log(name, description);
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0">
      <div className="py-10">
        <div className="h-auto ">
          <img
            className="h-full w-full  object-cover rounded-md"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="py-5">{description}</p>
          <p className="text-lg font-bold">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
