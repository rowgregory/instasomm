import React from "react";
import Banner from "../components/common/Banner";
import FadeDivider from "../components/common/FadeDivider";
import PairingListTable from "../components/tables/PairingListTable";

const PairingList = () => {
  return (
    <div className="bg-[#1c1c1c] flex flex-col min-h-screen">
      <Banner
        src="/videos/pairing-list.mp4"
        text1="Perfect Pairings Crafted by Experts"
        text2="These Dishes and Varietals have been matched using the Insta-Somm system and pre-approved by the Wine PhD!"
        text3="Wine and Cuisine Harmony Guaranteed"
      />
      <FadeDivider />
      <PairingListTable />
    </div>
  );
};

export default PairingList;
