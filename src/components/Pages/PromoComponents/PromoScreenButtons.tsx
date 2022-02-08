import React from "react";
import PromoScreenButtonItem from "./PromoScreenButtonItem";

interface PromoScreenButtonListProps {
  addTelValueHandler(value: string): void;
  removeTelValueHandler(): void;
}

const telButtons: string[] = [...new Array(9)]
  .map((_, index) => (index + 1).toString())
  .concat(["Стереть", "0"]);

const PromoScreenButtons: React.FC<PromoScreenButtonListProps> = ({
  addTelValueHandler,
  removeTelValueHandler,
}) => {
  return (
    <div className="promo__btns-container">
      {telButtons.map((btn, index, array) =>
        !isNaN(+btn) ? (
          <PromoScreenButtonItem
            value={btn}
            handler={() => addTelValueHandler(btn)}
            className={`promo__element-with-nav promo__add-btn promo__add-btn_${
              index === array.length - 1 ? "0" : index + 1
            }`}
            key={btn}
          />
        ) : (
          <PromoScreenButtonItem
            value={btn}
            handler={removeTelValueHandler}
            className="promo__element-with-nav promo__remove-btn"
            key={btn}
          />
        )
      )}
    </div>
  );
};

export default PromoScreenButtons;
