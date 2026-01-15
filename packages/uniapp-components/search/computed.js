export const highLight = function (label, keyword) {
  return label.replace(keyword, `<span class="t-search__result-item--highLight">${keyword}</span>`);
};
