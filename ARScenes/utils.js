export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomNum = (min, max) => {
  let random = Math.random() * (max - min + 1) + min;
  return Math.floor(random * 100) / 100;
};
