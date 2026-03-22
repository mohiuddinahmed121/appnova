import React from "react";
import errorImage from "../assets/error-404.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="text-center my-10">
            <img className="mx-auto" src={errorImage} alt="Error 404" />
            <h1 className="text-3xl font-bold my-4">Oops, page not found!</h1>
            <p className="mb-5">The page you are looking for is not available.</p>
            <NavLink
               className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-3 rounded-md font-bold"
               to="/"
            >
               Go Back Home
            </NavLink>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ErrorPage;
