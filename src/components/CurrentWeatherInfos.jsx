import React from "react";
import Wind from "./Wind";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

const CurrentWeatherInfos = (props) => (
  <div className="main-section-bts">
    <div className="main-section-bt">
      <Wind />
    </div>
    <div className="main-section-bt">
      <Sunrise />
    </div>
    <div className="main-section-bt">
      <Sunset />
    </div>
  </div>
);
export default CurrentWeatherInfos;
