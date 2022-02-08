import React, { useEffect, useState } from "react";

import PromoCheckBox from "./PromoComponents/PromoCheckBox";
import PromoScreenButtons from "./PromoComponents/PromoScreenButtons";
import PromoInputTel from "./PromoComponents/PromoInputTel";
import PromoButtonConfirm from "./PromoComponents/PromoButtonConfirm";
import PromoClosePage from "./PromoComponents/PromoClosePage";

import { addTelValue } from "../../helpers/addTelValue";
import { removeTelValue } from "../../helpers/removeTelValue";
import { validateTel } from "../../api/validateTel";
import { keyboardNavigation } from "../../helpers/keyboardNavigation";

const telMask: string = "+7(___)___-__-__";

const Promo: React.FC = () => {
  const [telValue, setTelValue] = useState<string>(telMask);
  const [telValidate, setTelValidate] = useState<boolean>(false);
  const [confirmPersonalData, setConfirmPersonalData] =
    useState<boolean>(false);
  const [confirmTel, setConfirmTel] = useState<boolean>(false);

  const changeConfirmHandler = () => setConfirmPersonalData((prev) => !prev);

  const addTelValueHandler = (btnNumber: string) => {
    const newTel: string | null = addTelValue(telValue, btnNumber, "_");
    const btnAdd: any = document.querySelector(`.promo__add-btn_${btnNumber}`);
    btnAdd.focus();

    if (newTel) {
      setTelValue(newTel);
    }
  };

  const removeTelValueHandler = () => {
    const newTel: string | null = removeTelValue(telValue, telMask, "_");
    const btnRemove: any = document.querySelector(".promo__remove-btn");
    btnRemove.focus();

    if (newTel) {
      setTelValue(newTel);
    }
  };

  useEffect(() => {
    const tel: string = telValue
      .split("")
      .filter((number) => !isNaN(+number))
      .slice(1)
      .join("");

    if (tel.length === 10) {
      setTelValidate(true);
      validateTel(tel).then((json) => setTelValidate(json.valid));
    } else {
      setTelValidate(false);
    }
  }, [telValue]);

  useEffect(() => {
    const keyDownNavHandler = (event: KeyboardEvent) => {
      const btnWithNav: HTMLElement[] = Array.from(
        document.querySelectorAll(".promo__element-with-nav")
      );
      const focusedBtnIndex: number = btnWithNav.findIndex((btn) =>
        btn.className.includes("focused")
      );

      if (focusedBtnIndex !== -1) {
        keyboardNavigation(event, btnWithNav, focusedBtnIndex);
      } else {
        btnWithNav[0].focus();
      }
    };

    document.addEventListener("keydown", keyDownNavHandler);

    return () => document.removeEventListener("keydown", keyDownNavHandler);
  }, []);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (!isNaN(+event.key)) {
        addTelValueHandler(event.key);
      }

      if (event.code === "Backspace") {
        removeTelValueHandler();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  });

  useEffect(
    () => setConfirmTel(confirmPersonalData && telValidate),
    [confirmPersonalData, telValidate]
  );

  return (
    <div className="promo">
      <div className="promo__panel">
        <PromoInputTel telValue={telValue} telValidate={telValidate} />

        <PromoScreenButtons
          addTelValueHandler={addTelValueHandler}
          removeTelValueHandler={removeTelValueHandler}
        />

        <PromoCheckBox
          confirm={confirmPersonalData}
          changeConfirm={changeConfirmHandler}
          telValue={telValue}
          telValidate={telValidate}
        />

        <PromoButtonConfirm disabledButton={confirmTel} />
      </div>

      <PromoClosePage />
    </div>
  );
};

export default Promo;
