import { classNames } from '../common/utils';
import type { BaseTableCol } from './type';

export function get(obj: any, path: string) {
  if (!obj || !path) return undefined;
  const keys = path.split('.');
  let result = obj;
  keys.forEach((key) => {
    if (result !== undefined && result !== null) {
      result = result[key];
    }
  });
  return result;
}

export function formatCSSUnit(unit: string | number | undefined) {
  if (!unit) return unit;
  return Number.isNaN(Number(unit)) ? unit : `${unit}px`;
}

export function getColumnClassName(col: BaseTableCol, context: Record<string, any>) {
  const columnClassName = col.className || (col as any)['class-name'];

  if (Array.isArray(columnClassName)) {
    return classNames(columnClassName.map((item) => getColumnClassName({ className: item }, context)));
  }

  return classNames(typeof columnClassName === 'function' ? columnClassName(context) : columnClassName);
}
