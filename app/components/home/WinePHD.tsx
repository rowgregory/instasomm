"use client";

import React, { useRef } from "react";
import Picture from "../common/Picture";
import useOnScreen from "@/app/hooks/useOnScreen";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WinePHD = () => {
  const ref1 = useRef(null) as any;
  const isVisible1 = useOnScreen(ref1, { threshold: 1 });
  const ref2 = useRef(null) as any;
  const isVisible2 = useOnScreen(ref2, { threshold: 0.0001 });
  const ref3 = useRef(null) as any;
  const isVisible3 = useOnScreen(ref3, { threshold: 1 });
  const ref4 = useRef(null) as any;
  const isVisible4 = useOnScreen(ref4, { threshold: 1 });

  return (
    <div className="max-w-[1440px] w-full py-72 mx-auto flex flex-col justify-center items-center relative px-10">
      <p
        ref={ref1}
        className={`${
          isVisible1 ? "text-fade-in-up" : "opacity-0"
        } text-4xl lg:text-5xl font-light mb-40 font-LCD text-white text-center w-full max-w-4xl`}
      >
        Insta-somm is a method of pairing food with wine, based on the science
        of molecular gastronomy.
      </p>
      <Picture
        imgRef={ref2}
        src="/images/floating-island.png"
        alt="Tree-1"
        className={` w-[20000px] float ${isVisible2 ? "visible" : "opacity-0"}`}
        priority={true}
      />
      <p
        ref={ref3}
        className={`${
          isVisible3 ? "text-fade-in-up" : "opacity-0"
        } text-4xl font-light mt-40 mb-20 font-LCD text-white text-center w-full max-w-4xl`}
      >
        Let the Wine PhD show you how it works!
      </p>
      <Link
        ref={ref4}
        href="/pairing-profiles"
        className={`text-lime-500 font-LCD border-4 border-lime-500 rounded-full px-7 py-3 text-2xl uppercase hover:bg-lime-500 hover:text-white duration-200 group ${
          isVisible4 ? "text-fade-in-up" : "opacity-0"
        }`}
      >
        Pairing Profiles{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ml-2 group-hover:translate-x-2 duration-200"
        />
      </Link>
    </div>
  );
};

export default WinePHD;
