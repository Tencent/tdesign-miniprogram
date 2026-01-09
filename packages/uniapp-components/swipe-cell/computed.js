import _ from '../common/utils.wxs';

const THRESHOLD = 0.3;
const MIN_DISTANCE = 10;


export function initRightWidth() {
  initOpen.call(this, this);
}

export function initLeftWidth() {
  initOpen.call(this, this);
}

function initOpen(context) {
  const { state } = context;
  if (typeof state.opened === 'boolean') {
    // opened 为 boolean 类型，判断默认打开
    if (state.opened && state.rightWidth > 0) {
      swipeMove.call(this, -state.rightWidth);
    } else if (state.opened && state.leftWidth > 0) {
      swipeMove.call(this, state.leftWidth);
    }
  }

  if (Array.isArray(state.opened)) {
    // opened为array类型，判断默认打开，同时设定左右action时优先打开右边
    if (state.opened[1] && state.rightWidth > 0) {
      swipeMove.call(this, -state.rightWidth);
    } else if (state.opened[0] && state.leftWidth > 0) {
      swipeMove.call(this, state.leftWidth);
    }
  }
}

const resetTouchStatus = function () {
  const { state } = this;
  state.direction = '';
  state.deltaX = 0;
  state.deltaY = 0;
  state.offsetX = 0;
  state.offsetY = 0;
};

const touchMove = function (event) {
  const touchPoint = event.touches[0];
  const { state } = this;

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

function swipeMove(_offset = 0) {
  const { state } = this;
  state.offset = range(_offset, -state.rightWidth, +state.leftWidth);
  const transform = `translate3d(${state.offset}px, 0, 0)`;
  // const transition = state.dragging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
  const transition = 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';

  this.wrapperStyle = _._style({
    '-webkit-transform': transform,
    '-webkit-transition': transition,
    transform,
    transition,
  });
}

const close = function () {
  swipeMove.call(this, 0);
};

export function onCloseChange() {
  if (this.closed) {
    close.call(this);
  }
}

export function onOpenedChange() {
  if (!this.state.opened) {
    close.call(this);
  }
}

const touchStart = function (event) {
  resetTouchStatus.call(this);
  const { state } = this;
  state.startOffset = state.offset;
  const touchPoint = event.touches[0];

  state.startX = touchPoint.clientX;
  state.startY = touchPoint.clientY;
  this.closeOther();
};

export function startDrag(event) {
  this.catchMove();
  touchStart.call(this, event);
}

export function onDrag(event) {
  touchMove.call(this, event);
  const { state } = this;

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
  swipeMove.call(this, state.startOffset + state.deltaX);
  return false;
}

const open = function (position) {
  const { state } = this;
  const _offset = position === 'left' ? +state.leftWidth : -state.rightWidth;
  this.open({ position });
  swipeMove.call(this, _offset);
};

export function endDrag() {
  const { state } = this;
  state.dragging = false;
  // 左/右侧有可滑动区域，且当前不是已open状态，且滑动幅度超过阈值时open左/右侧（滚动到该侧的最边上）
  if (
    +state.rightWidth > 0
    && -state.startOffset < +state.rightWidth
    && -state.offset > +state.rightWidth * THRESHOLD
  ) {
    open.call(this, 'right');
  } else if (
    +state.leftWidth > 0
    && state.startOffset < +state.leftWidth
    && state.offset > +state.leftWidth * THRESHOLD
  ) {
    open.call(this, 'left');
  } else {
    // 仅在有发生侧滑的情况下自动关闭（由js控制是否异步关闭）
    if (state.startOffset !== state.offset) {
      close.call(this);
    }
  }
  this.$emit('dragend');
}

