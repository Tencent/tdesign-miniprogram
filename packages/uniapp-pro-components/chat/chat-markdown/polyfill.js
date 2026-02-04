function basePolyfill() {
  if (!Array.prototype.at) {
    Array.prototype.at = function (index) {
    // 将索引转换为数字
      index = Math.trunc(index) || 0;
      // 如果索引是负数，则从数组末尾开始计算
      if (index < 0) index += this.length;
      // 如果计算后的索引超出范围，则返回 undefined
      if (index < 0 || index >= this.length) return undefined;
      // 返回指定索引的元素
      return this[index];
    };
  }

  if (!String.prototype.at) {
    String.prototype.at = function (index) {
    // 将索引转换为数字
      index = Math.trunc(index) || 0;
      // 如果索引是负数，则从字符串末尾开始计算
      if (index < 0) index += this.length;
      // 如果计算后的索引超出范围，则返回空字符串
      if (index < 0 || index >= this.length) return '';
      // 返回指定索引的字符
      return this[index];
    };
  }
}

try {
  basePolyfill();
} catch (e) {}
