export const checkErrorTel = (tel: string, validate: boolean) => {
  const formatTel: string = tel
    .split("")
    .filter((n) => !isNaN(+n))
    .slice(1)
    .join("");

  return !validate && formatTel.length === 10;
};
