import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Services = ({ item }) => {
  const { id, name, description, image, price } = item;
  return (
    <div className=" card-compact  bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-52 object-cover mx-auto rounded-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="my-5 px-5">
        <h2 className="pb-5 font-semibold text-2xl">{name}</h2>
        <p>{description}</p>
        <p className="py-5 text-lg font-bold">Price: {price}</p>
        <div className="card-actions justify-center">
          <Link to={`/serviceDetails/${id}`}>
            <button className="py-1 px-5 btn-ghost rounded-md bg-slate-200">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
