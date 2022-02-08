import React from "react";
import { useNavigate } from "react-router-dom";
interface PromoButtonConfirmProps {
  disabledButton: boolean;
}

const PromoButtonConfirm: React.FC<PromoButtonConfirmProps> = ({
  disabledButton,
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={
        !disabledButton
          ? "promo__confirm-tel"
          : "promo__element-with-nav promo__confirm-tel promo__confirm-tel_active"
      }
      disabled={!disabledButton}
      onClick={() => navigate("/final")}
      onFocus={(e) => e.target.classList.add("focused")}
      onBlur={(e) => e.target.classList.remove("focused")}
    >
      ПОДТВЕРДИТЬ НОМЕР
    </button>
  );
};

export default PromoButtonConfirm;
