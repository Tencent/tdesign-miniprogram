# generate-llms

为每个组件生成 LLM 友好的纯 Markdown 文档（参考 ant.design 的 `button-cn.md` 格式），便于 AI/LLM/RAG 场景直接消费。

## 数据源

- 组件目录下的 `README.md`（frontmatter 含 title/description/spline，正文含引入方式、代码演示、API 表格）
- `{{ demo }}` 占位符替换为 `_example/` 目录下的真实源码块
- 站点专用 HTML（二维码、预览链接、提示块）会被转换为 Markdown 语义或移除

## 使用

核心逻辑为**纯 JS 方法** `generateLlmsDocs`，与 vite 解耦（不引入任何构建工具类型）：

```ts
import generateLlmsDocs from '<相对路径>/common-docs/plugins/generate-llms';

await generateLlmsDocs({
  componentsRoot: '<组件根目录绝对路径>',
  outputDir: '<产物输出目录绝对路径>',
  componentMap: MOBILE_COMPONENT_MAP,
  siteTitle: 'TDesign MiniProgram',
  siteDescription: 'TDesign 小程序端组件库的 LLM 友好文档索引。',
});
```

各站点（miniprogram / miniprogram-chat / uniapp / uniapp-chat）用 vite 插件薄封装该纯方法，在 `closeBundle` 钩子里调用，站点构建时自动落盘。

## 配置项

- `componentsRoot`：组件根目录（绝对路径），目录下含各组件 `README.md` 与 `_example/`
- `outputDir`：产物输出目录（绝对路径），生成 `<outputDir>/llms/<slug>.md` 与 `<outputDir>/llms.txt`
- `componentMap`：组件清单映射（slug -> 导出组件名列表），决定文档生成范围与 `component` 字段
- `siteTitle` / `siteDescription`：`llms.txt` 索引标题与描述
- `readDemoCode`：demo 源码解析器，默认读取 `_example/<name>/index.{wxml,js,wxss,json}`；
  Vue 站点可自定义读取 `index.vue` 输出 SFC 代码块

## 产物

- `<outputDir>/llms/<slug>.md`：每个组件一份文档（frontmatter + 正文）
- `<outputDir>/llms.txt`：组件索引（标题、描述、相对链接）
