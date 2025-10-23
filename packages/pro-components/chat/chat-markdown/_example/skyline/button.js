Page({
  data: {
    markdownContent: `# Skyline 渲染引擎

这是使用 Skyline 渲染引擎的演示页面。

## Skyline 优势

* **性能提升**: 渲染性能显著提升
* **内存优化**: 内存占用更少
* **动画流畅**: 动画效果更加流畅
* **兼容性好**: 向下兼容传统渲染引擎

## 性能对比

\`\`\`javascript
// 性能测试代码
const startTime = Date.now();

// 渲染大量内容
for (let i = 0; i < 1000; i++) {
  // 渲染操作
}

const endTime = Date.now();
console.log(\`渲染耗时: \${endTime - startTime}ms\`);
\`\`\`

## 使用建议

> Skyline 渲染引擎特别适合渲染大量文本内容的场景。

**性能优化**: 在聊天应用中，Skyline 可以显著提升长文本的渲染性能。

行内代码：\`renderEngine = 'skyline'\`

[了解更多 Skyline 信息](https://developers.weixin.qq.com/miniprogram/dev/framework/skyline/)`
  }
});
