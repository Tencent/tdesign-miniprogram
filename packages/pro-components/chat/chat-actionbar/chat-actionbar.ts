import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-chat-actionbar`;

@wxComponent()
export default class ChatActionbar extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    styleIsolation: 'shared',
  };

  properties = props;

  data = {
    actions: [],
    classPrefix: name,
    pComment: '',
    iconMap: {
      good: 'thumb-up',
      bad: 'thumb-down',
      replay: 'refresh',
      copy: 'copy',
      share: 'share-1',
      quote: 'enter',
    },
    iconActiveMap: {
      good: 'thumb-up-filled',
      bad: 'thumb-down-filled',
    },
    widthStyle: '',
    popoverStyle: 'transition: none;position: fixed;',
    popoverPosition: '',
    longpressVisible: false,
  };

  observers = {
    comment(newVal) {
      this.setPComment(newVal);
    },
    'actionBar, pComment, placement'() {
      this.setActions();
    },
    longPressPosition(newVal) {
      if (this.properties.placement === 'longpress') {
        if (newVal) {
          this.showPopover(newVal);
        } else {
          this.hidePopover();
        }
      }
    },
  };

  methods = {
    filterSpecialChars(content: string): string {
      // 保留段落、换行和缩进 - 不处理换行符和行首空白
      let result = content;

      // 先处理表格格式 - 保留表格语法
      const tableRegex = /^(\s*\|.*\|.*\n\s*\|[-: ]+\|.*\n(\s*\|.*\|.*\n)*)/gm;
      const tables = [];
      result = result.replace(tableRegex, (match) => {
        // 在表格内容中去除特殊引用格式和强调语法
        const cleanedTable = match
          .replace(/\[\d+(?:,\d+)*\]\(@ref\)/g, '')
          .replace(/(\*\*|__)(.*?)\1|(\*|_)(.*?)\3/g, '$2$4')
          // 替换表格中的<br>标签为换行符
          .replace(/<br\s*\/?>/gi, '\n');
        tables.push(cleanedTable);
        return `%%TABLE${tables.length - 1}%%`; // 用占位符临时替换表格
      });

      // 替换标题（保留行首缩进）
      result = result.replace(/^(\s*)#{1,6}\s+/gm, '$1');
      // 替换强调语法
      result = result.replace(/(\*\*|__)(.*?)\1|(\*|_)(.*?)\3/g, '$2$4');
      // 替换图片
      result = result.replace(/!\[.*?\]\(.*?\)/g, '');
      // 处理特殊引用格式（非表格部分）
      result = result.replace(/\[\d+(?:,\d+)*\]\(@ref\)/g, '');
      // 处理其他特殊字符但保留列表标记(-*+)、换行符和缩进
      const specialChars = /(\\|`|\{|\}|\[|\]|\(|\)|\||！|@ref|\([@#]\w+\))/g;
      result = result.replace(specialChars, '');
      // 处理可能剩余的 [数字] 格式
      result = result.replace(/\[\d+\]/g, '');
      // 替换非表格部分的<br>标签为换行符
      result = result.replace(/<br\s*\/?>/gi, '\n');

      // 恢复表格格式
      result = result.replace(/%%TABLE(\d+)%%/g, (match, index) => tables[parseInt(index, 10)] || '');

      // 清理多余的空行但保留单个换行和缩进
      return result.replace(/\n{3,}/g, '\n\n').trim();
    },

    handleActionClick(e) {
      const { name } = e.currentTarget.dataset;
      if (name === 'copy' && this.data.content) {
        this.data.handleCopy();
      } else if (name === 'good') {
        const isActive = this.data.pComment === 'good';
        this.setData({
          pComment: isActive ? undefined : 'good',
        });
        this.triggerEvent('actions', {
          name,
          active: !isActive,
          chatId: this.properties.chatId,
        });
      } else if (name === 'bad') {
        const isActive = this.data.pComment === 'bad';
        this.setData({
          pComment: isActive ? undefined : 'bad',
        });
        this.triggerEvent('actions', {
          name,
          active: !isActive,
          chatId: this.properties.chatId,
        });
      } else {
        this.triggerEvent('actions', {
          name,
          chatId: this.properties.chatId,
        });
      }
      this.onVisibleChange({ detail: { visible: false } });
    },

    handleCopy() {
      if (!this.data.content) return;
      const copyContent =
        this.data.copyMode === 'markdown' ? this.data.content : this.data.filterSpecialChars(this.data.content);
      this.triggerEvent('actions', {
        name: 'copy',
        data: copyContent,
      });
    },

    setActions() {
      const text = {
        replay: '刷新',
        copy: '复制',
        good: '点赞',
        bad: '点踩',
        share: '分享',
        quote: '引用',
      };

      const baseActions = [];
      let dataActions = [];
      if (this.properties.placement === 'longpress') {
        dataActions = ['quote', 'copy', 'share'];
      } else if (Array.isArray(this.properties.actionBar)) {
        dataActions = this.properties.actionBar;
      }
      dataActions.forEach((item) => {
        if (item === 'good' || item === 'bad') {
          baseActions.push({
            name: item,
            isActive: this.data.pComment === item,
            text: text[item] || item,
          });
        } else {
          baseActions.push({
            name: item,
            isActive: false,
            text: text[item] || item,
          });
        }
      });
      this.setData({
        actions: baseActions,
      });
    },

    setPComment(newVal) {
      this.setData({
        pComment: newVal || '',
      });
    },

    showPopover(pos) {
      this.setData({
        widthStyle: `width: ${this.data.actions.length * 128 + (this.data.actions.length - 1) * 8}rpx`,
        popoverPosition: `top:${pos.y}px;left:${pos.x}px`,
        longpressVisible: true,
      });

      setTimeout(() => {
        const child = this.selectComponent('.popover');
        const query = this.createSelectorQuery().in(child);

        query.select('.t-popover').boundingClientRect();
        query.exec((res) => {
          const [rect] = res;

          // 新增：检查元素是否超出屏幕宽度
          const { screenWidth } = wx.getWindowInfo();
          const elementRightEdge = rect.left + rect.width;

          if (elementRightEdge > screenWidth) {
            // eslint-disable-next-line no-console
            console.log('meowr');
            this.setData({
              popoverStyle: `transition: none;position:fixed; left: unset !important; right: 16rpx !important;`,
            });
          } else if (rect.left <= 0) {
            // eslint-disable-next-line no-console
            console.log('meowl');
            this.setData({ popoverStyle: `transition: none;position:fixed; left: 16rpx !important;` });
          }
        });
      }, 200);
    },

    hidePopover() {
      this.onVisibleChange({ detail: { visible: false } });
    },

    onVisibleChange(e) {
      const { visible } = e.detail;
      this.setData({
        longpressVisible: visible,
      });
      if (!visible) {
        setTimeout(() => {
          this.setData({
            popoverPosition: '',
            popoverStyle: 'transition: none;position: fixed;',
          });
        }, 200);
      }
    },
  };

  lifetimes = {
    created() {
      this.data.filterSpecialChars = this.filterSpecialChars.bind(this);
      this.data.handleActionClick = this.handleActionClick.bind(this);
      this.data.handleCopy = this.handleCopy.bind(this);
      this.data.showPopover = this.showPopover.bind(this);
      this.data.hidePopover = this.hidePopover.bind(this);
      this.data.setPComment = this.setPComment.bind(this);
    },

    attached() {
      // 初始化pComment
      this.setData({
        pComment: this.properties.comment || '',
      });
      this.setActions();
    },

    detached() {},
  };
}
