import React from "react";
import Picture from "../common/Picture";

const PairingSystem = () => {
  return (
    <div className="bg-[#1c1c1c]">
      <div
        style={{ clipPath: "polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)" }}
        className="bg-white"
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-12 gap-5 lg:gap-20 py-80 px-6 xl:px-0 ">
          <div className="col-span-12 md:col-span-6">
            <p className="text-sm text-[#c5bfb1] uppercase mb-3">
              Pairing System
            </p>
            <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-[#1c1c1c]">
              Vernaccia&apos;s Bright Notes with Prosciutto and Arugula Pizza
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              For example, Prosciutto and arugula pizza with pesto would match
              with the Green 1 or 2 wines. You could choose a white Vernaccia, a
              Cinsault rosé or a Cabernet Franc, if you wanted a red.
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              So I decide I want a white wine with my arugula, pesto and
              prosciutto pizza. I choose “Vernaccia.” Vernaccia is a white wine
              grape found in many Italian wines. The Vernaccia grape is most
              commonly associated with the wine Vernaccia di San Gimignano from
              the town of San Gimignano in Tuscany. It is one of the top wines
              from Tuscany, and the region’s first white wine with a DOCG
              (Denominazione di Origine Controllata e Garantita classification.)
              It is bright, citrusy, clean and crisp, with distinct notes of
              fennel and basil (which is why it works so well with pesto!)
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              Floral and herbal notes, citrus fruit, and a dry, crisp quality
              dominate the flavor of Vernaccia wine. It’s a medium-bodied wine
              with good acidity and a notable finish of flinty minerals or
              almonds, coming from the sand and clay soils of its environment
              (terroir).
            </p>
            <p className="mb-5 text-[#a6a6a6] text-sm leading-6">
              "Panizzi was born with the first vintage of this wine, in 1989.
              Produced from grapes originating from the totality of our
              winery&apos;s vineyards (Larniano, Montagnana, Santa Margherita,
              and Lazzeretto) Vernaccia Panizzi is the modern interpretation of
              an ancient wine full of history.” (winemakers notes)
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 relative flex justify-center gap-5 lg:gap-10">
            <Picture
              src="/images/pizza.png"
              alt="Prosciutto and arugula pizza with pesto"
              className="h-80 md:h-48 lg:h-80 w-auto max-w-52 object-cover mt-20 rounded-md"
              priority={false}
            />
            <Picture
              src="/images/panizzi.png"
              alt="Panizzi"
              className="h-80 md:h-48 lg:h-80 w-auto max-w-52 object-cover rounded-md"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairingSystem;
