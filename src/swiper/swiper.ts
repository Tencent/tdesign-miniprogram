/**
 * 轮播组件
 * 因原生swiper受限，基于wxs重新实现，后期可以扩展更多丰富的功能
 * 第一期：完成基础API，导航器，分页条
 * 第二期：todo，无限循环，垂直轮播，3D动效等
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { DIRECTION } from './common/constants';

const { prefix } = config;
const easings = {
  // 线性动画
  linear: 'linear',
  // 缓入动画
  // https://easings.net/#easeInCubic
  easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
  // 缓出动画
  // https://easings.net/#easeOutCubic
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  // 缓入缓出动画
  // https://easings.net/#easeInOutCubic
  easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
};

interface SwitchOpt {
  cycle?: boolean;
  source: 'autoplay' | 'touch' | 'nav';
}
const checkVal = function (val: any): boolean {
  if (typeof val === 'undefined' || val === null || val === -1) {
    return false;
  }
  return true;
};
@wxComponent()
export default class Swiper extends SuperComponent {
  externalClasses = ['t-class'];

  options = {
    multipleSlots: true,
  };

  properties = {
    /**
     * 当前滑块的index
     * 受控属性，必须配合change事件来更新
     */
    current: {
      type: Number,
      value: -1,
    },
    /**
     * 默认滑块的index
     * 非受控属性，若current，defaultCurrent一起用，则current优先
     */
    defaultCurrent: {
      type: Number,
      value: 0,
    },
    /**
     * 是否自动播放
     */
    autoplay: {
      type: Boolean,
      value: false,
    },
    /**
     * 滑动动画时长
     */
    duration: {
      type: Number,
      value: 500,
    },
    /**
     * 自动播放间隔
     */
    interval: {
      type: Number,
      value: 3000,
    },
    /**
     * 轮播滑动方向，可选值：horizontal/vertical
     * todo
     */
    direction: {
      type: String,
      value: DIRECTION.HOR,
    },
    /**
     * 动画类型
     */
    animation: {
      type: String,
      value: 'slide',
    },
  };

  observers = {
    current(val) {
      this.update(+val);
    },
    autoplay(val) {
      if (val) {
        this.play();
      } else {
        this.pause();
      }
    },
    interval(val) {
      if (this._old_interval && this._old_interval !== val) {
        this.replay();
      }
      this._old_interval = val;
    },
    direction(val) {
      // 属性变化时，重新初始化
      if (this._old_direction && this._old_direction !== val) {
        this.initItem();
      }
      this._old_direction = val;
    },
  };

  children = null;

  $nav = null;

  timer = null;

  relations = {
    './swiper-item': {
      type: 'child' as 'child',
    },
    './swiper-nav': {
      type: 'child' as 'child',
    },
  };

  data = {
    // 内部状态
    _current: 0,
    width: 0,
    height: 0,
    offsetX: 0,
    // todo
    offsetY: 0,
    // 列表项总数
    total: 0,

    easings,
    // js和wxs等初始化就绪
    inited: false,
    // current初始化的值就绪
    currentInited: false,
    classPrefix: `.${prefix}-swiper`,
  };

  attached() {
    this.createSelectorQuery()
      .select('#swiper')
      .boundingClientRect((rect) => {
        this.setData({
          width: rect.width,
          height: rect.height,
        });
        this.initCurrent();
      })
      .exec();
  }

  ready() {
    this.initItem();
    this.initNav();
  }

  /**
   * 初始化 swiper-item
   */
  initItem() {
    const { direction } = this.properties;
    this.children = this.getRelationNodes('./swiper-item');
    this.children.forEach((item, index) => {
      item.setIndex(index, direction);
    });
    this.setData({
      total: this.children.length,
    });
  }

  /**
   * 初始化 swiper-nav
   */
  initNav() {
    this.$nav = this.getRelationNodes('./swiper-nav')?.[0];
  }

  /**
   * 初始化也需要等待wxs完成，由wxs触发inited
   */
  inited() {
    this.updateNav(this.data._current);
    this.setData({
      inited: true,
    });
  }

  /**
   * 初始化current
   * 需要通过wxs更新位置，存在短暂延迟
   */
  initCurrent() {
    const { defaultCurrent, current } = this.properties;
    const index: any = checkVal(current) ? current : defaultCurrent;
    this.setData({
      _current: index,
      currentInited: true,
      // 默认为0时，不需要等待wxs计算位置，可直接显示
      inited: index === 0,
      ...this.calcOffset(index as any),
    });
  }

  play() {
    this.pause();
    const { interval } = this.properties;
    this.timer = setInterval(() => {
      const { inited } = this.data;
      if (!inited) return;
      this.next({ cycle: true, source: 'autoplay' });
    }, interval as any);
  }

  replay() {
    const { autoplay } = this.properties;
    autoplay && this.play();
  }

  pause() {
    this.timer && clearInterval(this.timer);
    this.timer = null;
  }

  /**
   * 跳转目标页
   * @param index 目标页索引
   * @param source 来源标记
   * @returns
   */
  goto(index: number, source: string) {
    const { current } = this.properties;
    this.triggerEvent('change', {
      _current: index,
      source,
    });
    // 使用了受控属性，必须配合change事件来更新
    if (checkVal(current)) {
      return;
    }
    this.update(index);
  }

  /**
   * 更新目标页
   * @param index 目标页索引（一页可能有多个item）
   * @returns
   */
  update(index: number, finish?) {
    const len = this.children.length;
    let fixIndex = +index;
    if (Number.isNaN(fixIndex)) return;
    if (fixIndex <= 0) {
      fixIndex = 0;
    } else if (fixIndex > len - 1) {
      fixIndex = len - 1;
    }
    this.updateNav(fixIndex);
    this.setData(
      {
        _current: fixIndex,
        ...this.calcOffset(fixIndex),
      },
      finish,
    );
  }

  /**
   * 更新导航器
   * @param index
   */
  updateNav(index) {
    if (!this.$nav) return;
    const { direction } = this.properties;
    this.$nav.onChange({
      index,
      total: this.children.length,
      direction,
    });
  }

  calcOffset(index: number) {
    const { direction } = this.properties;
    const { width, height } = this.data;
    if ((direction as any) === DIRECTION.HOR) {
      return {
        offsetX: -index * width,
      };
    }
    return {
      offsetY: -index * height,
    };
  }

  /**
   * 下一页
   * @param opt
   */
  next(opt: SwitchOpt) {
    const { _current } = this.data;
    const len = this.children.length;
    let nextIndex = _current;
    if (opt.cycle && _current === len - 1) {
      // 最后一个时，跳转第一个
      nextIndex = 0;
    } else if (len - 1 > _current) {
      nextIndex += 1;
    }
    this.goto(nextIndex, opt.source);
  }

  /**
   * 上一页
   * @param opt
   */
  prev(opt: SwitchOpt) {
    const { _current } = this.data;
    const len = this.children.length;
    let nextIndex = _current;
    if (opt.cycle && _current === 0) {
      // 第一个时，跳转到最后一个
      nextIndex = len - 1;
    } else if (nextIndex > 0) {
      nextIndex -= 1;
    }
    this.goto(nextIndex, opt.source);
  }
}
