import ActionSheet from 'tdesign-miniprogram/action-sheet/index';
import Toast from 'tdesign-miniprogram/toast/index';
import { basicListOption, withIconListOption, grid, withSwiperGrid, singleCharItems } from './constants';

Page({
  data: {
    slotVisible: false,
    handler: null,
    visible: false,
    items: [...singleCharItems],
    operList1: [
      {
        title: '基础提示',
        btns: [
          {
            type: 'list-base-component',
            text: '组件引用：列表型',
          },
          {
            type: 'slot-list-base-component',
            text: '组件引用：自定义面板',
          },
          {
            type: 'list',
            text: '指令调用：列表型',
          },
          {
            type: 'withIconList',
            text: '指令调用：带图标列表型',
          },
          {
            type: 'grid',
            text: '指令调用：宫格型',
          },
          {
            type: 'withSwiperGrid',
            text: '指令调用：宫格型-多页',
          },
        ],
      },
    ],
  },
  clickHandle(e: any) {
    let handler;
    const { detail } = e;
    switch (detail) {
      case 'list-base-component':
        this.setData({
          visible: true,
        });
        break;
      case 'slot-list-base-component':
        this.setData({
          slotVisible: true,
        });
        break;
      case 'list':
        handler = ActionSheet.show(basicListOption);
        break;
      case 'withIconList':
        handler = ActionSheet.show(withIconListOption);
        break;
      case 'grid':
        handler = ActionSheet.show(grid);
        break;
      case 'withSwiperGrid':
        handler = ActionSheet.show(withSwiperGrid);
        break;
      default:
        break;
    }
    this.setData({
      handler,
    });
  },
  onCancelBaseSlot() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击取消',
    });
    this.setData({
      slotVisible: false,
    });
  },
  onCancelBaseImperative() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击取消',
    });
    this.data.handler?.close();
  },
  onSelectBaseImperative(e) {
    const {
      detail: {
        selected: { label },
      },
    } = e;
    Toast({
      context: this,
      selector: '#t-toast',
      message: `选中${label}`,
    });
    this.data.handler?.close();
  },
  onSelect(e) {
    const {
      detail: { selected },
    } = e;
    Toast({
      context: this,
      selector: '#t-toast',
      message: `选中${selected}`,
    });
    this.onClose();
  },
  onCancel() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击取消',
    });
    this.onClose();
  },
  onClose() {
    this.setData({
      visible: false,
    });
  },
});
