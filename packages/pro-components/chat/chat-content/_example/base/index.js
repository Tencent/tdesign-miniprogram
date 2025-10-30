// import { Lexer } from 'marked';
import markdownData from './mock.js';

// 创建Lexer实例时添加配置，禁用gfm规范中的缩进代码块
// const lexer = new Lexer({});

// const tokens = lexer.lex(markdownData);

Component({
  data: {
    userContent: {
      type: 'text',
      data: '这是用户发送的普通文本内容',
    },
    assistantContent: {
      type: 'markdown',
      data: markdownData,
    },
  },
  methods: {},
});
