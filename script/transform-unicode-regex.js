const { Transform } = require('stream');

/**
 * 小程序真机基础库的 JS 引擎不支持 ES2018 Unicode 属性转义（\p{L} / \p{N} / \p{P} / \p{S}）：
 * 模块加载编译正则时直接抛 SyntaxError，导致整个组件注册失败（见 issue #4694 / #4740）。
 *
 * 部分依赖（如 marked）源码里使用了这些转义。仓库内 uniapp 端已把 marked 的对应字符类
 * 换成 ASCII 等价类（见 packages/uniapp-pro-components/chat/npm/marked/uniapp.js），
 * 这里在构建期对提取出来的 npm 依赖做同样的替换，使小程序端与 APP 端行为一致。
 */
// 与 uniapp.js 中的 ASCII 标点符号类逐字符一致
const ASCII_PUNCTUATION = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
const ASCII_PUNCTUATION_CLASS = '[' + ASCII_PUNCTUATION + ']';

// 顺序敏感：先替换更长的组合，避免部分匹配
const REPLACEMENTS = [
  ['[\\s\\p{P}\\p{S}]', ASCII_PUNCTUATION_CLASS],
  ['[^\\s\\p{P}\\p{S}]', '[^\\s' + ASCII_PUNCTUATION + ']'],
  ['[\\p{P}\\p{S}]', ASCII_PUNCTUATION_CLASS],
  ['[\\p{L}\\p{N}]', '[A-Za-z0-9]'],
  // 兜底：单独出现的属性转义，避免残留导致真机解析失败
  ['\\p{L}', 'A-Za-z'],
  ['\\p{N}', '0-9'],
  ['\\p{P}', ASCII_PUNCTUATION],
  ['\\p{S}', ASCII_PUNCTUATION],
];

const UNICODE_PROPERTY_ESCAPE = /\\[pP]\{[A-Za-z_]+\}/;

const transform = (file) => {
  if (file.isNull() || !file.isBuffer()) return file;
  const source = file.contents.toString('utf8');
  if (!UNICODE_PROPERTY_ESCAPE.test(source)) return file;

  let output = source;
  REPLACEMENTS.forEach(([from, to]) => {
    output = output.split(from).join(to);
  });
  if (UNICODE_PROPERTY_ESCAPE.test(output)) {
    throw new Error('[transform-unicode-regex] 未能转换全部 Unicode 属性转义: ' + file.path);
  }
  file.contents = Buffer.from(output, 'utf8');
  return file;
};

module.exports = function transformUnicodeRegex() {
  return new Transform({
    objectMode: true,
    transform(file, enc, cb) {
      try {
        cb(null, transform(file));
      } catch (err) {
        cb(err);
      }
    },
  });
};
