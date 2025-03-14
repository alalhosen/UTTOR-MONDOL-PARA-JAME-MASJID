import { NavLink } from "react-router-dom";
// import { FaMosque } from "react-icons/fa6";
import { FaMosque } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-bold text-lg">
        <NavLink to="./">হোম</NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink to="./রমজান">রমজান</NavLink>
      </li>
      <li className="lg:ml-4 font-bold text-lg">
        <NavLink to="./গ্যালারী">গ্যালারী</NavLink>
      </li>
      <li className="lg:mr-4 font-bold text-lg">
        <NavLink to="./যোগাযোগ">যোগাযোগ</NavLink>
      </li>
      <li className="lg:mr-4 font-bold text-lg">
        <NavLink to="./অর্থায়ন">অর্থায়ন</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-8 fixed top-0 left-0 w-full p-4 shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <a className="text-xl lg:text-3xl text-green-500 font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          <span className="text-red-600 text-xl lg:text-4xl pt-2">উ</span>ত্তর
          মন্ডল পাড়া জামে মসজিদ
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <FaMosque className="w-8 h-8 mr-4"></FaMosque>
        <a className="btn btn-secondary rounded-xl">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
