import { useState, useEffect } from "react";

const useHeaderAtTop = (threshold: number = 0): boolean => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsAtTop(scrollTop <= threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isAtTop;
};

export default useHeaderAtTop;
