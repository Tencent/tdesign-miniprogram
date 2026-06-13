# @tdesign/uniapp-x

> TDesign UniApp X 组件库 — uts 兼容 + 原子化变体（cva） + Shadcn 风格 registry。

## 定位

- **目标平台**：uni-app x（H5 / Android / iOS 原生），**不**覆盖小程序（小程序继续使用 `uniapp-components`）
- **AI 友好**：每个组件都带 `registry.json` 元数据 + 单测 + 示例，LLM 可直接基于规范生成代码
- **TDD 开发**：每个组件先写 spec，再写实现，测试即文档

## 当前进度

> ✅ **Phase 0**：基础工具链与 TDD 链路
> ✅ **Phase 1**：首组件 Button + 渲染层 TDD 链路
> ✅ **Phase 2**：Cell + Input（验证插槽组合 / v-model）
> ✅ **Phase 3**：`registry.json` 自动构建脚本

| 模块 | 用例数 |
|---|---|
| `cn` 类名合并 | 16 |
| `cva` 变体引擎 | 13 |
| `Button` (variants + 渲染) | 37 |
| `Cell` (variants + 渲染) | 22 |
| `Input` (variants + 渲染) | 25 |
| `registry.json` 构建产物 | 6 |
| **合计** | **119** |

## 开发

```bash
# 在 monorepo 根目录
pnpm install

# 进入本包
cd packages/uniapp-x-components

# 单测
pnpm test            # 单次跑
pnpm test:watch      # watch
pnpm test:coverage   # 带覆盖率

# 类型检查
pnpm typecheck

# 构建 registry（每次组件变更后跑一次）
pnpm build:registry

# 同步到本机 HBuilderX 项目（先复制 .sync-targets.example.json 为 .sync-targets.json 并填路径）
pnpm sync            # 一次性全量同步
pnpm sync:watch      # 持续监听源码变更并增量同步
pnpm sync:dry        # 仅打印将要发生的变更
```

## VSCode ↔ HBuilderX 双 IDE 协作

`uniapp-x` 的 `.uvue` 编译只能在 HBuilderX 中跑；本包用 `cli/sync-to-hbuilderx.mjs` 把源码增量推到外部 HBuilderX 项目：

```
src/components/button/button.uvue        →  <hb-project>/components/button/button.uvue
src/components/button/button.types.ts    →  <hb-project>/components/button/button.types.uts
src/components/button/button.variants.ts →  <hb-project>/components/button/button.variants.uts
src/components/button/index.ts           →  <hb-project>/components/button/index.uts (.vue → .uvue 改写)
src/components/button/button.theme.less  →  <hb-project>/components/button/button.theme.less
src/utils/cn.ts                          →  <hb-project>/utils/cn.uts
```

**自动跳过**：`*.vue`（web 镜像）、`*.spec.ts` / `*.test.ts`。

**配置**：

```bash
cp .sync-targets.example.json .sync-targets.json
# 编辑 .sync-targets.json 把 root 指向你机器上的 HBuilderX 项目绝对路径
```

支持配置多个目标（同时同步给多个 demo 项目）。`.sync-targets.json` 已 gitignored，每台机器独立。


## Registry（Shadcn 风格分发）

执行 `pnpm build:registry` 后产生：

```
registry.json                  ← 总索引（不内联 content，~3.5KB）
registry/
├── utils.json                 ← cn / cva 工具
├── button.json                ← 含完整 vue / uvue / variants / theme / README
├── cell.json
└── input.json
```

每个 manifest 遵循下述 schema（与 shadcn 兼容）：

```json
{
  "$schema": "https://tdesign.tencent.com/uniapp-x/registry/schema.json",
  "name": "button",
  "type": "registry:component",
  "title": "Button",
  "description": "...",
  "dependencies": [],                  // 外部 npm 依赖
  "registryDependencies": ["utils"],   // 同 registry 的兄弟项
  "files": [
    { "path": "components/button/button.vue", "type": "registry:component", "content": "..." }
  ]
}
```

LLM / CLI 直接 fetch `registry/<name>.json` 即可拿到组件**完整源码 + 文档**，无需安装 npm 包。

## 设计决策

| 决策 | 取值 | 备注 |
|---|---|---|
| 包名 | `@tdesign/uniapp-x` | 与 `@tdesign/common` 同命名空间 |
| 类名前缀 | `t-` | 与 PC/Mobile/小程序版本统一 |
| uni-app x 版本 | `latest` | 跟随 HBuilderX 主版本 |
| Shadcn 分发 | 仅 `registry.json`（不做 MCP server） | CLI/AI 自行解析 |
| 工具函数后缀 | `.ts`（非 `.uts`） | 兼容 vitest，uni-app x 编译器同样可吃 `.ts` |
| 单测策略 | `.vue` 跑 vitest，`.uvue` 与 `.vue` 行为镜像 | uvue 编译器仅在 HBuilderX 中可用 |
