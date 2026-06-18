# @tdesign/uniapp-x

> TDesign Uniapp X 组件库 — uts 兼容 + 原子化变体（cva） + Shadcn 风格 registry。

## 定位

- **目标平台**：uni-app x（H5 / Android / iOS / Harmony 等原生），**不**覆盖小程序（小程序继续使用 `uniapp-components`）
- **AI 友好**：每个组件都带 `registry.json` 元数据 + 类型契约 + 示例，LLM 可直接基于规范生成代码
- **架构**：源仓只产 `.uvue` + `.uts`（不再做 web `.vue` 镜像与 vitest 单测，避免双轨维护成本）

## 目录结构

```
src/
├── components/                            ← 组件源码（可发布到 uni_modules）
│   ├── t-button/
│   │   ├── t-button.uvue                  ← 组件主体
│   │   ├── t-button.types.ts              ← Props/Emits 类型契约
│   │   ├── t-button.variants.ts           ← cva 变体引擎
│   │   ├── t-button.theme.less            ← 主题样式
│   │   ├── index.ts                       ← 桶导出（types/variants）
│   │   ├── README.md                      ← 组件文档
│   │   └── _example/                      ← 示例页（参考 uniapp-components 标准）
│   │       ├── t-button.uvue              ← 聚合入口
│   │       ├── base/index.uvue
│   │       ├── variant/index.uvue
│   │       └── …
│   ├── t-cell/   …
│   └── t-input/  …
├── pages-more/                            ← 调试页根（不进 uni_modules，不会被插件市场扫描）
│   └── index.uvue                         ← 总入口（列出所有组件入口）
└── utils/
    ├── cn.ts                              ← 类名合并
    ├── cva.ts                             ← 原子化变体引擎（uts 兼容）
    └── index.ts
```

> 关键约定：
> - 组件下的 `_example/` 目录前缀 `_` 是 uniapp-components 的标准约定，意味着它**只是开发期示例**；
> - 同步脚本会把 `_example/` **重定向到** `<starter-hx>/pages-more/tdesign-uniapp-x/<comp>/`，**不进 uni_modules**，
>   这样发布插件时不会带上调试页。

## 开发流程

```bash
cd packages/uniapp-x-components

pnpm typecheck                     # 类型检查
pnpm build:registry                # 重建 Shadcn 风格 registry
pnpm sync                          # 一次性同步到 HBuilderX 项目
pnpm sync:watch                    # 持续监听增量同步
pnpm sync:dry                      # 仅打印将要发生的变更
```

## VSCode ↔ HBuilderX 双 IDE 协作

`.uvue` 编译只能在 HBuilderX 中运行；本包用 `cli/sync-to-hbuilderx.mjs` 把源码增量推到外部 HBuilderX 项目，**组件本体走 uni_modules（可发布），调试页走 pages-more（仅本地）**：

```
src/components/t-<name>/<file>.ts          →  <hb>/uni_modules/<id>/components/t-<name>/<file>.uts
src/components/t-<name>/<file>.uvue        →  <hb>/uni_modules/<id>/components/t-<name>/<file>.uvue
src/components/t-<name>/<file>.less        →  <hb>/uni_modules/<id>/components/t-<name>/<file>.less
src/utils/<file>.ts                        →  <hb>/uni_modules/<id>/utils/<file>.uts

src/components/t-<name>/_example/<rest>    →  <hb>/pages-more/<id>/t-<name>/<rest>          ← 调试页
src/pages-more/<rest>                      →  <hb>/pages-more/<id>/<rest>                  ← 总入口页
```

带 `t-` 前缀的目录名与文件名刚好命中 HBuilderX 默认的 easycom 规则，**无需额外配置**即可在 `<template>` 中直接使用 `<t-button />` 等。

**配置**：

```bash
cp .sync-targets.example.json .sync-targets.json
# 编辑 .sync-targets.json 把 root 指向你机器上的 HBuilderX 项目绝对路径
```

支持配置多个目标（同时同步给多个 demo 项目）。`.sync-targets.json` 已 gitignored，每台机器独立。

## 在 HBuilderX 中跑示例

同步完成后，可在 starter-hx 项目的 `pages.json` 中**追加**几行，把示例页面挂出来调试（注意路径前缀是 `pages-more`，**不是 `uni_modules`**）：

```jsonc
{
  "pages": [
    // 原有 pages…

    // ↓↓↓ TDesign uni-app x 示例（新增）
    { "path": "pages-more/tdesign-uniapp-x/index", "style": { "navigationBarTitleText": "TDesign 示例" } },
    { "path": "pages-more/tdesign-uniapp-x/t-button/t-button", "style": { "navigationBarTitleText": "Button 按钮" } },
    { "path": "pages-more/tdesign-uniapp-x/t-cell/t-cell",     "style": { "navigationBarTitleText": "Cell 单元格" } },
    { "path": "pages-more/tdesign-uniapp-x/t-input/t-input",   "style": { "navigationBarTitleText": "Input 输入框" } }
  ]
}
```

> 从 `pages-more/tdesign-uniapp-x/index` 入口卡片点击即可跳转到具体组件 demo。

## Registry（Shadcn 风格分发）

执行 `pnpm build:registry` 后产生：

```
registry.json                  ← 总索引（不内联 content，~3.5KB）
registry/
├── utils.json                 ← cn / cva 工具
├── t-button.json              ← 含完整 uvue / variants / theme / README
├── t-cell.json
└── t-input.json
```

每个 manifest 遵循下述 schema（与 shadcn 兼容）：

```json
{
  "$schema": "https://tdesign.tencent.com/uniapp-x/registry/schema.json",
  "name": "t-button",
  "type": "registry:component",
  "title": "Button",
  "description": "...",
  "dependencies": [],
  "registryDependencies": ["utils"],
  "files": [
    { "path": "components/t-button/t-button.uvue", "type": "registry:component", "content": "..." }
  ]
}
```

LLM / CLI 直接 fetch `registry/<name>.json` 即可拿到组件**完整源码 + 文档**，无需安装 npm 包。

## 设计决策

| 决策 | 取值 | 备注 |
|---|---|---|
| 包名 | `@tdesign/uniapp-x` | 与 `@tdesign/common` 同命名空间 |
| 类名前缀 | `t-` | 与 PC/Mobile/小程序版本统一 |
| 目录命名 | `t-button/t-button.uvue` | 直接命中 HBuilderX easycom 规则，免配置 |
| uni-app x 版本 | `latest` | 跟随 HBuilderX 主版本 |
| Shadcn 分发 | 仅 `registry.json`（不做 MCP server） | CLI/AI 自行解析 |
| 工具函数后缀 | `.ts`（非 `.uts`） | 编辑器友好，同步时统一改写 `.ts → .uts` |
| 测试策略 | 不在源仓跑 vitest，依赖 HBuilderX 真机调试 + examples | uvue 编译器仅在 HBuilderX 中可用，跑 web 镜像是双轨成本 |
