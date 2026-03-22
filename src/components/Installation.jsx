import React, { useEffect, useState } from "react";
import iconDownload from "../assets/icon-downloads.png";
import iconRating from "../assets/icon-ratings.png";
import { useLoaderData } from "react-router-dom";
import { getStoredAppList } from "./localstorage";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
   const apps = useLoaderData();

   const [displayApps, setDisplayApps] = useState([]);

   useEffect(() => {
      const appListIds = getStoredAppList();

      if (apps.length > 0) {
         const appList = [];
         for (const id of appListIds) {
            const app = apps.find((app) => app.id === id);
            if (app) {
               appList.push(app);
            }
         }
         setDisplayApps(appList);
      }
   }, [apps]);

   const handleDelete = (id) => {
      const updatedApps = displayApps.filter((app) => app.id !== id);
      setDisplayApps(updatedApps);
      const storedAppList = getStoredAppList();
      const updatedAppList = storedAppList.filter((appId) => appId !== id);
      localStorage.setItem("app-List", JSON.stringify(updatedAppList));
      toast("App Uninstalled Successfully!");
   };

   return (
      <div className="mx-20 my-20">
         <div className="text-center my-20">
            <h1 className="text-3xl font-bold">Your Installed Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
         </div>
         {displayApps.map((app) => (
            <ul className="list bg-base-100 rounded-box shadow-md mb-5">
               <li key={app.id} className="list-row">
                  <div>
                     <img className="size-10 rounded-box" src={app.image} alt={app.title} />
                  </div>
                  <div className="md:list-col-grow">
                     <div className="font-bold text-xl mb-1">{app.title}</div>
                     <div className="text-xs uppercase font-semibold opacity-60 md:flex gap-3">
                        <div className="flex">
                           <img className="w-4 h-4 mr-1" src={iconDownload} alt="Downloads" />
                           <p>{app.downloads}M</p>
                        </div>
                        <div className="flex">
                           <img className="w-4 h-4 mr-1" src={iconRating} alt="Ratings" />
                           <p>{app.ratingAvg}</p>
                        </div>
                        <div>
                           <p>{app.size}MB</p>
                        </div>
                     </div>
                  </div>
                  <button onClick={() => handleDelete(app.id)} className="btn btn-accent">
                     Uninstall
                  </button>
               </li>
            </ul>
         ))}
         <ToastContainer />
      </div>
   );
};

export default Installation;
