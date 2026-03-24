const fs = require('fs');
const path = require('path');


function switchVersion(version) {
  const pkgPath = path.resolve(__dirname, '../../package.json');
  const pkg = require(pkgPath);
  if (version != 2) {
    return;
  }

  // Vue2 + Webpack4 不支持条件导出（exports map 中的 { types, import, default } 形式）
  // 将条件导出简化为直接路径映射，保留路径解析能力
  if (pkg.exports) {
    const simplified = {};
    for (const [key, value] of Object.entries(pkg.exports)) {
      if (typeof value === 'string') {
        simplified[key] = value;
      } else if (typeof value === 'object' && value !== null) {
        simplified[key] = value.default || value.import || value.types;
      }
    }
    pkg.exports = simplified;
  }

  const pkgStr = JSON.stringify(pkg, null, 2);

  fs.writeFileSync(pkgPath, pkgStr, 'utf-8');
}

function printVue2PostCSSWarning() {
  console.warn('\n');
  console.warn('⚠️  [TDesign UniApp Chat] 检测到当前使用 Vue2 环境');
  console.warn('   Vue2 项目需要在 postcss.config.js 中进行适配，否则样式可能无法正常工作。');
  console.warn('');
  console.warn('   📖 适配指南: https://juejin.cn/post/7602901195154030644');
  console.warn('   📦 Vue2 CLI 参考项目: https://github.com/TDesignOteam/tdesign-uniapp-starter-vue2-cli');
  console.warn('\n');
}


/**
 * 多重检测 Vue 版本，提升准确性
 * 优先级：环境变量 > require('vue') > 用户项目 package.json
 */
function detectVueVersion() {
  // 1. 环境变量优先
  if (process.env.npm_config_vueVersion) {
    return process.env.npm_config_vueVersion;
  }

  // 2. 尝试直接 require vue
  try {
    const Vue = require('vue');
    if (Vue && Vue.version) return Vue.version;
  } catch (e) {}

  // 3. 读用户项目的 package.json 中的 vue 版本声明
  try {
    const userPkgPath = path.resolve(process.cwd(), 'package.json');
    const userPkg = JSON.parse(fs.readFileSync(userPkgPath, 'utf-8'));
    const vueDep = (userPkg.dependencies && userPkg.dependencies.vue)
      || (userPkg.devDependencies && userPkg.devDependencies.vue);
    if (vueDep) return vueDep;
  } catch (e) {}

  return null;
}

function isVue2(version) {
  if (!version || typeof version !== 'string') return false;
  // 匹配 "2.x"、"^2.x"、"~2.x"、">=2.x" 等
  return /(?:^|[~^>=\s])2\./.test(version);
}

function isVue3(version) {
  if (!version || typeof version !== 'string') return false;
  return /(?:^|[~^>=\s])3\./.test(version);
}

function main() {
  const version = detectVueVersion();

  if (!version) {
    console.warn('[TDesign UniApp Chat] Vue is not found. Please run "npm install vue" to install.');
    return;
  }

  if (isVue2(version)) {
    switchVersion(2);
    printVue2PostCSSWarning();
  } else if (isVue3(version)) {
    switchVersion(3);
  } else {
    console.warn(`[TDesign UniApp Chat] Vue version ${version} is not supported.`);
  }
}

main();

