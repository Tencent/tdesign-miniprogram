/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/zh-cn';

export default {
  actionSheet: {
    cancel: '取消',
  },
  calendar: {
    title: '请选择日期',
    confirm: '确认',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: '{year} 年 {month}',
    months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  },
  cascader: {
    title: '标题',
    placeholder: '选择选项',
  },
  dropdownMenu: {
    reset: '重置',
    confirm: '确定',
  },
  dateTimePicker: {
    dayjsLocale: 'zh-cn',
    title: '选择时间',
    cancel: '取消',
    confirm: '确定',
    format: 'YYYY-MM-DD',
    months: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
    yearLabel: '年',
    monthLabel: '月',
    dateLabel: '日',
    hourLabel: '时',
    minuteLabel: '分',
    secondLabel: '秒',
  },
  form: {
    errorMessage: {
      date: '请输入正确的${name}',
      url: '请输入正确的${name}',
      required: '${name}必填',
      whitespace: '${name}不能为空',
      max: '${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符',
      min: '${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符',
      len: '${name}字符长度必须是 ${validate}',
      enum: '${name}只能是${validate}等',
      idcard: '请输入正确的${name}',
      telnumber: '请输入正确的${name}',
      pattern: '请输入正确的${name}',
      validator: '${name}不符合要求',
      boolean: '${name}数据类型必须是布尔类型',
      number: '${name}必须是数字',
    },
    colonText: '：',
  },
  picker: {
    cancel: '取消',
    confirm: '确认',
  },
  pullDownRefresh: {
    loadingTexts: ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'],
  },
  rate: {
    texts: ['极差', '失望', '一般', '满意', '惊喜'],
    valueText: '{value} 分',
    noValueText: '未评分',
  },
  tabBar: {
    newsAriaLabel: '有新的消息',
    moreNewsAriaLabel: '有很多消息',
    haveMoreNewsAriaLabel: '有 {value}+ 条消息',
    haveNewsAriaLabel: '有 {value} 条消息',
  },
  table: {
    empty: '暂无数据',
  },
  list: {
    loading: '加载中...',
    loadingMoreText: '点击加载更多',
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...',
    success: '刷新成功',
  },
  upload: {
    progress: {
      uploadingText: '上传中...',
      waitingText: '待上传',
      failText: '上传失败',
      successText: '上传成功',
      reloadText: '重新上传',
    },
  },
  guide: {
    next: '下一步',
    skip: '跳过',
    finish: '完成',
    back: '返回',
  },
  qrcode: {
    expiredText: '二维码过期',
    refreshText: '点击刷新',
    scannedText: '已扫描',
  },
  attachments: {
    status: {
      pending: '上传中...',
      fail: '上传失败',
    },
  },
  chatActionbar: {
    actionTexts: {
      replay: '刷新',
      copy: '复制',
      good: '点赞',
      bad: '点踩',
      share: '分享',
      quote: '引用',
    },
  },
  chatSender: {
    placeholder: '请输入消息...',
    sendTexts: ['发送', '停止'],
  },
  chatThinking: {
    status: {
      pending: '正在思考中...',
      complete: '已完成思考',
      stop: '已停止思考',
    },
  },
};
