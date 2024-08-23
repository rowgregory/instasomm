import React from "react";
import Picture from "../common/Picture";

const InfoPanelOne = () => {
  return (
    <div
      style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
      className="bg-white"
    >
      <div className="max-w-[1140px] mx-auto grid grid-cols-12 gap-5 lg:gap-20 py-80 px-6 xl:px-0 ">
        <div className="col-span-12 md:col-span-6">
          <p className="text-sm text-[#c5bfb1] uppercase mb-3">Insta-Somm</p>
          <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-[#1c1c1c]">
            Curated Wine Recommendations Tailored to Your Unique Taste
            Preferences
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            Insta-somm is the first objective, systematic method of pairing food
            and wine, based on the science of molecular gastronomy. Foods are
            matched with the wines that share the same molecular structure.
          </p>
          <p className="text-[#a6a6a6] text-sm leading-6">
            The dominant flavor molecule is represented by a color: green,
            yellow, red, orange, and blue. Each wine is also assigned a number
            and then paired with foods that match their level of acidity, from
            bone-dry (level 1) to sweet (level 4).
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 relative flex justify-center gap-5 lg:gap-10">
          <Picture
            src="/images/idea-1.jpg"
            alt="idea-1"
            className="h-80 md:h-48 lg:h-80 w-auto max-w-52 object-cover mt-20"
            priority={false}
          />
          <Picture
            src="/images/idea-2.jpg"
            alt="idea-2"
            className="h-80 md:h-48 lg:h-80 w-auto max-w-52 object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPanelOne;
