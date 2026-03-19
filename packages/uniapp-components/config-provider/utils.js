import { hyphenate } from '../common/utils';

/**
 * 将主题变量对象转换为 CSS 变量对象
 * @param {Object} themeVars 主题变量对象
 * @param {string} varPrefix CSS 变量前缀
 * @returns {Object} CSS 变量对象
 */
export default function themeVarsToCSS(themeVars, varPrefix = '--td-') {
  const cssVarMap = {};

  Object.keys(themeVars).forEach((key) => {
    let cssVarName;

    // key 以 -- 开头，认为是标准的 css vars，直接使用
    if (key.startsWith('--')) {
      cssVarName = key;
    } else if (key.includes('-')) {
      // 如果 key 包含短横线，认为是 kebab-case 格式，直接使用
      cssVarName = `${varPrefix}${key}`;
    } else {
      cssVarName = `${varPrefix}${hyphenate(key)}`;
    }

    cssVarMap[cssVarName] = String(themeVars[key]);
  });

  return cssVarMap;
}
