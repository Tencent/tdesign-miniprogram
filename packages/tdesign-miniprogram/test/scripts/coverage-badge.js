const path = require('path');
const fs = require('fs');
const os = require('os');

const data = require('../unit/coverage/coverage-summary.json');

// 覆盖率数据模块输出路径（供站点 md-to-vue.ts 引用）
const COVERAGE_MODULE_PATH = path.resolve(__dirname, '../../site/test-coverage.ts');

// 父子组件映射表
const RELATED_MAP = {
  avatar: 'avatar-group',
  button: 'button-group',
  cell: 'cell-group',
  checkbox: 'checkbox-group',
  'dropdown-menu': 'dropdown-item',
  grid: 'grid-item',
  picker: 'picker-item',
  radio: 'radio-group',
  steps: 'step-item',
  'tab-bar': 'tab-bar-item',
  tabs: 'tab-panel',
  tag: 'check-tag',
  paragraph: ['paragraph', 'text', 'title'],
};

/**
 * 规范化文件路径（兼容 Windows）
 */
function normalizePath(fPath) {
  return os.platform() === 'win32' ? fPath.slice(2).replace(/\\/g, '/') : fPath;
}

/**
 * 从路径中提取组件 key
 * @param {string} fPath - 文件路径
 * @returns {string|null} 组件 key
 */
function extractComponentKey(fPath) {
  const componentMatch = /packages\/components\/([\w-]+)\//.exec(fPath);
  if (componentMatch) return componentMatch[1];

  const proComponentMatch = /packages\/pro-components\/([\w-]+)\/([\w-]+)\//.exec(fPath);
  if (proComponentMatch) return `${proComponentMatch[1]}/${proComponentMatch[2]}`;

  return null;
}

/**
 * 计算覆盖率百分比
 * @param {object} item - 覆盖率数据项
 * @returns {string} 百分比字符串
 */
function calculateCoverage(item) {
  if (item.total === 0) return '100';
  return ((item.covered / item.total) * 100).toFixed(0);
}

const ans = new Map();

// 聚合覆盖率数据
Object.keys(data).forEach((fPath) => {
  const _fPath = normalizePath(fPath);
  if (!_fPath.startsWith('/')) return;

  const componentKey = extractComponentKey(_fPath);
  if (!componentKey || fPath.includes('/_example/')) return;

  const set = data[fPath];
  const existing = ans.get(componentKey);
  const target = existing || {
    lines: { total: 0, covered: 0, skipped: 0 },
    functions: { total: 0, covered: 0, skipped: 0 },
    statements: { total: 0, covered: 0, skipped: 0 },
    branches: { total: 0, covered: 0, skipped: 0 },
  };

  Object.entries(set).forEach(([type, dataset]) => {
    Object.entries(dataset).forEach(([category, val]) => {
      target[type][category] += val;
    });
  });
  ans.set(componentKey, target);
});

// 计算每个组件的覆盖率（含父子组件合并），生成覆盖率数据 map
const coverageMap = {};

ans.forEach((items, component) => {
  const result = {};
  let allZero = true;

  Object.entries(items).forEach(([type, item]) => {
    let val = calculateCoverage(item);

    // 处理相关组件的合并覆盖率
    if (component in RELATED_MAP) {
      const relatedKeys = Array.isArray(RELATED_MAP[component]) ? RELATED_MAP[component] : [RELATED_MAP[component]];
      let totalSum = item.total;
      let coveredSum = item.covered;
      relatedKeys.forEach((key) => {
        const related = ans.get(key);
        if (related) {
          totalSum += related[type].total;
          coveredSum += related[type].covered;
        }
      });
      val = totalSum === 0 ? '100' : ((coveredSum / totalSum) * 100).toFixed(0);
    }

    const message = Number.isNaN(val) ? '0' : val;
    if (message !== '0') {
      allZero = false;
    }
    result[type] = `${message}%`;
  });

  // 覆盖率全为 0 时不生成数据
  if (!allZero) {
    coverageMap[component] = result;
  }
});

// 生成覆盖率数据模块
const sortedKeys = Object.keys(coverageMap).sort();
const entries = sortedKeys
  .map((key) => {
    const { lines, functions, statements, branches } = coverageMap[key];
    return `  '${key}': { lines: '${lines}', functions: '${functions}', statements: '${statements}', branches: '${branches}' },`;
  })
  .join('\n');

const moduleContent = `// 该文件由 test/scripts/coverage-badge.js 自动生成，请勿手动修改
export default {
${entries}
};
`;

fs.writeFileSync(COVERAGE_MODULE_PATH, moduleContent);
