/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/zh-tw';

export default {
  actionSheet: {
    cancel: '取消',
  },
  calendar: {
    title: '請選擇日期',
    confirm: '確認',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: '{year} 年 {month}',
    months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  },
  cascader: {
    title: '標題',
    placeholder: '選擇選項',
  },
  dropdownMenu: {
    reset: '重置',
    confirm: '確定',
  },
  dateTimePicker: {
    dayjsLocale: 'zh-tw',
    title: '選擇時間',
    cancel: '取消',
    confirm: '確定',
    format: 'YYYY-MM-DD',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    yearLabel: '年',
    monthLabel: '月',
    dateLabel: '日',
    hourLabel: '時',
    minuteLabel: '分',
    secondLabel: '秒',
  },
  form: {
    errorMessage: {
      date: '請輸入正確的${name}',
      url: '請輸入正確的${name}',
      whitespace: '${name}不能為空',
      required: '${name}必填',
      max: '${name}字符長度不能超過 ${validate} 個字符，一個中文等於兩個字符',
      min: '${name}字符長度不能少於 ${validate} 個字符，一個中文等於兩個字符',
      len: '${name}字符長度必須是 ${validate}',
      enum: '${name}只能是${validate}等',
      idcard: '請輸入正確的${name}',
      telnumber: '請輸入正確的${name}',
      pattern: '請輸入正確的${name}',
      validator: '${name}不符合要求',
      boolean: '${name}數據類型必須是布林類型',
      number: '${name}必須是數字',
    },
    colonText: '：',
  },
  picker: {
    cancel: '取消',
    confirm: '確認',
  },
  pullDownRefresh: {
    loadingTexts: ['下拉刷新', '鬆手刷新', '正在刷新', '刷新完成'],
  },
  rate: {
    texts: ['極差', '失望', '一般', '滿意', '驚喜'],
    valueText: '{value} 分',
    noValueText: '未評分',
  },
  tabBar: {
    newsAriaLabel: '有新消息',
    moreNewsAriaLabel: '有很多消息',
    haveMoreNewsAriaLabel: '有 {value}+ 條消息',
    haveNewsAriaLabel: '有 {value} 條消息',
  },
  table: {
    empty: '暫無數據',
  },
  list: {
    loading: '加載中...',
    loadingMoreText: '點擊加載更多',
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...',
    success: '刷新成功',
  },
  upload: {
    progress: {
      uploadingText: '上傳中...',
      waitingText: '待上傳',
      failText: '上傳失敗',
      successText: '上傳成功',
    },
  },
  guide: {
    next: '下一步',
    skip: '跳過',
    finish: '完成',
    back: '返回',
  },
  qrcode: {
    expiredText: '二維碼過期',
    refreshText: '點擊刷新',
    scannedText: '已掃描',
  },
  attachments: {
    status: {
      pending: '上傳中...',
      fail: '上傳失敗',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: '刷新',
      copy: '複製',
      good: '點讚',
      bad: '點踩',
      share: '分享',
      quote: '引用',
    },
  },
  chatSender: {
    placeholder: '請輸入消息...',
    sendTexts: ['發送', '停止'],
  },
  chatThinking: {
    status: {
      pending: '正在思考中...',
      complete: '已完成思考',
      stop: '已停止思考',
    },
  },
};
