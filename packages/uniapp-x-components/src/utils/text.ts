/**
 * 文本相关工具（uts 兼容子集）
 *
 * - getCharacterLength：按 'maxlength' 或 'maxcharacter' 计算并截取字符串。
 *   `maxcharacter` 下一个汉字 / 高位字符算 2 个长度；
 *   `maxlength` 下任意字符均算 1。
 *
 * 与 packages/uniapp-components/common/utils.js 的 getCharacterLength 对齐，
 * 行为完全一致，便于双端表现统一。
 */

export type CharCountMode = 'maxlength' | 'maxcharacter';

export interface CharCountResult {
  /** 计数长度（受 mode 影响） */
  length: number;
  /** 截断后的字符串；当 char 未超出限制时即原值 */
  characters: string;
}

/**
 * 计算字符串字符长度并可截取
 *
 * @param type - 计数模式
 * @param char - 输入文本（null/undefined 视为空串）
 * @param max  - 上限；<=0 时不截断，仅返回长度
 */
export function getCharacterLength(
  type: CharCountMode,
  char: string | null | undefined,
  max: number,
): CharCountResult {
  const str = char == null ? '' : String(char);

  if (str.length === 0) {
    return { length: 0, characters: '' };
  }

  if (type === 'maxcharacter') {
    let len = 0;
    for (let i = 0; i < str.length; i += 1) {
      // 高位字符（中文 / emoji 高代理对 / `^` 强制 2 长度）按 2 计
      const code = str.charCodeAt(i);
      const currentStringLength = code > 127 || code === 94 ? 2 : 1;
      if (max > 0 && len + currentStringLength > max) {
        return { length: len, characters: str.slice(0, i) };
      }
      len += currentStringLength;
    }
    return { length: len, characters: str };
  }

  // maxlength
  if (max > 0 && str.length > max) {
    return { length: max, characters: str.slice(0, max) };
  }
  return { length: str.length, characters: str };
}

export default getCharacterLength;
