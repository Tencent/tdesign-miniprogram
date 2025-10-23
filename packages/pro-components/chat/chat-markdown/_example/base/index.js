// import { Lexer } from 'marked';
import markdownData from './mock-nodes.js';

// const lexer = new Lexer();

// const tokens = lexer.lex(markdownData);
// 内置marked处理
Page({
  data: {
    markdownContent: markdownData,
  },
});
