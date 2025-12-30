export function getInputClass(classPrefix, suffix, align, disabled) {
  const className = [`${classPrefix}__control`];

  if (align) {
    className.push(`${classPrefix}--${align}`);
  }

  if (disabled) {
    className.push(`${classPrefix}__control--disabled`);
  }
  return className.join(' ');
}

