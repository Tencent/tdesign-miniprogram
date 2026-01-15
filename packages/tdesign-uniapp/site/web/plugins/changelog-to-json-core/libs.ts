import { MOBILE_COMPONENT_MAP, NON_PASCAL_CASE_NAMES, WEB_COMPONENT_MAP } from './components';
import type { Platform } from './types';

export const convert2PascalCase = (name: string) => name
  .split('-')
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');

export const COMPONENT_MAPS = {
  web: WEB_COMPONENT_MAP,
  mobile: MOBILE_COMPONENT_MAP,
};

export const mapToParentName = (name: string, platform: Platform) => {
  const targetMap = COMPONENT_MAPS[platform];

  const found = Object.entries(targetMap).find(([_, values]) => values.includes(name));

  // 返回父组件名
  if (found) return NON_PASCAL_CASE_NAMES[found[0]] || convert2PascalCase(found[0]);

  return null;
};
