const mockMarkdownData = `# Markdown功能测试 (H1标题)

## 基础语法测试 (H2标题)

### 列表测试

- 无序列表项1
- 无序列表项2
    - 缩进列表项1（4个空格缩进）
    - 缩进列表项2（4个空格缩进）

1. 有序列表项1
2. 有序列表项2
    1. 缩进有序列表项1（4个空格缩进）
    2. 缩进有序列表项2（4个空格缩进）

### 代码块测试

\`\`\`javascript
// JavaScript 代码块
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('Markdown');
\`\`\`

### 其他元素

> 引用文本块
> 多行引用内容

**加粗文字** _斜体文字_ ~~删除线~~

这是一个链接 [TDesign](https://tdesign.tencent.com)。
`;

export default mockMarkdownData;
