const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const ts = require('typescript');
const { PROJECT_ROOT } = require('./config');

const COMPILE_TS = false;
const GENERATE_DTS = false;


/** 编译选项，与根目录 tsconfig.json 中的 compilerOptions 保持一致 */
const COMPILER_OPTIONS = {
  target: ts.ScriptTarget.ES2015,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  esModuleInterop: true,
  allowSyntheticDefaultImports: true,
  experimentalDecorators: true,
  declaration: false,
  skipLibCheck: true,
  resolveJsonModule: true,
  allowJs: true,
  removeComments: false,
};

/**
 * 将单个 .ts 文件编译为 .js 文件
 * @param {string} inputFile 源 .ts 文件的绝对路径
 * @param {string} rawOutputFile 目标文件的绝对路径（仍是 .ts 后缀，函数内部会改为 .js）
 * @returns {boolean|undefined} 成功返回 true，非 .ts 文件返回 undefined
 */
function processTs(inputFile, rawOutputFile) {
  if (!COMPILE_TS) return;

  // 只处理 .ts 文件（排除 .d.ts）
  if (!inputFile.endsWith('.ts') || inputFile.endsWith('.d.ts')) {
    return;
  }

  // 跳过纯类型定义文件（props.ts / type.ts / common.ts），这些文件仅提供类型声明，不需要编译为 JS
  const basename = path.basename(inputFile);
  if (basename === 'props.ts' || basename === 'type.ts' || basename === 'common.ts') {
    return;
  }

  try {
    const tsCode = fs.readFileSync(inputFile, 'utf8');

    const result = ts.transpileModule(tsCode, {
      compilerOptions: COMPILER_OPTIONS,
      fileName: path.basename(inputFile),
    });

    // 将 4 空格缩进转换为 2 空格缩进
    const outputText = result.outputText.replace(/^( {4})+/gm, match => '  '.repeat(match.length / 4));

    // 输出文件后缀改为 .js
    const outputFile = rawOutputFile.replace(/\.ts$/, '.js');
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, outputText);
    console.log(`✅ TS 编译完成: ${path.relative(PROJECT_ROOT, outputFile)}`);
    return true;
  } catch (err) {
    console.error(`❌ TS 编译失败: ${inputFile}`, err);
    return false;
  }
}

/**
 * 使用 tsc 命令行批量生成 .d.ts 声明文件
 * @param {string} sourceDir 源码根目录（如 uniapp-components）
 * @param {string} targetDir 输出目录（如 dist）
 */
function generateDts(sourceDir, targetDir) {
  if (!GENERATE_DTS) return;
  // 收集 sourceDir 下所有 .ts 文件（排除 .d.ts、node_modules、_example）
  const tsFiles = collectTsFiles(sourceDir);

  if (tsFiles.length === 0) {
    console.log('⚠️ 未找到需要生成 .d.ts 的 .ts 文件');
    return;
  }

  console.log(`\n📝 开始生成 .d.ts 声明文件，共 ${tsFiles.length} 个 .ts 文件...`);

  // 创建临时 tsconfig 文件，避免命令行参数过长
  const tmpTsConfig = path.join(sourceDir, '.tsconfig.dts.tmp.json');
  const tsconfigContent = {
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      skipLibCheck: true,
      target: 'ES2015',
      lib: ['ES2015', 'ES2016', 'ES2017', 'DOM'],
      module: 'ESNext',
      moduleResolution: 'node',
      experimentalDecorators: true,
      types: ['miniprogram-api-typings', '@dcloudio/types'],
      baseUrl: sourceDir,
      paths: {
        './superComponent': ['./superComponent.placeholder'],
      },
      outDir: targetDir,
      rootDir: sourceDir,
    },
    files: tsFiles,
  };

  fs.writeFileSync(tmpTsConfig, JSON.stringify(tsconfigContent, null, 2));

  const tscBin = path.resolve(PROJECT_ROOT, 'node_modules/.bin/tsc');

  try {
    execSync(`"${tscBin}" --project "${tmpTsConfig}"`, {
      cwd: PROJECT_ROOT,
      stdio: 'pipe',
    });
    console.log(`✅ .d.ts 声明文件生成完成，输出到 ${path.relative(PROJECT_ROOT, targetDir)}`);
  } catch (err) {
    const stdout = err.stdout ? err.stdout.toString() : '';
    const stderr = err.stderr ? err.stderr.toString() : '';
    const errorOutput = stdout || stderr;
    // tsc 有类型错误但默认 noEmitOnError=false，.d.ts 仍然会生成
    // 仅打印警告，不中断流程
    if (errorOutput) {
      console.warn(`⚠️ tsc 生成 .d.ts 时存在类型警告（不影响产物生成）:\n${errorOutput}`);
    }
    console.log(`✅ .d.ts 声明文件生成完成（含警告），输出到 ${path.relative(PROJECT_ROOT, targetDir)}`);
  } finally {
    // 清理临时文件
    try {
      fs.unlinkSync(tmpTsConfig);
    } catch (e) { /* ignore */ }
  }
}

/**
 * 递归收集目录下的所有 .ts 文件（排除 .d.ts、node_modules、_example）
 */
function collectTsFiles(dir) {
  const results = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === '_example') continue;
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts') && !entry.name.endsWith('.d.ts')) {
        results.push(fullPath);
      }
    }
  }

  walk(dir);
  return results;
}

module.exports = {
  processTs,
  generateDts,
};
