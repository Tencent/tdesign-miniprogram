import config from '../config';

const { prefix } = config;

const defaultId = {
  // blur: Math.floor(Math.random() * 100), 保留 blur 功能，用于混淆 id 避免 id 重复，先不使用，如有必要再添加
  current: 0,
};

export const useId = (): string => `${prefix}-id-${defaultId.current++}`;
