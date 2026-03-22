import React from "react";
import bannerImage from "../assets/hero.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";

const Banner = () => {
   return (
      <div>
         <div className="flex flex-col items-center  gap-6 pt-8">
            <h1 className="font-bold text-4xl text-center">
               We Build <br />
               <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-4xl">
                  Productive
               </span>{" "}
               Apps
            </h1>
            <p>
               At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
               and more exciting. <br />
               Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className="md:flex gap-4">
               <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="btn">
                  <IoLogoGooglePlaystore />
                  Google Play
               </a>
               <a
                  href="https://apps.apple.com/ly/watch/apps-and-games"
                  target="_blank"
                  className="btn"
               >
                  <FaAppStoreIos />
                  App Store
               </a>
            </div>
            <img src={bannerImage} alt="Hero Banner" />
         </div>
         <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-12 px-8 text-center">
            <h1 className="text-4xl font-bold">Trusted by Millions, Built for You</h1>
            <div className="lg:flex justify-center items-center md:gap-20 mt-8">
               <div>
                  <p>Total Downloads</p>
                  <h1 className="text-5xl font-bold my-2">29.6M</h1>
                  <p>21% more than last month</p>
               </div>
               <div>
                  <p>Total Reviews</p>
                  <h1 className="text-5xl font-bold my-2">906K</h1>
                  <p>46% more than last month</p>
               </div>
               <div>
                  <p>Active Apps</p>
                  <h1 className="text-5xl font-bold my-2">132+</h1>
                  <p>31 more will Launch</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
