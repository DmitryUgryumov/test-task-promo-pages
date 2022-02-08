import React from "react";
import { Link, useParams } from "react-router-dom";
import btnClose from "../../../img/btn-close-white.svg";

const PromoClosePage = () => {
  return (
    <Link
      to="/"
      className="promo__element-with-nav promo__home-link"
      onFocus={(e) => e.target.classList.add("focused")}
      onBlur={(e) => e.target.classList.remove("focused")}
    >
      <img src={btnClose} alt="" />
    </Link>
  );
};

export default PromoClosePage;
