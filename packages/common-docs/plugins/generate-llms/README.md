# generate-llms

站点构建时为每个组件生成 LLM 友好的纯 Markdown 文档（参考 ant.design 的 `button-cn.md` 格式），便于 AI/LLM/RAG 场景直接消费。

## 数据源

- 组件目录下的 `README.md`（frontmatter 含 title/description/spline，正文含引入方式、代码演示、API 表格）
- `{{ demo }}` 占位符替换为 `_example/` 目录下的真实源码块
- 站点专用 HTML（二维码、预览链接、提示块）会被转换为 Markdown 语义或移除

## 使用

```ts
import generateLlmsPlugin from '<相对路径>/common-docs/plugins/generate-llms';

export default function generateLlms() {
  return generateLlmsPlugin({
    componentMap: MOBILE_COMPONENT_MAP,
    componentsDir: '../../components',
    siteTitle: 'TDesign MiniProgram',
    siteDescription: 'TDesign 小程序端组件库的 LLM 友好文档索引。',
  });
}
```

## 配置项

- `componentMap`：组件清单映射（slug -> 导出组件名列表），决定文档生成范围与 `component` 字段
- `componentsDir`：组件根目录（相对 site root），默认 `../../components`
- `siteTitle` / `siteDescription`：`llms.txt` 索引标题与描述
- `readDemoCode`：demo 源码解析器，默认读取 `_example/<name>/index.{wxml,js,wxss,json}`；
  Vue 站点可自定义读取 `index.vue` 输出 SFC 代码块

## 产物

- `dist/llms/<slug>.md`：每个组件一份文档（frontmatter + 正文）
- `dist/llms.txt`：组件索引（标题、描述、相对链接）
