/* eslint-disable no-template-curly-in-string */
// 文件有效，为国际化做准备
import 'dayjs/locale/en';

export default {
  actionSheet: {
    cancel: 'Cancel',
  },
  calendar: {
    confirm: 'Confirm',
    title: 'Select Date',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: '{month} {year}',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  cascader: {
    title: 'Title',
    placeholder: 'Select options',
  },
  dropdownMenu: {
    reset: 'Reset',
    confirm: 'Confirm',
  },
  dateTimePicker: {
    dayjsLocale: 'en',
    title: 'Select Date',
    cancel: 'Cancel',
    confirm: 'Confirm',
    format: 'YYYY-MM-DD',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    yearLabel: '',
    monthLabel: '',
    dateLabel: '',
    hourLabel: '',
    minuteLabel: '',
    secondLabel: '',
  },
  form: {
    errorMessage: {
      date: '${name} is invalid',
      url: '${name} is invalid',
      required: '${name} is required',
      whitespace: '${name} cannot be empty',
      max: '${name} cannot be longer than ${validate} characters',
      min: '${name} must be at least ${validate} characters',
      len: '${name} must be exactly ${validate} characters',
      enum: '${name} must be one of ${validate}',
      idcard: '${name} is invalid',
      telnumber: '${name} is invalid',
      pattern: '${name} is invalid',
      validator: '${name} is invalid',
      boolean: '${name} is not a boolean',
      number: '${name} must be a number',
    },
    colonText: ':',
  },
  picker: {
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  pullDownRefresh: {
    loadingTexts: ['Pull to refresh', 'Loose to refresh', 'Refreshing ', 'Refresh completed'],
  },
  rate: {
    texts: ['Poor', 'Fair', 'Average', 'Good', 'Excellent'],
    valueText: '{value} score',
    noValueText: 'No score',
  },
  tabBar: {
    newsAriaLabel: 'There is new news',
    moreNewsAriaLabel: 'There is a lot of news',
    haveMoreNewsAriaLabel: 'There are {value}+ news',
    haveNewsAriaLabel: 'There are {value} news',
  },
  table: {
    empty: 'Empty Data',
  },
  list: {
    loading: 'Loading...',
    loadingMoreText: 'Click to load more',
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
    success: 'Refresh successful',
  },
  upload: {
    progress: {
      uploadingText: 'Uploading...',
      waitingText: 'Waiting',
      failText: 'Failed',
      successText: 'Success',
      reloadText: 'Reload',
    },
  },
  guide: {
    next: 'Next',
    skip: 'Skip',
    finish: 'Finish',
    back: 'Back',
  },
  qrcode: {
    expiredText: 'expired',
    refreshText: 'refresh',
    scannedText: 'scanned',
  },
  attachments: {
    status: {
      pending: 'uploading...',
      fail: 'upload failed',
    },
  },
  chatActionbar: {
    actionBar: {
      replay: 'refresh',
      copy: 'copy',
      good: 'good',
      bad: 'bad',
      share: 'share',
      quote: 'quote',
    },
  },
  chatSender: {
    placeholder: 'please enter message...',
    sendText: 'send',
    stopText: 'stop',
  },
  chatRecord: {
    holdToTalk: 'Hold to talk',
    requestAuth: 'Please authorize microphone permission',
    releaseToCancel: 'Release to cancel',
    releaseToSend: 'Release to send, swipe up to cancel',
    cancelText: 'Cancel',
    sendText: 'Send',
    busyTip: 'Recognizing, please wait...',
    recognizeFailTip: 'Voice recognition failed, please try again',
    missingPluginTip: 'Missing voice recognition plugin WechatSI',
    authSettingFail: 'Failed to get recording permission settings',
    openSettingFail: 'Failed to open settings',
    systemMicTitle: 'Cannot use microphone',
    systemMicContent:
      'It is detected that the microphone permission of "WeChat" has been disabled in the system.\n\nPlease enable it in system settings:\n- iOS: Settings > WeChat > Microphone\n- Android: Settings > Apps > WeChat > Permissions > Microphone\n\nReturn to the mini program and try again after enabling.',
  },
  chatThinking: {
    status: {
      pending: 'thinking...',
      complete: 'thinking process completed',
      stop: 'thinking has stopped',
    },
  },
};
