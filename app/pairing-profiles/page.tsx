import React from "react";
import Banner from "../components/common/Banner";
import pairingProfilesData from "../data/pairing-profiles-data";
import { PairingProfileProps } from "../types/pairing-profiles";
import Picture from "../components/common/Picture";
import FadeDivider from "../components/common/FadeDivider";

const PairingProfiles = () => {
  return (
    <div className="bg-[#1c1c1c] flex flex-col z-10">
      <Banner
        src="/videos/pairing-profiles.mp4"
        text1="It’s a breeze to learn – just 5 colors and 4 numbers"
        text2="The numbers represent the residual sugar content, from 1 (very dry) to 4 (sweet)"
        text3="The colors represent a dominant flavor molecule."
      />
      <FadeDivider />
      <div className="max-w-[1140px] py-72 w-full mx-auto grid grid-cols-12 px-0 md:px-12 lg:px-10 xl:px-0 gap-y-10 md:gap-10">
        <div className="col-span-12 lg:col-span-8 order-2 lg:order-1">
          <div className="grid grid-cols-12 gap-3">
            {pairingProfilesData.map((obj: PairingProfileProps, i: number) => (
              <div
                key={i}
                className="col-span-12 md:col-span-6 bg-zinc-800 md:rounded-md"
              >
                <Picture
                  src={obj.image}
                  alt={obj.textKey}
                  className="w-full aspect-video px-3 py-6"
                  priority={false}
                />
                <div className="bg-[#f1eee8] p-5 md:rounded-br-md md:rounded-bl-md">
                  <p className="text-[#3c3a34] text-3xl font-LCD mb-3">
                    {obj.textKey}
                  </p>
                  <p className="text-[#3c3a34]">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 px-3 md:px-0 order-1 lg:order-2">
          <p className="text-sm text-[#c5bfb1] uppercase mb-3">
            A Simple Guide from Dry to Sweet
          </p>
          <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-white">
            Wine and Food Pairing Guide: Matching Dominant Flavors
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            The foods in each category pair perfectly with the wines in each
            category because they share the same dominant flavor.
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            The Numbers are easy – from 1 – 4, 1 being the driest wine with the
            least amount of residual sugar left over from fermentation, and 4
            being the sweetest, with the most residual sugar left over from
            fermentation. The numbers apply to the wine.
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            So for example, a Green -1 is a dry wine and a Blue 4 is a sweet
            wine. Note that sweet is not the same as fruity. Some wines are
            fruit-forward, as they are made from ripe grapes that get lots of
            sun, but they still finish dry. Juicy, fruity flavors come from the
            ripeness of the fruit. How dry or sweet a wine is comes from the
            R.S. (residual sugar, which is the sugar in the fruit that remains
            as the grapes are fermented into alcohol). The higher the alcohol
            content, the lower the residual sugar. A wine that is 8% alcohol is
            sweeter than a wine that is 14% alcohol by volume (ABV). Since this
            percentage is required on the label, it is a good way to estimate
            the sweetness of the wine.
          </p>
          <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
            For our purposes, number 1 is very dry, numbers 2 and 3 are off-dry
            (not bone dry, but aromatic and dry), and 4 is sweet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PairingProfiles;
