import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";

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
         <div className="py-10 mx-10">
            <div className="text-center my-10">
               <h1 className="text-4xl font-bold mb-2">Trending Apps</h1>
               <p className="mb-2">Explore All Trending Apps on the Market developed by us</p>
            </div>
         </div>
      </div>
   );
};

export default Home;
