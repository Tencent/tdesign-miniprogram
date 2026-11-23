const REPLY_COUNT = 6;

// 点赞数量格式化：过万（>= 10000）统一使用 k 单位，如 15800 -> 15.8k
const formatLikeCount = (count) => {
  if (count >= 10000) {
    const value = count / 1000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}k`;
  }
  return String(count);
};

const likeCounts = [6, 68, 688, 6888, 15800, 158000];

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
    // ActionSheet
    showActionSheet: false,
    actionSheetItems: ['复制', '回复', '举报', '删除'],
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
          likeNum: likeCounts[i],
          likeText: formatLikeCount(likeCounts[i]),
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
      console.log('回复:', author);
    },

    onLongPress(e) {
      const { author } = e.currentTarget.dataset;
      this.setData({
        longPressTarget: author || 'Name1 名称',
        showActionSheet: true,
      });
    },

    onActionSheetSelect(e) {
      const { selected } = e.detail;
      const label = typeof selected === 'string' ? selected : selected.label;
      console.log('长按评论：', this.data.longPressTarget, '操作：', label);
      this.setData({ showActionSheet: false });
    },

    onActionSheetClose() {
      this.setData({ showActionSheet: false });
    },
  },
});
