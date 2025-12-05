import props from './props';


export const messageDefaultData = Object.keys(props).reduce((acc, key) => {
  const result = props[key].default;
  return {
    ...acc,
    [key]: typeof result === 'function' ? result() : result,
  };
}, {});
