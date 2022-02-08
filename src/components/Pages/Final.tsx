import React from "react";
import { Link } from "react-router-dom";

import Slider from "../Slider/Slider";

import btnClose from "../../img/btn-close-white.svg";

const Final: React.FC = () => {
  return (
    <div className="final">
      <Slider />

      <Link to="/" className="final__close">
        <img src={btnClose} alt="" />
      </Link>
    </div>
  );
};

export default Final;
