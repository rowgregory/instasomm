import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed z-[-1] w-full h-28 bottom-0 left-0 right-0 bg-[#0F0F0F] flex justify-center items-center gap-x-4 flex-wrap px-16">
      <p className="text-xs text-zinc-300">
        {new Date().getFullYear()} INSTA-SOMM. All rights reserved
      </p>
      <div className="bg-zinc-300 h-3 w-[1px]"></div>
      <Link className="text-xs text-zinc-300" href="/pairing-profiles">
        Pairing Profiles
      </Link>
      <div className="bg-zinc-300 h-3 w-[1px]"></div>
      <Link className="text-xs text-zinc-300" href="/pairing-list">
        Pairing List
      </Link>{" "}
      <div className="bg-zinc-300 h-3 w-[1px]"></div>
      <Link className="text-xs text-zinc-300" href="/privacy-policy">
        Privacy Policy
      </Link>{" "}
      <div className="bg-zinc-300 h-3 w-[1px]"></div>
      <Link className="text-xs text-zinc-300" href="/legal-notice">
        Legal Notice
      </Link>
    </footer>
  );
};

export default Footer;
