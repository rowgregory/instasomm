"use client";

import React from "react";
import pricingData from "../data/pricing-data";
import { PricingProps } from "../types/pricing";
import PricingTicket from "../components/PricingTicket";

const Pricing = () => {
  return (
    <div className="bg-[#1c1c1c] min-h-screen pt-72">
      <div className="flex items-center gap-10 w-full mx-auto justify-center">
        {pricingData.map((obj: PricingProps, i: number) => (
          <PricingTicket key={i} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
