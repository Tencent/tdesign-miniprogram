---
title: 贡献指南
# description: 
spline: explain
---
## 开发规范

### 前缀

组件和 `CSS` 前缀以 `t-` 开头，无论 `JS` 还是 `CSS` 都使用变量定义前缀，方便后续替换。

### JavaScript

遵循Airbnb `JavaScript` 编码规范：[standards/javascript](https://github.com/airbnb/javascript)

使用 `npm run lintfix` 执行自动修复 `ESLint` 错误

### CSS

组件样式使用 LESS 开发，需要遵循 TDesign 相关规范: [CSS 命名规范](https://github.com/Tencent/tdesign-common/blob/main/css-naming.md)

### Git

#### 分支

主仓库遵循使用 Git Flow 规范，新组件分支从 `develop checkout`：[《A successful Git branching model》](https://nvie.com/posts/a-successful-git-branching-model/)

如果是贡献组件，则从 `develop checkout` ， 分支如：`feature/button`

#### 提交说明

使用的提交规范：[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

每次提交会自动触发提交验证

- 使用工具 commitizen 协助规范 git commit 信息
- fix & feat 的提交会被用来生成 changelog
- 提交会触发 git pre-commit 检查，修复提示的 ESLint 错误

## 开发

### 安装依赖

```bash
npm i
```

### 开发服务

```bash
npm start
```

此时会同时启动 `dist` 与 `example` 的构建服务，对应的开发路径与构建路径分别为：

- `src` -> `miniprogram_dist`
- `example` -> `_example`

使用微信开发者工具导入项目 `_example` 文件夹

### 组件开发

- 在 `src` 路径下创建组件文件夹及对应的 `wxml` `ts` `json` `md` 文件
- 在 `example/pages` 路径下创建组件示例页面，路由路径规范未`pages/${组件名}/${组件名}`，例如 `pages/button/button`
- 进行组件开发与示例页开发

### 官方文档开发

官方文档的代码目录在项目中 `site` 子目录中。
如何本地编译运行官方文档，参考 [CONTRIBUTING.md](https://github.com/Tencent/tdesign-miniprogram/blob/main/site/README.md)

### 单元测试和集成测试
单元测试和集成测试采用 [miniprogram-simulate](https://github.com/wechat-miniprogram/miniprogram-simulate) + [jest](https://jestjs.io/docs/en/getting-started.html) 

用例需要在 `src` 路径下的组件目录中新建 `__test__` 目录，并新建对应测试文件，例如`src/radio/__test__/index.test.js`

```bash
npm run test
```

### 端到端测试
端到端测试采用 [miniprogram-automator](https://developers.weixin.qq.com/miniprogram/dev/devtools/auto/) + [jest](https://jestjs.io/docs/en/getting-started.html) 

用例需要在 `example/pages` 路径下的组件目录中新建 `__test__` 目录，并新建对应测试文件，例如 `example/pages/radio/__test__/index.test.js`

```bash
npm run test:e2e
```
