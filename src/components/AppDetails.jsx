import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import iconSize from "../assets/icon-review.png";
import RatingChart from "./RatingChart";
import { ToastContainer, toast } from "react-toastify";

const AppDetails = () => {
   const appsData = useLoaderData();
   const { appId } = useParams();
   const appIdInt = parseInt(appId);
   const [isSelected, setIsSelected] = useState(false);
   const app = appsData.find((app) => app.id === appIdInt);

   const handleInstalled = () => {
      setIsSelected(true);
      saveAppList(appIdInt);
   };

   const getStoredAppList = () => {
      const storedAppList = localStorage.getItem("app-List");
      if (storedAppList) {
         return JSON.parse(storedAppList);
      }
      return [];
   };

   const saveAppList = (id) => {
      const storedAppList = getStoredAppList();
      const isExists = storedAppList.find((appId) => appId === id);

      if (!isExists) {
         storedAppList.push(id);
         localStorage.setItem("app-List", JSON.stringify(storedAppList));
         toast("added to App List  successfully");
      } else {
         toast("data already exists");
      }
   };

   return (
      <div className="mx-20 my-20">
         <div className="card card-side bg-base-100 shadow-sm my-5">
            <figure>
               <img className="" src={app.image} alt={app.title} />
            </figure>
            <div className="card-body">
               <div className="mb-2">
                  <h2 className="card-title font-bold text-2xl">{app?.title}</h2>
                  <p>Developed by appNova.io</p>
               </div>
               <hr />
               <div className="flex justify-start gap-10 my-3">
                  <div>
                     <img src={iconDownload} alt="Downloads" />
                     <p>Downloads</p>
                     <h1 className="text-2xl font-bold">{app.downloads}M</h1>
                  </div>
                  <div>
                     <img src={iconRating} alt="Rating" />
                     <p>Average Ratings</p>
                     <h1 className="text-2xl font-bold">{app.ratingAvg}</h1>
                  </div>
                  <div>
                     <img src={iconSize} alt="Size" />
                     <p>Total Reviews</p>
                     <h1 className="text-2xl font-bold">{app.reviews}K</h1>
                  </div>
               </div>
               <div className="card-actions justify-start">
                  <button onClick={handleInstalled} className="btn btn-accent">
                     {isSelected === true ? "Installed" : "Install Now"}
                  </button>
               </div>
            </div>
         </div>
         <hr />
         <div className="my-10">
            <RatingChart />
         </div>
         <div className="my-10">
            <hr />
            <h1 className="font-bold text-2xl mt-5">Description</h1>
            <p>{app.description}</p>
         </div>
         <ToastContainer />
      </div>
   );
};

export default AppDetails;
