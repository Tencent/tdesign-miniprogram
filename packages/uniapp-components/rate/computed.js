export default {
  getText(texts, val, defaultTexts) {
    if (!texts.length) {
      texts = defaultTexts;
    }
    const curVal = Math.floor(val - 1);
    return texts[curVal] || '未评分';
  },

  getIconName(defaultValue, value, index, icon) {
    const curVal = value >= 0 ? value : defaultValue;
    let name = ['star-filled', 'star-filled'];

    if (icon) {
      name = Array.isArray(icon) ? icon : [icon, icon];
    }

    return name[curVal >= index + 1 ? 0 : 1];
  },

  getIconClass(classPrefix, defaultValue, value, index, allowHalf, disabled, scaleIndex) {
    const curVal = value >= 0 ? value : defaultValue;
    const className = [];
    if (curVal >= index + 1) {
      className.push(`${classPrefix}--selected`);
      if (disabled) {
        className.push(`${classPrefix}--disabled`);
      }
      if (scaleIndex === index + 1) {
        className.push(`${classPrefix}--current`);
      }
    } else if (allowHalf && curVal - index > 0) {
      className.push(`${classPrefix}--selected-half`);
      if (scaleIndex === index + 1) {
        className.push(`${classPrefix}--current`);
      }
      if (disabled) {
        className.push(`${classPrefix}--disabled-half`);
      }
    } else {
      className.push(`${classPrefix}--unselected`);
    }
    return className.join(' ');
  },

  ceil(value) {
    return Math.ceil(value);
  },

  getColor(color) {
    if (Array.isArray(color) && color.length === 2) {
      return `;--td-rate-selected-color: ${color[0]}; --td-rate-unselected-color: ${color[1]}`;
    }

    if (typeof color === 'string') {
      return `;--td-rate-selected-color: ${color}`;
    }

    return '';
  },

  regSize(val) {
    const value = `${val}`;
    return value.indexOf('px') ? value : `${value}px`;
  },
};
