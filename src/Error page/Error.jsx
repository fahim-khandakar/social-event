import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center p-5 md:p-0  flex-col gap-5 items-center text-xl text-center h-screen">
        <h1 className="text-5xl font-semibold">Oops! </h1>
        <h5>
          It seems like you've wandered off the path. The page you're looking
          for couldn't be found. Don't worry, let's get you back on track.
        </h5>
        <Link to="/">
          <button className="btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
