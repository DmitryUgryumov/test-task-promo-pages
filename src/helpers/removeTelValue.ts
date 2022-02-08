export const removeTelValue = (
  tel: string,
  telMask: string,
  symbol: string
) => {
  const lastNumber: number = tel
    .split("")
    .reverse()
    .findIndex((letter, index) => !isNaN(+letter) && index !== 14);

  if (lastNumber !== -1) {
    const telToArr: string[] = tel.split("");
    telToArr[telMask.length - 1 - lastNumber] = symbol;

    return telToArr.join("");
  }

  return null;
};
