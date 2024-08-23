import React, { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavigation from "./MobileNavigation";
import useHeaderAtTop from "../hooks/useHeaderAtTop";
import headerLinksData from "../data/header-links-data";
import { HeaderLinkProps } from "../types/header";
import pagesToExclude from "../utils/pagesToExclude";
import Image from "next/image";
import Picture from "./common/Picture";

const Header = () => {
  const pathname = usePathname();
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const close = (): void => setToggleMobileNavigation(false);
  const isAtTop = useHeaderAtTop();

  return (
    <Fragment>
      <MobileNavigation
        toggleMobileNavigation={toggleMobileNavigation}
        close={close}
      />
      <div
        className={`top-0 left-0 z-50 py-4 w-full flex items-center px-6 xl:px-3 duration-200 slide-down ${
          !isAtTop ? "bg-brown-1/70" : ""
        } ${pagesToExclude(pathname) ? "hidden" : "fixed"}`}
      >
        <div className="max-w-screen-xl mx-auto w-full flex lg:justify-between">
          <div className="flex lg:hidden items-center">
            <FontAwesomeIcon
              onClick={() => setToggleMobileNavigation(true)}
              icon={faBars}
              className="text-white w-10 cursor-pointer"
            />
          </div>
          <div className="flex items-center w-full justify-center lg:justify-between gap-8">
            <Link href="/">
              <Picture
                src="/images/insta-somm-logo.webp"
                alt="Insta-Somma"
                className="w-80 h-auto xl:w-96"
                priority={true}
              />
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              {headerLinksData(pathname).map(
                (obj: HeaderLinkProps, i: number) => (
                  <Link
                    key={i}
                    href={obj.linkKey}
                    className={`${
                      obj.active ? "text-white" : "text-slate-200"
                    } uppercase`}
                  >
                    {obj.textKey}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
