import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
   const [appsData, setAppsData] = useState([]);

   useEffect(() => {
      fetch("../appData.json")
         .then((res) => res.json())
         .then((data) => setAppsData(data));
   }, []);
   return (
      <div>
         <Banner></Banner>
         <div className="py-10">
            <div className="text-center my-10">
               <h1 className="text-4xl font-bold mb-2">Trending Apps</h1>
               <p className="mb-2">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-20">
               {appsData.slice(0, 8).map((appData) => (
                  <Link to={"/app-details"} className="card bg-base-100 w-80 shadow-sm m-2">
                     <figure>
                        <img className="p-3" src={appData.image} alt={appData.title} />
                     </figure>
                     <div className="card-body">
                        <h2 className="card-title">{appData.title}</h2>
                        <div className="card-actions justify-between">
                           <div className="btn text-green-400">
                              <img className="h-3 w-3" src={downloadIcon} alt="Downloads" />
                              {appData.downloads}M
                           </div>
                           <div className="btn text-orange-400">
                              <img className="h-3 w-3" src={ratingIcon} alt="Ratings" />
                              {appData.ratingAvg}
                           </div>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
            <NavLink
               to={"/app"}
               className="ml-[720px] mt-10 mb-15 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white"
            >
               Show All
            </NavLink>
         </div>
      </div>
   );
};

export default Home;
