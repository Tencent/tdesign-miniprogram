Page({
  data: {
    currentTheme: 'light',
    fontSize: 'medium',
    fontSizeIndex: 1,
    fontSizeOptions: ['小', '中', '大'],
    fontSizeValues: ['small', 'medium', 'large'],
    lineHeight: 'normal',
    lineHeightIndex: 1,
    lineHeightOptions: ['紧凑', '正常', '宽松'],
    lineHeightValues: ['compact', 'normal', 'relaxed'],
    markdownContent: `# 主题演示

这是一个主题切换的演示页面。

## 功能说明

* **主题切换**: 支持明暗主题切换
* **字体大小**: 支持小、中、大三种字体大小
* **行高调整**: 支持紧凑、正常、宽松三种行高

## 代码示例

\`\`\`css
/* 这是一个 CSS 代码块 */
.theme-light {
  background-color: #fff;
  color: #333;
}

.theme-dark {
  background-color: #1a1a1a;
  color: #e0e0e0;
}
\`\`\`

## 使用提示

> 你可以通过上方的控制面板来调整主题和样式。

**粗体文本** 和 *斜体文本* 在不同主题下都有良好的显示效果。

行内代码：\`theme = 'dark'\`

[查看文档](https://tdesign.tencent.com/)`
  },

  toggleTheme() {
    const newTheme = this.data.currentTheme === 'light' ? 'dark' : 'light';
    this.setData({
      currentTheme: newTheme
    });
  },

  onFontSizeChange(e) {
    const index = e.detail.value;
    this.setData({
      fontSizeIndex: index,
      fontSize: this.data.fontSizeValues[index]
    });
  },

  onLineHeightChange(e) {
    const index = e.detail.value;
    this.setData({
      lineHeightIndex: index,
      lineHeight: this.data.lineHeightValues[index]
    });
  }
});
