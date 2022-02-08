export const validateTel = (number: string) =>
  fetch(
    `http://apilayer.net/api/validate?access_key=6bddc0aae38fb2551bfd8b88242951ba&number=${number}&country_code=RU&format=1`
  ).then((response) => response.json());
