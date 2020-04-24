import React from "react";
import "./style/style.css";
import banner from "./style/banner.jpg";

function Banner() {
  return (
    <top-banner>
      <div id="banner-bg" className="center">
        <img src={banner} alt="Banner" />
      </div>
    </top-banner>
  );
}
export default Banner;
