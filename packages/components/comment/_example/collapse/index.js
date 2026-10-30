const REPLY_COUNT = 6;

Component({
  data: {
    avatar: {
      shape: 'circle',
      size: '64rpx',
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    },
    folds: {
      state: 'collapsed',
      total: REPLY_COUNT,
      step: 3,
      content: {
        collapsed: `展开${REPLY_COUNT - 1}条回复`,
        partial: ['展开更多回复', '收起'],
        expanded: '收起',
      },
    },
    replyInfo: [],
    visibleReplies: [],
    // 回复输入框（待对齐视觉，暂不展示）
    showReplyInput: false,
    replyValue: '',
    replyTarget: '',
    focusInput: false,
    // ActionSheet
    showActionSheet: false,
    actionSheetItems: ['回复', '转发', '复制', '举报'],
    longPressTarget: '',
  },

  lifetimes: {
    attached() {
      const replyInfo = [];
      for (let i = 0; i < REPLY_COUNT; i += 1) {
        replyInfo.push({
          author: `Name${i + 1} 名称`,
          avatar: {
            shape: 'circle',
            size: '40rpx',
            image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
          },
          content: '这是一段很长很长很长很长很长很长的评论内容。',
          datetime: '今天16:38·广东',
          likeNum: 6,
        });
      }
      this.setData({
        replyInfo,
        visibleReplies: replyInfo.slice(0, 1),
      });
    },
  },

  methods: {
    onFolds(e) {
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

      this.setData({ folds: fold, visibleReplies });
    },

    onAction(e) {
      const { action } = e.detail;
      console.log('action:', action);
    },

    onReply(e) {
      const { author } = e.currentTarget.dataset;
      // 待对齐视觉后展示输入框，当前仅记录回复目标
      this.setData({ replyTarget: author });
    },

    onLike(e) {
      const { index } = e.currentTarget.dataset;
      const { replyInfo } = this.data;
      this.setData({
        [`replyInfo[${index}].likeNum`]: replyInfo[index].likeNum + 1,
      });
    },

    onLongPress(e) {
      const { author } = e.currentTarget.dataset;
      this.setData({
        longPressTarget: author || 'Name1 名称',
        showActionSheet: true,
      });
    },

    onActionSheetSelect(e) {
      const { label } = e.detail;
      if (label === '回复' && this.data.longPressTarget) {
        // 待对齐视觉后展示输入框
        this.setData({ replyTarget: this.data.longPressTarget });
      }
      this.setData({ showActionSheet: false });
    },

    onActionSheetClose() {
      this.setData({ showActionSheet: false });
    },

    onInputChange(e) {
      this.setData({ replyValue: e.detail.value });
    },

    onSubmit() {
      const { replyValue, replyTarget, replyInfo } = this.data;
      if (!replyValue.trim()) return;

      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      const newReply = {
        author: '我',
        avatar: {
          shape: 'circle',
          size: '40rpx',
          image: 'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
        },
        content: replyValue,
        datetime: `今天${hours}:${minutes}·广东`,
        likeNum: 0,
        ...(replyTarget ? { replyTo: replyTarget } : {}),
      };

      const newReplyInfo = [...replyInfo, newReply];
      const newTotal = newReplyInfo.length;

      this.setData({
        replyInfo: newReplyInfo,
        visibleReplies: newReplyInfo,
        folds: {
          ...this.data.folds,
          state: 'expanded',
          total: newTotal,
          content: {
            collapsed: `展开${newTotal - 1}条回复`,
            partial: ['展开更多回复', '收起'],
            expanded: '收起',
          },
        },
        replyValue: '',
        replyTarget: '',
        showReplyInput: false,
        focusInput: false,
      });
    },
  },
});
