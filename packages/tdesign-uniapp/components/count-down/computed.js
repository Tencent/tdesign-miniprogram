export const format = function (num) {
  return num < 10 ? `0${num}` : num;
};
