import { NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Profile from "../Profile/Profile";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const signOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md w-full ">
      <div className="navbar font-serif text-[#403f3f] mx-auto max-w-6xl px-5 md:px-0 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="gap-10 menu-sm dropdown-content text-black mt-1 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-semibold normal-case text-base md:text-4xl font-serif">
            Social Fiesta
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2 md:gap-5">
          <Profile></Profile>

          <div>
            {user ? (
              <li className="list-none md:btn text-xs md:text-base md:btn-ghost">
                <button onClick={signOut}>Sign Out</button>
              </li>
            ) : (
              <li className="list-none md:btn md:btn-ghost text-xs md:text-base">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
