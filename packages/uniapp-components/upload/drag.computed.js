/* eslint-disable no-plusplus */
let classPrefix = '';
let startIndex = 0;
let endIndex = 0;
let dragCollisionList = [];

const isOutRange = function (x1, y1, x2, y2, x3, y3) {
  return x1 < 0 || x1 >= y1 || x2 < 0 || x2 >= y2 || x3 < 0 || x3 >= y3;
};

const sortCore = function (sKey, eKey, st) {
  const _ = st.dragBaseData;

  const excludeFix = function (cKey, type) {
    if (st.list[cKey].fixed) {
      // fixed 元素位置不会变化, 这里直接用 cKey(sortKey) 获取, 更加快捷
      type ? --cKey : ++cKey;
      return excludeFix(cKey, type);
    }
    return cKey;
  };

  // 先获取到 endKey 对应的 realKey, 防止下面排序过程中该 realKey 被修改
  let endRealKey = -1;
  st.list.forEach((item) => {
    if (item.sortKey === eKey) endRealKey = item.realKey;
  });

  return st.list.map((item) => {
    if (item.fixed) return item;
    let cKey = item.sortKey;
    let rKey = item.realKey;

    if (sKey < eKey) {
      // 正序拖动
      if (cKey > sKey && cKey <= eKey) {
        --rKey;
        cKey = excludeFix(--cKey, true);
      } else if (cKey === sKey) {
        rKey = endRealKey;
        cKey = eKey;
      }
    } else if (sKey > eKey) {
      // 倒序拖动
      if (cKey >= eKey && cKey < sKey) {
        ++rKey;
        cKey = excludeFix(++cKey, false);
      } else if (cKey === sKey) {
        rKey = endRealKey;
        cKey = eKey;
      }
    }

    if (item.sortKey !== cKey) {
      item.tranX = `${(cKey % _.columns) * 100}%`;
      item.tranY = `${Math.floor(cKey / _.columns) * 100}%`;
      item.sortKey = cKey;
      item.realKey = rKey;
    }
    return item;
  });
};

function triggerCustomEvent(list, type, ins) {
  const _list = [];
  const listData = [];

  list.forEach((item) => {
    _list[item.sortKey] = item;
  });

  _list.forEach((item) => {
    if (!item.extraNode) {
      listData.push(item.data);
    }
  });

  ins.$emit(type, { listData });
}

export function longPress(event, index) {
  const st = this.getState();
  const _ = st.dragBaseData;

  const sTouch = event.changedTouches[0];
  if (!sTouch) return;

  st.cur = index;

  // compile error
  // longPressIndex = st.cur;

  // 初始项是固定项则返回
  const item = st.list[st.cur];
  if (item && item.fixed) return;

  // 如果已经在 drag 中则返回, 防止多指触发 drag 动作, touchstart 事件中有效果
  if (st.dragging) return;
  st.dragging = true;
  this.callMethod('dragStatusChange', { dragging: true });

  // 计算X,Y轴初始位移, 使 item 中心移动到点击处, 单列时候X轴初始不做位移
  st.tranX = _.columns === 1 ? 0 : sTouch.pageX - (_.itemWidth / 2 + _.wrapLeft);
  st.tranY = sTouch.pageY - (_.itemHeight / 2 + _.wrapTop);
  st.sId = sTouch.identifier;
  this.setDragItemStyle(index, `transform: translate3d(${st.tranX}px, ${st.tranY}px, 0)`);

  st.list.forEach((item, index) => {
    this.setDragItemClass(index, 'remove', [`${classPrefix}__drag--tran`, `${classPrefix}__drag--cur`]);
    this.setDragItemClass(index, 'add', index === st.cur ? `${classPrefix}__drag--cur` : `${classPrefix}__drag--tran`);
  });
  this.callMethod('dragVibrate', { vibrateType: 'longPress' });
}

export function touchMove(event, index) {
  // const ins = event.instance;
  const st = this.getState();
  const _ = st.dragBaseData;

  const mTouch = event.changedTouches[0];
  if (!mTouch) return;

  if (!st.dragging) return;

  // 如果不是同一个触发点则返回
  if (st.sId !== mTouch.identifier) return;

  // 计算X,Y轴位移, 单列时候X轴初始不做位移
  const tranX = _.columns === 1 ? 0 : mTouch.pageX - (_.itemWidth / 2 + _.wrapLeft);
  const tranY = mTouch.pageY - (_.itemHeight / 2 + _.wrapTop);

  // 到顶到底自动滑动
  if (mTouch.clientY > _.windowHeight - _.itemHeight - _.realBottomSize) {
    // 当前触摸点pageY + item高度 - (屏幕高度 - 底部固定区域高度)
    this.callMethod('pageScroll', {
      scrollTop: mTouch.pageY + _.itemHeight - (_.windowHeight - _.realBottomSize),
    });
  } else if (mTouch.clientY < _.itemHeight + _.realTopSize) {
    // 当前触摸点pageY - item高度 - 顶部固定区域高度
    this.callMethod('pageScroll', {
      scrollTop: mTouch.pageY - _.itemHeight - _.realTopSize,
    });
  }

  // 设置当前激活元素偏移量
  this.setDragItemStyle(index, `transform: translate3d(${tranX}px, ${tranY}px, 0)`);

  const startKey = st.list[st.cur].sortKey;
  const curX = Math.round(tranX / _.itemWidth);
  const curY = Math.round(tranY / _.itemHeight);
  const endKey = curX + _.columns * curY;

  // 目标项是固定项则返回
  const item = st.list[endKey];
  if (item && item.fixed) return;

  // X轴或Y轴超出范围则返回
  if (isOutRange(curX, _.columns, curY, _.rows, endKey, st.list.length)) return;

  // 防止拖拽过程中发生乱序问题
  if (startKey === endKey || startKey === st.preStartKey) return;
  st.preStartKey = startKey;

  dragCollisionList = sortCore(startKey, endKey, st);
  startIndex = startKey;
  endIndex = endKey;
  st.list.forEach((_, index) => {
    const item = dragCollisionList[index];
    if (index !== st.cur) {
      this.setDragItemStyle(index, `transform: translate3d(${item.tranX},${item.tranY}, 0)`);
    }
  });

  this.callMethod('dragVibrate', { vibrateType: 'touchMove' });
  this.callMethod('dragCollision', {
    dragCollisionList,
    startIndex,
    endIndex,
  });
  triggerCustomEvent(dragCollisionList, 'change', this);
}

export function touchEnd(event, index) {
  const st = this.getState();

  if (!st.dragging) return;
  triggerCustomEvent(st.list, 'sortend', this);

  this.setDragItemClass(index, 'remove', `${classPrefix}__drag--cur`);
  this.setDragItemClass(index, 'add', `${classPrefix}__drag--tran`);

  this.setDragItemStyle(index, `transform: translate3d(${st.list[st.cur].tranX},${st.list[st.cur].tranY}, 0)`);

  st.preStartKey = -1;
  st.dragging = false;
  this.callMethod('dragStatusChange', { dragging: false });
  this.callMethod('dragEnd', {
    dragCollisionList,
    startIndex,
    endIndex,
  });
  st.cur = -1;
  st.tranX = 0;
  st.tranY = 0;
}

export function baseDataObserver(newVal) {
  if (newVal === undefined) return;

  const st = this.getState();
  st.dragBaseData = newVal;
  classPrefix = newVal.classPrefix;
}

export function listObserver(newVal) {
  if (newVal === undefined) return;

  const st = this.getState();

  st.list = newVal || [];
  st.list.forEach((item, index) => {
    this.setDragItemClass(index, 'remove', `${classPrefix}__drag--tran`);
    this.setDragItemStyle(index,  `transform: translate3d(${item.tranX},${item.tranY}, 0)`);
    if (item.fixed) this.setDragItemClass(index, 'add', `${classPrefix}__drag--fixed`);
  });
  dragCollisionList = [];
}
