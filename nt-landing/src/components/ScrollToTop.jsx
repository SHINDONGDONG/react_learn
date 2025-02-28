import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <div className={`scrollTop ${visible ? "visible" : ""}`}>
      <a href="#">
        <BsChevronUp />
      </a>
    </div>
  );
};
