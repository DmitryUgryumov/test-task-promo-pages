const btnFocusMinusOne = (buttonsArray: HTMLElement[], index: number) => {
  if (buttonsArray[index - 1] === undefined) {
    buttonsArray[buttonsArray.length - 1].focus();
  } else {
    buttonsArray[index - 1].focus();
  }
};

const btnFocusPlusOne = (buttonsArray: HTMLElement[], index: number) => {
  if (buttonsArray[index + 1] === undefined) {
    buttonsArray[0].focus();
  } else {
    buttonsArray[index + 1].focus();
  }
};

export const keyboardNavigation = (
  event: KeyboardEvent,
  btnWithNav: HTMLElement[],
  focusedBtnIndex: number
) => {
  const focusedNumber: number = +btnWithNav[focusedBtnIndex].className
    .split("")
    .filter((number: string) => !isNaN(+number) && number !== " ")[0];

  switch (event.code) {
    case "ArrowRight":
      btnFocusPlusOne(btnWithNav, focusedBtnIndex);
      break;
    case "ArrowLeft":
      btnFocusMinusOne(btnWithNav, focusedBtnIndex);
      break;
    case "ArrowDown":
      if (focusedNumber >= 1 && focusedNumber <= 7) {
        btnWithNav[focusedBtnIndex + 3].focus();
      } else if (focusedNumber >= 8 && focusedNumber <= 9) {
        btnWithNav[focusedBtnIndex + 2].focus();
      } else {
        btnFocusPlusOne(btnWithNav, focusedBtnIndex);
      }
      break;
    case "ArrowUp":
      if (isNaN(focusedNumber)) {
        btnFocusMinusOne(btnWithNav, focusedBtnIndex);
      } else if (focusedNumber >= 4 && focusedNumber <= 9) {
        btnWithNav[focusedBtnIndex - 3].focus();
      } else if (focusedNumber >= 1 && focusedNumber <= 3) {
        btnWithNav[btnWithNav.length - 1].focus();
      } else if (focusedNumber === 0) {
        btnWithNav[focusedBtnIndex - 2].focus();
      }
      break;
  }
};
