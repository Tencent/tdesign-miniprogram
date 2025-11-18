const toPascal = name => name
  .split('-')
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');


module.exports = {
  toPascal,
};
