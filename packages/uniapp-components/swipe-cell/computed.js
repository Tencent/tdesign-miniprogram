import _ from '../common/utils.wxs';

const THRESHOLD = 0.3;
const MIN_DISTANCE = 10;
let owner;
let state;

function getState(context) {
  owner = context;
  state = {
    ...(state || {}),
  };
  state.leftWidth = context.leftWidth || 0;
  state.rightWidth = context.rightWidth || 0;
  state.offset = state.offset || 0;
  state.startOffset = state.startOffset || 0;
  state.opened = context.dataOpened || false;
}

export function initRightWidth() {
  getState(this);
  // state.rightWidth = newVal;
  initOpen(this);
}

export function initLeftWidth() {
  getState(this);
  // state.leftWidth = newVal;
  initOpen(this);
}

function initOpen(context) {
  getState(context);
  if (state.opened.constructor === 'Boolean') {
    // opened为boolean类型，判断默认打开
    if (state.opened && state.rightWidth > 0) {
      swipeMove(-state.rightWidth);
    } else if (state.opened && state.leftWidth > 0) {
      swipeMove(state.leftWidth);
    }
  }

  if (Array.isArray(state.opened)) {
    // opened为array类型，判断默认打开，同时设定左右action时优先打开右边
    if (state.opened[1] && state.rightWidth > 0) {
      swipeMove(-state.rightWidth);
    } else if (state.opened[0] && state.leftWidth > 0) {
      swipeMove(state.leftWidth);
    }
  }
}

const resetTouchStatus = function () {
  state.direction = '';
  state.deltaX = 0;
  state.deltaY = 0;
  state.offsetX = 0;
  state.offsetY = 0;
};

const touchMove = function (event) {
  const touchPoint = event.touches[0];

  state.deltaX = +touchPoint.clientX - state.startX;
  state.deltaY = +touchPoint.clientY - state.startY;
  state.offsetX = Math.abs(state.deltaX);
  state.offsetY = Math.abs(state.deltaY);
  state.direction = state.direction || getDirection(state.offsetX, state.offsetY);
};

const getDirection = function (x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
};

const range = function (num, min, max) {
  return Math.min(Math.max(num, min), max);
};

function swipeMove(_offset) {
  if (_offset === undefined) _offset = 0;
  state.offset = range(_offset, -state.rightWidth, +state.leftWidth);
  const transform = `translate3d(${state.offset}px, 0, 0)`;
  // const transition = state.dragging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
  const transition = 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';

  owner.wrapperStyle = _._style({
    '-webkit-transform': transform,
    '-webkit-transition': transition,
    transform,
    transition,
  });
}

const close = function () {
  swipeMove(0);
};

export function onCloseChange() {
  getState(this);
  // if (newVal === oldVal) return;
  if (this.closed) {
    close();
  }
}

export function onOpenedChange() {
  getState(this);
  // state.opened = newVal;
  // if (newVal === oldVal) return;
  if (!this.dataOpened) {
    close();
  }
}

const touchStart = function (event) {
  resetTouchStatus();
  state.startOffset = state.offset;
  const touchPoint = event.touches[0];

  state.startX = touchPoint.clientX;
  state.startY = touchPoint.clientY;
  owner.closeOther();
};

export function startDrag(event) {
  this.catchMove();
  getState(this);
  touchStart(event);
}

export function onDrag(event) {
  getState(this);
  touchMove(event);

  if (state.direction === 'vertical') {
    this.onSkipMove();
  }
  if (state.direction !== 'horizontal') {
    return;
  }
  if (!state.dragging) {
    this.$emit('dragstart');
  }
  state.dragging = true;
  swipeMove(state.startOffset + state.deltaX);
  return false;
}

const open = function (position) {
  const _offset = position === 'left' ? +state.leftWidth : -state.rightWidth;
  owner.open({ position });
  swipeMove(_offset);
};

export function endDrag() {
  getState(this);
  state.dragging = false;
  // 左/右侧有可滑动区域，且当前不是已open状态，且滑动幅度超过阈值时open左/右侧（滚动到该侧的最边上）
  if (
    +state.rightWidth > 0
    && -state.startOffset < +state.rightWidth
    && -state.offset > +state.rightWidth * THRESHOLD
  ) {
    open('right');
  } else if (
    +state.leftWidth > 0
    && state.startOffset < +state.leftWidth
    && state.offset > +state.leftWidth * THRESHOLD
  ) {
    open('left');
  } else {
    // 仅在有发生侧滑的情况下自动关闭（由js控制是否异步关闭）
    if (state.startOffset !== state.offset) {
      // this.dataOpened = false;
      close();
    }
  }
  this.$emit('dragend');
}

