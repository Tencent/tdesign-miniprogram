# @tdesign/uniapp-x-harness

TDesign UniApp X 组件**视觉对齐** + **AI 自动修复**工具链。

## 架构

```
                  ┌────────────────┐
                  │ tdesign-uniapp │  baseline（线上 demo + 源码 props.ts/vue/less）
                  └────────────────┘
                           ▲
       ┌───────────────────┼───────────────────┐
       │                   │                   │
   ┌─Playwright──┐    ┌─audit-props─┐     ┌─pixel-diff─┐
   │ baseline.png│    │ missing/    │     │ diffRatio  │
   │ target.png  │    │ extra props │     │ diff.png   │
   └──────┬──────┘    └──────┬──────┘     └──────┬─────┘
          └───────────────┬──┴──┬───────────────┘
                          ▼     ▼
                    ┌────────────────┐
                    │  Knot LLM 代理 │  kimi-k2.6（OpenAI 兼容）
                    │ (e2e-knot-proxy)│
                    └────────┬───────┘
                             ▼
                ┌─────────────────────────┐
                │ FILE block patches      │
                │  → t-input.uvue/.less/  │
                │    .types.ts/.variants  │
                └─────────────────────────┘
```

## 安装

```bash
cd packages/uniapp-x-components/cli/harness
npm install            # 装 playwright/openai/pixelmatch/...
npx playwright install chromium
cp .env.example .env   # 已经 gitignore，写入 KNOT_AGENT_ID/KNOT_API_TOKEN
```

> 注意：HBuilderX 启动的 H5 dev server（默认 `http://localhost:5177/web`）需要保持开启，本工具靠它来渲染 target。

## 用法

```bash
# 1. 仅审计：列出缺失/多余的 props + 视觉 diff，不改代码
node run.mjs audit t-input

# 2. 仅截图（双端）
node run.mjs screenshot t-input

# 3. 闭环：截图 → diff → LLM → 写文件 → 再截图，最多 N 轮
node run.mjs fix t-input --rounds 3

# 干跑：只生成 patch 不应用
node run.mjs fix t-input --dry-run
```

## 产物

- `runs/<comp>/<timestamp>/baseline/*.png`：baseline 截图
- `runs/<comp>/<timestamp>/target/*.png`：当前 target 截图
- `runs/<comp>/<timestamp>/diff/*.png`：像素差图
- `runs/<comp>/<timestamp>/round-N/`：每轮 LLM 的 prompt.md / response.txt / before/
- `runs/<comp>/<timestamp>/report.json`：机器可读审计报告

`runs/` 已 gitignore。

## LLM 写入安全护栏

- LLM **只能**写以下 4 个文件：`<comp>.uvue` / `<comp>.theme.less` / `<comp>.types.ts` / `<comp>.variants.ts`
- 写入前会备份原文件到 `runs/<...>/round-N/before/`
- LLM 输出被解析为 `<<<FILE path="...">>> ... <<<END>>>` 块；不在白名单的 path 直接拒绝

## 添加新组件

编辑 `config.mjs`，往 `COMPONENTS` 加一条：

```js
't-cell': {
  name: 't-cell',
  baseline: {
    sourceDir: path.join(UNIAPP_COMPONENTS, 'cell'),
    propsFile: 'props.ts',
    typeFile: 'type.ts',
    demoPath: '/#/pages-more/cell/cell',
  },
  target: {
    sourceDir: path.join(UNI_X_COMPONENTS, 't-cell'),
    typesFile: 't-cell.types.ts',
    themeFile: 't-cell.theme.less',
    uvueFile: 't-cell.uvue',
    variantsFile: 't-cell.variants.ts',
    demoPath: '/#/pages-more/tdesign-uniapp-x/t-cell/t-cell',
  },
  cases: ['base', 'align', 'arrow', 'bordered', 'disabled', 'required'],
},
```
