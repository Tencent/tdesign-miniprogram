import { toKebabCase } from '../common/utils';

/**
 * 将主题变量对象转换为 CSS 变量对象
 * @param themeVars 主题变量对象
 * @param prefix CSS 变量前缀
 * @returns CSS 变量对象
 */
export default function themeVarsToCSS(
  themeVars: Record<string, string | number>,
  prefix: string = '--td-',
): Record<string, string> {
  const cssVarMap: Record<string, string> = {};

  Object.keys(themeVars).forEach((key) => {
    let cssVarName: string;

    // key 以 -- 开头，认为是标准的 css vars，直接使用
    if (key.startsWith('--')) {
      cssVarName = key;
    }
    // 如果 key 包含短横线，认为是 kebab-case 格式，直接使用
    else if (key.includes('-')) {
      cssVarName = `${prefix}${key}`;
    } else {
      cssVarName = `${prefix}${toKebabCase(key)}`;
    }

    cssVarMap[cssVarName] = String(themeVars[key]);
  });

  return cssVarMap;
}
