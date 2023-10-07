import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <div className="max-w-6xl mx-auto p-5 md:p-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
