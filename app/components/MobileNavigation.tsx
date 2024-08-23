import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FC, useEffect } from "react";
import headerLinksData from "../data/header-links-data";
import { usePathname } from "next/navigation";
import { HeaderLinkProps, MobileNavigationProps } from "../types/header";
import Picture from "./common/Picture";

const MobileNavigation: FC<MobileNavigationProps> = ({
  toggleMobileNavigation,
  close,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (toggleMobileNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggleMobileNavigation]);

  return (
    <div
      className={`${
        toggleMobileNavigation
          ? "h-screen left-0 bottom-0 right-0 overflow-hidden"
          : "top-[-100vh] h-none"
      } fixed duration-200 min-h-screen bg-[#130e26] top-0 left-0 right-0 flex flex-col items-center justify-center gap-5 z-[60]`}
    >
      <FontAwesomeIcon
        onClick={close}
        icon={faTimes}
        className="text-white w-10 top-4 right-4 absolute cursor-pointer"
      />
      <Link href="/" onClick={close}>
        <Picture
          src="/images/insta-somm-logo.webp"
          className="w-60 cursor-pointer mt-10"
          alt="Insta-Somm"
          priority={true}
        />
      </Link>
      {headerLinksData(pathname).map((obj: HeaderLinkProps, i: number) => (
        <Link
          key={i}
          onClick={close}
          className={`${
            obj.active ? "text-[#130e26]" : "text-white"
          } uppercase font-light`}
          href={obj.linkKey}
        >
          {obj.textKey}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavigation;
