import React from "react";
import Picture from "../common/Picture";

const TheIdea = () => {
  return (
    <div className="max-w-[1140px] w-full py-32 mx-auto grid grid-cols-12 gap-7 px-12">
      <div className="col-span-12 md:col-span-6">
        <Picture
          src="/images/idea.png"
          alt="The Idea"
          className="w-full h-auto transform -scale-x-100"
          priority={false}
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <p className="text-sm text-[#847c67] uppercase mb-3">Here's The Idea</p>
        <p className="text-4xl lg:text-5xl font-light mb-10 font-LCD text-white">
          Foods and Wines Have Matching Codes
        </p>
        <p className="text-sm text-[#6f6f6f] mb-5 leading-6">
          Anyone remember Garanimals, where little kids got dressed by matching
          the animal on the shirt to the animal on their pants, alligator to
          alligator, lion to lion? It’s kind of like that!
        </p>
        <p className="text-sm text-[#6f6f6f] mb-5 leading-6">
          So, just like the children did not have to know anything about fashion
          to get dressed, you really don’t have to know anything about food and
          wine to pair them. All you have to know is if a food and a wine are in
          the same color profile, they go together. Then, you just look at the
          number code of the wine, from 1 – 4, to know exactly which foods in
          that color profile will work best with a specific wine. There are so
          many choices, you are free to explore and choose what works best for
          you. You can be your own Somm!
        </p>
      </div>
    </div>
  );
};

export default TheIdea;
