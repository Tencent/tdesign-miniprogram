export function mergeDefaultProps<T extends Record<string, any>>(
  originalProps: T,
  defaultProps: Partial<T>
): T {
  const result: any = { ...originalProps };
  
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      // 只有当原始props中该属性为undefined时，才使用默认值
      if (result[key] === undefined) {
        result[key] = defaultProps[key];
      }
    }
  }
  
  return result as T;
}