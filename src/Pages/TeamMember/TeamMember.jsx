import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";
import men1 from "../../assets/men1.jpg";
import men2 from "../../assets/men2.jpg";
import men3 from "../../assets/men3.jpg";
import men4 from "../../assets/men4.jpg";
import men5 from "../../assets/men5.jpg";
import men6 from "../../assets/men6.jpg";
const TeamMember = () => {
  return (
    <div className="mt-16">
      <h1 className="text-2xl md:text-4xl font-serif font-bold text-center">
        Our Team Members
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men1}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Benjamin
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Event Planner
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men2}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Ethan
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Wedding Planner
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men3}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Liam
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Caterer
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men4}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Mason
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Florist
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={girl1}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Ava
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Photographer
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={girl2}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Charlotte
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Video Grapher
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men5}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Oliver
          </h3>
          <p>
            <span className=" font-medium">Position</span>: DJ
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={men6}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Samuel
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Event Decorator
          </p>
        </div>
        <div className="text-center bg-slate-200 px-2 py-5 rounded-md">
          <img
            className="w-[100px] h-[100px] object-cover mx-auto rounded-full"
            src={girl3}
            alt=""
          />
          <h3 className=" py-1 mt-4">
            <span className="font-medium">Name</span>: Olivia
          </h3>
          <p>
            <span className=" font-medium">Position</span>: Event Coordinator
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
