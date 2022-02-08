export const addTelValue = (tel: string, newValue: string, symbol: string) => {
  const index: number = tel.indexOf(symbol);

  if (index !== -1) {
    const telToArr: string[] = tel.split("");
    telToArr[index] = newValue;

    return telToArr.join("");
  }

  return null;
};
