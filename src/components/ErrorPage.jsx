import React from "react";
import errorImage from "../assets/error-404.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
   return (
      <div>
         <Navbar></Navbar>
         <div className="text-center">
            <img className="mx-auto" src={errorImage} alt="Error 404" />
            <h1>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
            <button>Go Back!</button>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default ErrorPage;
