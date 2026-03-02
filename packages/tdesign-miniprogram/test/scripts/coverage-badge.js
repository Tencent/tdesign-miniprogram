const path = require('path');
const fs = require('fs');
const os = require('os');

const specify = process.argv[2];
const data = require('../unit/coverage/coverage-summary.json');

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

/**
 * 获取 README.md 文件路径
 * @param {string} component - 组件 key
 * @returns {string} README.md 文件路径
 */
function getReadmePath(component) {
  if (component.includes('/')) {
    const [group, subComponent] = component.split('/');
    return path.resolve(__dirname, `../../../pro-components/${group}/${subComponent}/README.md`);
  }
  return path.resolve(__dirname, `../../../components/${component}/README.md`);
}

/**
 * 生成覆盖率徽章 SVG
 * @param {string} type - 类型（lines/functions/statements/branches）
 * @param {number} percentage - 覆盖率百分比
 * @returns {string} SVG HTML 字符串
 */
function generateBadge(type, percentage) {
  const color = parseInt(percentage, 10) >= 80 ? 'blue' : 'red';
  return `<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20${type}-${percentage}%25-${color}" /></span>`;
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

// 生成并写入徽章到 README.md
ans.forEach((items, component) => {
  let svgs = '';
  Object.entries(items).forEach(([type, item]) => {
    let val = calculateCoverage(item);

    // 处理相关组件的合并覆盖率
    if (component in RELATED_MAP) {
      const related = ans.get(RELATED_MAP[component]);
      if (related) {
        const denominator = item.total + related[type].total;
        val = denominator === 0 ? '100' : (((item.covered + related[type].covered) / denominator) * 100).toFixed(0);
      }
    }

    const message = Number.isNaN(val) ? '0' : val;
    svgs += generateBadge(type, message);
  });

  if (!specify || component === specify) {
    const readmePath = getReadmePath(component);

    if (!fs.existsSync(readmePath)) return;

    let readme = fs.readFileSync(readmePath, { encoding: 'utf-8' });
    readme = readme.replace(/<span class="coverages-badge".+span>\n/g, '');
    readme = readme.replace('## 引入', `${svgs}\n## 引入`);
    fs.writeFileSync(readmePath, readme);
  }
});
