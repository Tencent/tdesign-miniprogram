import enUS from 'tdesign-miniprogram/locale/en_US';

const REPLY_COUNT = 6;

Component({
  data: {
    globalConfig: enUS,

    // rate
    rateValue: 3,

    // calendar
    visible: false,
    value: null,

    // date-time-picker
    mode: '',
    dateVisible: false,
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入
    dateText: '',
    popupProps: {
      usingCustomNavbar: true,
    },

    // comment（不传 folds.content，折叠/展开文案走全局国际化配置）
    commentAvatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
    commentFold: {
      state: 'collapsed',
      total: REPLY_COUNT,
      step: 3,
    },
    replyInfo: [],
    visibleReplies: [],
  },

  lifetimes: {
    attached() {
      const replyInfo = new Array(REPLY_COUNT).fill({}).map((_, index) => ({
        author: `Name${index + 1}`,
        avatar: {
          shape: 'circle',
          size: '40rpx',
          image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        },
        content: 'This is a reply content.',
        datetime: 'Today 16:38',
      }));
      this.setData({
        replyInfo,
        visibleReplies: replyInfo.slice(0, 1),
      });
    },
  },

  methods: {
    // rate
    onRateChange(e) {
      const { value } = e.detail;
      this.setData({
        rateValue: value,
      });
    },

    // calendar
    handleCalendar() {
      this.setData({ visible: true });
    },

    handleCalendarConfirm(e) {
      const { value } = e.detail;
      console.log(value);
      this.setData({
        value,
      });
    },

    onCalendarClose({ detail }) {
      console.log(detail.trigger);
    },

    // date-time-picker
    showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },

    handlePickerClose(e) {
      console.log('handleClose:', e);
    },

    onPickerConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;

      console.log('confirm', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });
    },

    onPickerColumnChange(e) {
      console.log('pick', e.detail.value);
    },

    // comment
    handleUpdateFold(e) {
      const { fold } = e.detail;
      const { replyInfo } = this.data;

      let visibleReplies;
      if (fold.state === 'collapsed') {
        visibleReplies = replyInfo.slice(0, 1);
      } else if (fold.state === 'partial') {
        visibleReplies = replyInfo.slice(0, 3);
      } else {
        visibleReplies = replyInfo;
      }

      this.setData({ commentFold: fold, visibleReplies });
    },
  },
});
