import React from "react";
import Picture from "../common/Picture";

const Cheese = () => {
  return (
    <div className="bg-[#1c1c1c]">
      <div
      // style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
      // className="bg-white"
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-12 gap-5 lg:gap-20 py-80 px-6 xl:px-0">
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm text-[#c5bfb1] uppercase mb-3">
              Now a Word about Cheese . . .
            </p>
            <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-white">
              Elevate Your Cheese Plate: Perfect Wine Pairings for Every Flavor
              Profile
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              If you want a truly cosmopolitan finish to your meal, a cheese
              plate is in order. Cheeses appear as parings with wine in almost
              every flavor profile. Soft, creamy cheeses work with many of the
              wines in the Green and Yellow flavor profiles, while hard cheese,
              like Gruyere or Cheddar work well with the Red flavor profile. But
              it is with the unctuous, even decadent wines of the Blue flavor
              profile that cheese shines!
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              We have mentioned Port, Madeira, Tokay, and Sauterne, which are
              all great pairings for cheese, but as the finale to a meal, I like
              to go back to two favorites: Riesling and Gewurztraminer. The more
              aromatic, fruity versions of these wines (numbers 3 or 4) make
              heavenly accompaniments to cheese, especially cheese made from
              sheep’s milk, like Manchego and Ewephoria.
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              Gewurztraminer wines are perfumed with aromas ranging from jasmine
              blossom to lychee and orange peel, all with a relatively full body
              and soft acidity, ranging from dry to sweet. Most readily
              associated with the Alsace region of northeastern France, the
              grape is nonetheless found in wine regions worldwide, including
              Germany, and the famed region of Alto Adige in Northern Italy.
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              Schlumberger makes some of the world’s greatest Gewürztraminers.
              This Grand Cru, paired with a cheese, makes a special holiday
              treat – memorable!
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 relative lg:gap-4">
            <div className="grid grid-cols-12 gap-4">
              <Picture
                src="/images/cheese.png"
                alt="history"
                className="col-span-12 lg:col-span-8 w-full h-full aspect-square object-contain rounded-md"
                priority={false}
              />
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                <Picture
                  src="/images/schlumberger.png"
                  alt="schlumberger"
                  className="w-full aspect-square object-contain rounded-md bg-white p-1"
                  priority={false}
                />
                <Picture
                  src="/images/cheese-platter.png"
                  alt="cheese-platter"
                  className="w-full aspect-square object-contain rounded-md bg-white p-1"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cheese;
