import React, { useState, useEffect } from "react";
import Upicon from "@material-ui/icons/ArrowUpward";
import "../styles/ScrollToTop.css";
import "../App";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">

      {showTopBtn && (
        <Upicon className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};
export default ScrollToTop;
