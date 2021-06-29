import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-indexes`;

interface Touch {
  startX: number;
  startY: number;
  deltaX: number;
  deltaY: number;
  offsetX: number;
  offsetY: number;
}

const touch: Touch = {
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  offsetX: 0,
  offsetY: 0,
};

TComponent({
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            clientHeight: res.windowHeight,
          });
        },
      });
    },
  },
  relations: {
    './indexes-anchor': {
      type: 'child',
    },
  },
  properties: {
    indexList: {
      type: Array,
      value: ['A', 'B', 'C', 'D'],
    },
  },
  data: {
    classPrefix: name,
    rootScrollMask: false,
    showCurrentSidebar: false,
    currentSidebar: '',
    children: [],
    timer: 0,
    toView: '',
    toValue: '',
    childrenNode: [],
    sidebarNode: [],
  },
  methods: {
    setCurrentSidebar(index: any) {
      this.setData({ currentSidebar: index, showCurrentSidebar: true });
    },
    _getAllLi() {
      const nodes = this.getRelationNodes('./indexes-anchor');
      this.setData({
        childrenNode: nodes,
      });
    },
    handleRootTouchstart() {
      this.setData({
        rootScrollMask: true,
      });
    },
    handleRootTouchend() {
      this.setData({
        rootScrollMask: false,
      });
    },
    handleSidebarItemClick(e: { currentTarget: { dataset: { num: any; index: any } } }) {
      this._getAllLi();
      this.scrollToView(e.currentTarget.dataset.num);
      this.setCurrentSidebar(e.currentTarget.dataset.index);
    },
    scrollToView(index: string | number) {
      this.setData({
        topValue: this.data.childrenNode[index].data.top,
      });
    },
    handleSidebarTouchstart(e: { touches: any }) {
      const { touches } = e;
      touch.startX = touches[0].clientX;
      touch.startY = touches[0].clientX;
      const query = wx.createSelectorQuery().in(this);
      query
        .selectAll(`.${name}__sidebar-item`)
        .fields(
          {
            id: false,
            rect: true,
            dataset: true,
            size: true,
            scrollOffset: true,
            properties: ['scrollX', 'scrollY'],
            computedStyle: ['margin', 'backgroundColor'],
          },
          (res) => {
            this.setData({
              SidebarNode: res,
            });
          },
        )
        .exec();
    },
    handleSidebarTouchmove(e: { touches: any }) {
      const { touches } = e;
      const { clientY } = touches[0];
      let currentTarget = '';
      let number = 0;
      this.data.SidebarNode.forEach((ele: { dataset?: any; top?: any }) => {
        const { top } = ele;
        const { index, num } = ele.dataset;
        const targetClientVertical = top - clientY;
        if (currentTarget === '' && top >= 0) {
          currentTarget = this.data.SidebarNode[0].dataset.index ?? '';
          number = 0;
        } else if (targetClientVertical < 0) {
          currentTarget = index ?? '';
          number = num;
        }
      });
      this._getAllLi();
      this.scrollToView(number);
      this.setCurrentSidebar(currentTarget);
    },
    getTitleNode() {
      const query = wx.createSelectorQuery().in(this);
      query
        .selectAll(`.${name}>>>.${name}__anchor`)
        .fields(
          {
            id: false,
            rect: true,
            dataset: true,
            size: true,
            scrollOffset: true,
          },
          (res) => {
            this.setData({
              children: res,
            });
          },
        )
        .exec();
    },
    handleRootScroll(e: { detail: { scrollTop: number } }) {
      if (!this.data.rootScrollMask) {
        return;
      }
      this._getAllLi();
      let currentTarget = '';
      const { childrenNode } = this.data;

      childrenNode.forEach((ele: { data: { top?: any; index?: any } }) => {
        const { top, index } = ele.data;
        const targetClientVertical = top - e.detail.scrollTop;
        if (currentTarget === '' && top >= 0) {
          currentTarget = childrenNode[0].data.index ?? '';
        } else if (targetClientVertical < 50) {
          currentTarget = index ?? '';
        }
      });

      this.setCurrentSidebar(currentTarget);
    },
  },
  observers: {
    showCurrentSidebar(showCurrentSidebar: any) {
      clearInterval(this.data.timer);
      if (showCurrentSidebar) {
        this.data.timer = setTimeout(() => {
          this.setData({
            showCurrentSidebar: false,
          });
        }, 2000);
      }
    },
  },
});
