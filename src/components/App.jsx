import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import appError from "../assets/App-Error.png";

const App = () => {
   const appsData = useLoaderData();
   const [search, setSearch] = useState("");

   const filteredApps = appsData.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase()),
   );
   return (
      <div>
         <div className="text-center my-10">
            <h1 className="text-3xl font-bold mb-4">Our All Applications</h1>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
         </div>

         {filteredApps.length > 0 ? (
            <div className="">
               <div className="flex justify-between my-5 mx-20">
                  <h3 className="font-bold">({filteredApps.length}) Apps Found</h3>
                  <label className="input">
                     <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                     >
                        <g
                           strokeLinejoin="round"
                           strokeLinecap="round"
                           strokeWidth="2.5"
                           fill="none"
                           stroke="currentColor"
                        >
                           <circle cx="11" cy="11" r="8"></circle>
                           <path d="m21 21-4.3-4.3"></path>
                        </g>
                     </svg>
                     <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        required
                        placeholder="Search"
                     />
                  </label>
               </div>
               <div className="grid grid-cols-4 gap-4 mx-20 my-10">
                  {filteredApps.map((appData) => (
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
            </div>
         ) : (
            <div className="text-center my-10">
               <img className="mx-auto" src={appError} alt="No App Found" />
               <div className="my-5">
                  <h1 className="font-bold text-2xl">OPPS!! APP NOT FOUND</h1>
                  <p className="text-center text-gray-600-500">
                     The App you are requesting is not found on our system. please try another apps
                  </p>
               </div>
               <NavLink
                  className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-3 rounded-md font-bold"
                  to="/"
               >
                  Go Back Home
               </NavLink>
            </div>
         )}
      </div>
   );
};

export default App;
