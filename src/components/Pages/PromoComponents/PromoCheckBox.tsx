import React from "react";
import check from "../../../img/check.svg";
import { checkErrorTel } from "../../../helpers/checkErrorTel";

interface PromoCheckBoxProps {
  confirm: boolean;
  changeConfirm(): void;
  telValue: string;
  telValidate: boolean;
}

const PromoCheckBox: React.FC<PromoCheckBoxProps> = ({
  confirm,
  changeConfirm,
  telValue,
  telValidate,
}) => {
  const error: boolean = checkErrorTel(telValue, telValidate);

  if (error) {
    return (
      <div className="promo__confirm-tel_error">
        <span>НЕВЕРНО ВВЕДЕН НОМЕР</span>
      </div>
    );
  }

  return (
    <div className="promo__confirm-data-container" onClick={changeConfirm}>
      <button
        className="promo__element-with-nav"
        onFocus={(e) => e.target.classList.add("focused")}
        onBlur={(e) => e.target.classList.remove("focused")}
      >
        {confirm ? <img src={check} /> : ""}
      </button>
      <div className="promo__label-data">
        <p>Согласие на обработку</p>
        <p>персональных данных</p>
      </div>
    </div>
  );
};

export default PromoCheckBox;
