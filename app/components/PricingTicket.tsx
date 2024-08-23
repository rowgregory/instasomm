import React, { FC } from "react";
import Link from "next/link";
import { PricingTicketProps } from "../types/pricing";

const PricingTicket: FC<PricingTicketProps> = ({ obj }) => {
  return (
    <Link
      href={{
        pathname: "/auth/register",
        query: { plan: JSON.stringify(obj) },
      }}
      className="relative hover:-translate-y-1 duration-200"
    >
      <div
        className="bg-white rounded-3xl h-[500px] w-[350px] flex z-10 flex-col items-center relative "
        style={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className={`${obj.rectGradient} w-full h-[150px] rounded-tl-2xl rounded-tr-2xl overflow-hidden flex items-center justify-center`}
          style={{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="uppercase text-white font-semibold text-[32px]">
            {obj.freq}
          </h1>
        </div>
        <div
          className={`${obj.circleGradient} w-[150px] h-[75px] rounded-br-[75px] rounded-bl-[75px] overflow-hidden`}
          style={{
            boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <p className="text-[#656565] pt-10 text-sm">{obj.duration}</p>
        <div
          className={`${obj.rectGradient} w-52 h-[77px] absolute bottom-10 -left-5 flex items-center justify-center`}
          style={{
            clipPath: "polygon(10% 0%, 88% 0%, 100% 50%, 88% 100%, 0 100%)",
          }}
        >
          <p className="text-white font-semibold text-3xl">{obj.cost}</p>
        </div>
        <div
          className={`${obj.triangleGradient} w-5 h-5 flex items-center justify-center absolute bottom-[20px] -left-[20px]`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)",
          }}
        ></div>
        <div
          className={`${obj.rectGradient} text-white uppercase flex items-center justify-center font-bold px-4 py-2 rounded-full absolute bottom-[55px] right-[25px] hover:shadow-lg duration-200 hover:-translate-y-1`}
        >
          {obj.btnText}
        </div>
      </div>
      <div
        className={`${obj.rectGradient} absolute z-0 left-[26px] -bottom-5 w-[300px] h-5 rounded-br-3xl rounded-bl-3xl`}
      ></div>
    </Link>
  );
};

export default PricingTicket;
