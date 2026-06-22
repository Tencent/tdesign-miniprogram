const fs = require('fs');
const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

// const fixedDateComponentList = ['config-provider', 'time-picker', 'date-picker', 'table', 'form', 'calendar']; // 需要在测试阶段固定日期的组件，table中因为有filter例子 渲染datepicker需要固定

// 过滤掉一些导致测试挂掉的 demo，key 为组件名，value 为需要跳过的 demo 名称列表
// value 为 '*' 时表示跳过该组件的所有 demo，为数组时表示跳过指定的 demo
const filterDemo = {
  'chat-list': ['ec-canvas', 'agent'],
};

const defaultTemplate = ["import path from 'path';", "import simulate from 'miniprogram-simulate';"].join('\n');

// 需要扫描的组件目录列表，每项的 sourcePath/targetPath 指向包含各组件子目录的文件夹
const COMPONENT_DIRS = [
  {
    sourcePath: path.resolve(__dirname, '../../../components'),
    targetPath: path.resolve(__dirname, '../../../components'),
  },
  {
    sourcePath: path.resolve(__dirname, '../../../pro-components/chat'),
    targetPath: path.resolve(__dirname, '../../../pro-components/chat'),
  },
];

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

function outputOneComponentTestFile(component, demoFiles, srcPath, targetPath) {
  // 整个组件被过滤，直接跳过
  if (filterDemo[component] === '*') return;

  const outputPath = `${targetPath}/${component}/__test__`;
  const imports = [];
  const demos = [];
  let hasDemo = false;

  demoFiles.forEach((demo) => {
    const fp = path.resolve(`${srcPath}/${component}/_example/${demo}`);
    if (Array.isArray(filterDemo[component]) && filterDemo[component].includes(demo)) return;
    if (fs.statSync(fp).isDirectory() && demo !== 'skyline') {
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

function generateForDirectory(srcPath, targetPath) {
  fs.readdir(srcPath, (err, files) => {
    if (err) {
      console.log('Error', err);
    } else {
      const generation = (componentFolder) => {
        const demoPath = `${srcPath}/${componentFolder}/_example`;
        if (!fs.existsSync(demoPath)) return;
        fs.readdir(demoPath, (err1, demoFiles) => {
          if (err1) {
            console.log('Error', err1);
          } else {
            outputOneComponentTestFile(componentFolder, demoFiles, srcPath, targetPath);
          }
        });
      };
      files.forEach(generation);
    }
  });
}

function main() {
  COMPONENT_DIRS.forEach(({ sourcePath, targetPath }) => {
    generateForDirectory(sourcePath, targetPath);
  });
}

main();
