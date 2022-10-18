const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

// const fixedDateComponentList = ['config-provider', 'time-picker', 'date-picker', 'table', 'form', 'calendar']; // 需要在测试阶段固定日期的组件，table中因为有filter例子 渲染datepicker需要固定

// // TODO 过滤掉一些导致挂掉的demo
// const filterCom = ['table'];
// const filterDemo = {
//   table: ['virtual-scroll'],
// };

const CONFIG = {
  sourcePath: path.resolve(__dirname, 'src'),
  targetPath: path.resolve(__dirname, 'src'),
  defaultTemplate: ['import simulate from \'miniprogram-simulate\';', 'import path from \'path\';'].join('\n'),
};

/*
import simulate from 'miniprogram-simulate';
import getDemoPath from '../../../test/utils/getDemoPath';

describe('radio basic demo', () => {
  let id;
  beforeAll(() => {
    id = simulate.load(getDemoPath('radio', 'basic'), {
      less: true,
    });
  });
  test('demo should render correctly', async () => {
    const container = simulate.render(id);
    container.attach(document.createElement('parent-wrapper'));
    expect(container.toJSON()).toMatchSnapshot();
  });
});
*/

const { sourcePath, targetPath, defaultTemplate } = CONFIG;

const data = `/**
 * 该文件为由脚本 \`npm run test:demo\` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

${defaultTemplate}
{{ HERE IS DEMO LIST }}
`;

function getKeyFunction(component) {
  const newComponent = upperFirst(camelCase(component));

  return `
describe('${newComponent}', () => {
  mapper.forEach((demoName) => {
    it(\`${newComponent} \${demoName} demo works fine\`, () => {
      const id = load(path.resolve(__dirname, \`../../${component}/_example/\${demoName}/index\`), demoName);
      const container = simulate.render(id);
      container.attach(document.createElement('parent-wrapper'));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});`;
}

function outputOneComponentTestFile(component, demoFiles) {
  const outputPath = `${targetPath}/${component}/__test__`;
  const imports = [];
  const demos = [];
  let hasDemo = false;

  demoFiles.forEach((demo) => {
    const fp = path.resolve(`${sourcePath}/${component}/_example/${demo}`);
    // if (filterCom.includes(component) && filterDemo[component].includes(demo.replace('.vue', ''))) return;
    if (fs.statSync(fp).isDirectory()) {
      // const name = camelCase(demo);
      // imports.push(`import ${name} from '@/examples/${component}/demos/${demo}';`);
      demos.push(`'${demo}'`);
      hasDemo = true;
    }
  });
  // if (fixedDateComponentList.includes(component)) {
  //   imports.unshift('import MockDate from \'mockdate\';\n');
  //   imports.push('\nMockDate.set(\'2020-12-28\');');
  // }

  if (!hasDemo) return;

  const keyData = [imports.join('\n'), `const mapper = [${demos.join(', ')}];`, getKeyFunction(component)].join('\n');
  const testFileData = data.replace('{{ HERE IS DEMO LIST }}', keyData);
  fs.mkdir(outputPath, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFile(`${outputPath}/demo.test.js`, testFileData, (writeErr) => {
      if (writeErr) {
        return console.error(writeErr);
      }
      return console.log(`test file: ${outputPath} has been created.`);
    });
  });
}

function main() {
  fs.readdir(sourcePath, (err, files) => {
    if (err) {
      console.log('Error', err);
    } else {
      const generation = (componentFolder) => {
        const demoPath = `${sourcePath}/${componentFolder}/_example`;
        fs.readdir(demoPath, (err1, demoFiles) => {
          if (err1) {
            console.log('Error', err1);
          } else {
            outputOneComponentTestFile(componentFolder, demoFiles);
          }
        });
      }
      files.forEach(generation);
    }
  });
}

main();
