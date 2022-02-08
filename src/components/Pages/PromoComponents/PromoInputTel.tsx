import React from "react";
import { checkErrorTel } from "../../../helpers/checkErrorTel";

interface PromoInputTelProps {
  telValue: string;
  telValidate: boolean;
}

const PromoInputTel: React.FC<PromoInputTelProps> = ({
  telValue,
  telValidate,
}) => {
  const error = checkErrorTel(telValue, telValidate);

  return (
    <>
      <h2 className="promo__title">Введите ваш номер мобильного телефона</h2>
      <input
        type="text"
        id="promo-tel"
        className={error ? "promo__tel promo__tel_error" : "promo__tel"}
        disabled={true}
        value={telValue}
      />
      <label htmlFor="promo-tel" className="promo__label-tel">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </label>
    </>
  );
};

export default PromoInputTel;
