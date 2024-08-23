import React from "react";
import Picture from "../common/Picture";

const TripToFrance = () => {
  return (
    <div className="w-full flex flex-col py-32">
      <h1 className="text-white text-5xl font-LCD text-center mb-20">
        A Trip to Saumur-Champigny, France
      </h1>
      <Picture
        src="/images/trip-to-france.png"
        alt="Trip to France"
        className="w-full max-w-[2000px] h-full mx-auto"
        priority={false}
      />
      <div className="flex items-center justify-center my-60 px-6">
        <div className="w-full max-w-80 h-0.5 bg-zinc-700"></div>
        <div className="w-full max-w-[8px] h-2 rounded-full mx-3 bg-zinc-700"></div>
        <div className="w-full max-w-80 h-0.5 bg-zinc-700"></div>
      </div>
      <div className="max-w-screen-lg mx-auto grid grid-cols-12 gap-5 lg:gap-10 px-6 xl:px-0">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-10">
          <Picture
            src="/images/vineyard.png"
            alt="Vineyard"
            className="w-full h-full object-cover rounded-md"
            priority={false}
          />
          <Picture
            src="/images/client.png"
            alt="Client"
            className="w-full h-full object-cover rounded-md"
            priority={false}
          />
        </div>
        <div className="col-span-12 md:col-span-5">
          <p className="text-sm text-[#847c67] uppercase mb-3">
            A Trip to France
          </p>
          <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-white">
            Unlocking the Secrets of Chenin Blanc and Cab Franc Pairings
          </p>
          <p className="text-sm text-[#848484] mb-5 leading-6">
            Insta-somm started with a trip to Chateau Yvonne, in the Loire
            Valley, where Chenin Blanc and Cabernet Franc are the varietals of
            the day. But, most Americans don’t know them, so the owner and
            winemaker, Matthieu Vallée, told me he has trouble selling them in
            the American market. I told him that we sell lots of Chenin and Cab
            Franc at my wine shop in Gloucester, Massachusetts. How? We do it by
            pairing them with the right foods. I explained that Chenin is one of
            the most versatile wines with many foods, including Asian, and
            Cabernet Franc is one of very few red wines that works with salads,
            vegan dishes, and things like artichokes and asparagus that are
            challenging matches.
          </p>
          <p className="text-sm text-[#848484] mb-5 leading-6">
            So the idea of developing a food and wine pairing system to
            introduce more people to great wines they may not know was born. A
            simple system that matches foods by color and number makes food and
            wine pairing easy and fool-proof for anyone!
          </p>
          <p className="text-sm text-[#848484] mb-5 leading-6">
            So the idea of developing a food and wine pairing system to Here I
            am with Chenin Blanc vines that are over 100 years old! No one
            should miss out on great wines made from the concentrated fruit of
            vines like this!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripToFrance;
