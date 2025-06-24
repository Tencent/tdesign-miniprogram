// dayjs 语言包
import enLocale from 'dayjs/locale/en';
import zhLocale from 'dayjs/locale/zh-cn';
import tcLocale from 'dayjs/locale/zh-tw'; // 繁体
import koLocale from 'dayjs/locale/ko'; // 韩语
import jaLocale from 'dayjs/locale/ja'; // 日语
import ruLocale from 'dayjs/locale/ru'; // 俄语

// 本地语言包
import en from './en';
import zh from './zh';
import tc from './tc';
import ko from './ko';
import ja from './ja';
import ru from './ru';

export default {
  default: {
    key: 'zh-cn',
    label: '简体中文',
    locale: zhLocale,
    i18n: zh,
  },
  en: {
    key: 'en',
    label: 'English',
    locale: enLocale,
    i18n: en,
  },
  'zh-cn': {
    key: 'zh-cn',
    label: '简体中文',
    locale: zhLocale,
    i18n: zh,
  },
  // 容错处理
  zh: {
    key: 'zh-cn',
    label: '简体中文',
    locale: zhLocale,
    i18n: zh,
  },
  'zh-tw': {
    key: 'zh-tw',
    label: '繁体中文',
    locale: tcLocale,
    i18n: tc,
  },
  // 容错处理
  tc: {
    key: 'zh-tw',
    label: '繁体中文',
    locale: tcLocale,
    i18n: tc,
  },
  ko: {
    key: 'ko',
    label: '한국어',
    locale: koLocale,
    i18n: ko,
  },
  // 容错处理
  kr: {
    key: 'ko',
    label: '한국어',
    locale: koLocale,
    i18n: ko,
  },
  ja: {
    key: 'ja',
    label: '日本語',
    locale: jaLocale,
    i18n: ja,
  },
  ru: {
    key: 'ru',
    label: 'русский',
    locale: ruLocale,
    i18n: ru,
  },
};
