import { useState, useEffect } from "react";

const getBSbreakPoint = () => {
  const w = window.innerWidth;

  if (w < 576) return "xs";
  if (w >= 576 && w < 768) return "sm";
  if (w >= 768 && w < 992) return "md";
  if (w >= 992 && w < 1200) return "lg";
  if (w >= 1200 && w < 1400) return "xl";
  if (w >= 1400) return "xxl";
};

const useResize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    isMobile: false,
    bsBreakPoint: getBSbreakPoint(),
    vhMobile: window.innerHeight * 0.01
  });

  const updateSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      bsBreakPoint: getBSbreakPoint(),
      vhMobile: window.innerHeight * 0.01
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return screenSize;
};

export { useResize };
