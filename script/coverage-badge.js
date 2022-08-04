const path = require('path');
const fs = require('fs');

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
    const val = ((item.covered / item.total) * 100).toFixed(0);
    const message = isNaN(val) ? '0' : val;
    const color = parseInt(val, 10) > 80 ? 'blue' : 'red';

    svgs += `<span style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20${type}-${message}%25-${color}" /></span>`;
  });

  const fPath = path.resolve(__dirname, `../src/${component}/README.md`);
  let readme = fs.readFileSync(fPath, { encoding: 'utf-8' });

  readme = readme.replace(/<span.+span>/gm, '');
  readme = readme.replace('## 引入', `${svgs}\n## 引入`);
  fs.writeFileSync(fPath, readme);
});
