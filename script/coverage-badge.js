const path = require('path');
const fs = require('fs');

const specify = process.argv[2];

const data = require('../test/unit/coverage/coverage-summary.json');

const ans = new Map();

Object.keys(data).forEach((fPath) => {
  if (fPath.startsWith('/')) {
    const [, component] = /src\/([\w-]+)\//.exec(fPath) ?? [];

    if (component) {
      if (!fPath.includes('/_example/')) {
        const set = data[fPath];
        const target = ans.get(component) ?? {
          lines: { total: 0, covered: 0, skipped: 0 },
          functions: { total: 0, covered: 0, skipped: 0 },
          statements: { total: 0, covered: 0, skipped: 0 },
          branches: { total: 0, covered: 0, skipped: 0 },
        };

        Object.entries(set).forEach(([type, dataset]) => {
          Object.entries(dataset).forEach(([category, val]) => {
            target[type][category] = val + target[type][category];
          });
        });
        ans.set(component, target);
      }
    }
  }
});

ans.forEach((items, component) => {
  let svgs = '';
  Object.entries(items).forEach(([type, item]) => {
    let val = ((item.covered / item.total) * 100).toFixed(0);
    const relatedMap = {
      avatar: 'avatar-group',
      button: 'button-group',
      cell: 'cell-group',
      checkbox: 'checkbox-group',
      'dropdown-menu': 'dropdown-item',
      grid: 'grid-item',
      picker: 'picker-item',
      radio: 'radio-group',
      steps: 'step-item',
      // swiper: ['swiper-item', 'swiper-nav'],
      'tab-bar': 'tab-bar-item',
      tabs: 'tab-panel',
      tag: 'check-tag',
    };

    if (component in relatedMap) {
      const related = ans.get(relatedMap[component]);
      if (related) {
        val = (((item.covered + related[type].covered) / (item.total + related[type].total)) * 100).toFixed(0);
      }
    }
    const message = isNaN(val) ? '0' : val;
    const color = parseInt(val, 10) > 80 ? 'blue' : 'red';

    svgs += `<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20${type}-${message}%25-${color}" /></span>`;
  });

  if ((specify && component === specify) || !specify) {
    const fPath = path.resolve(__dirname, `../src/${component}/README.md`);
    let readme = fs.readFileSync(fPath, { encoding: 'utf-8' });

    readme = readme.replace(/<span class="coverages-badge".+span>\n/g, '');
    readme = readme.replace('## 引入', `${svgs}\n## 引入`);
    fs.writeFileSync(fPath, readme);
  }
});
