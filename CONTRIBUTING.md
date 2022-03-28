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

## 发布

发布版本，需要确认当前需要升级到什么版本，参考：[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)

发布步骤如下：
1. 更新 `package.json` 的版本
2. 更新 `CHANGELOG` ，添加本次发布的变更信息
3. ~~打包可直接使用的代码： `npm run build:assets`~~ `于 0.7.0 移除` 
4. 在 develop 分支打上 tag（纯数字版本，如`0.1.0`）
5. 提交 commit 并推送到 origin

> 即会触发 CI/CD 流程：
    - 发布 npm 包
    - 上传小程序包
    - 更新 TDesign 官网

之后，还需要完成小程序的发布：
1. 在 TDesign 小程序体验版里面测试一下对应的变更是否正常
2. 通过之后需要到 [微信公众平台](https://mp.weixin.qq.com/) 将刚上传的版本提交审核
3. 等待审核通过之后需要点击发布，即完成本次发布