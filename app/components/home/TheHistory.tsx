import React from "react";
import Picture from "../common/Picture";

const TheHistory = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
      className="bg-white"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-12 gap-5 lg:gap-20 py-96 px-6 xl:px-0">
        <div className="col-span-12 md:col-span-6">
          <p className="text-sm text-[#c5bfb1] uppercase mb-3">The History</p>
          <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-[#1c1c1c]">
            Revolutionizing Flavor: From El Bulli to Molecular Wine Pairing
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            It all began at the famous Spanish restaurant, El Bulli, 5-time
            winner of the title “Best Restaurant in the World.”
          </p>
          <p className="text-[#a6a6a6] text-sm leading-6">
            Its renowned chefs, Juli Soler and Ferran Adrià, began experimenting
            with numerous avant-garde cooking techniques that led to an interest
            in the molecular structure of food and how it reacts to different
            cooking techniques. But it was the French Canadian sommelier,
            François Chartier, in his groundbreaking work Tastebuds and
            Molecules, who began pairing food with wine, based on the molecular
            structure of each.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 relative flex justify-center gap-5 lg:gap-10">
          <Picture
            src="/images/history.png"
            alt="history"
            className="w-full h-full aspect-square object-contain rounded-md"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TheHistory;
