import { NavLink } from "react-router-dom";
import titleLogo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
   return (
      <div className="navbar bg-base-100 shadow-sm">
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
                     {" "}
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />{" "}
                  </svg>
               </div>
               <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
               >
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold p-2 border-b-2 border-[#632EE3]"
                           : "font-bold hover:bg-gray-200 rounded-lg p-2"
                     }
                     to="/"
                  >
                     Home
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold  p-2 border-b-2 border-[#632EE3]"
                           : "font-bold hover:bg-gray-200 rounded-lg p-2"
                     }
                     to="/app"
                  >
                     Apps
                  </NavLink>
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold  p-2 border-b-2 border-[#632EE3]"
                           : "font-bold hover:bg-gray-200 rounded-lg p-2"
                     }
                     to="/installation"
                  >
                     Installation
                  </NavLink>
               </ul>
            </div>
            <div className="btn btn-ghost text-xl">
               <img className="h-10 w-10" src={titleLogo} alt="AppNova Logo" />
               <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                  AppNova
               </p>
            </div>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold p-2 border-b-2 border-[#632EE3]"
                        : "font-bold hover:bg-gray-200 rounded-lg p-2"
                  }
                  to="/"
               >
                  Home
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold p-2 border-b-2 border-[#632EE3]"
                        : "font-bold hover:bg-gray-200 rounded-lg p-2"
                  }
                  to="/app"
               >
                  Apps
               </NavLink>
               <NavLink
                  className={({ isActive }) =>
                     isActive
                        ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold p-2 border-b-2 border-[#632EE3]"
                        : "font-bold hover:bg-gray-200 rounded-lg p-2"
                  }
                  to="/installation"
               >
                  Installation
               </NavLink>
            </ul>
         </div>
         <div className="navbar-end">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white">
               <FaGithub />
               Contribute
            </a>
         </div>
      </div>
   );
};

export default Navbar;
