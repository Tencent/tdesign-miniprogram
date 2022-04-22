/**
 * 轮播组件
 * 因原生swiper受限，基于wxs重新实现，后期可以扩展更多丰富的功能
 * todo：无限循环，3D动效等
 */
import { SuperComponent, wxComponent, ControlInstance, useControl } from '../common/src/index';
import config from '../common/config';
import { DIRECTION, NavTypes } from './common/constants';
import props from './props';

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
const defaultNavigation = {
  type: NavTypes.dots,
  minShowNum: 2,
  hasNavBtn: false,
};

@wxComponent()
export default class Swiper extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  observers = {
    navigation(val) {
      this.setData({
        _navigation: { ...defaultNavigation, ...val },
      });
    },
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

  updateTimer = null;

  // 受控属性
  control: ControlInstance = null;

  relations = {
    './swiper-item': {
      type: 'child' as 'child',
      linked: function () {
        // 最后一个触发linked，才执行更新
        clearTimeout(this.updateTimer);
        // 若items变化，延迟检查更新
        this.updateTimer = setTimeout(() => {
          this.initItem();
          this.updateNav(this.control.get());
        });
      },
    },
    './swiper-nav': {
      type: 'child' as 'child',
    },
  };

  data = {
    // 内部状态：当前临时索引
    _current: 0,
    // 内部取默认值后的配置
    _navigation: null,
    // 容器宽
    _width: 0,
    // 容器高
    _height: 0,
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
    prefix,
    classPrefix: `.${prefix}-swiper`,
  };

  attached() {
    // 暂停完全受控模式，待TD全量支持受控后，再开启
    // this.control = useControl.call(this, {
    //   valueKey: 'current',
    //   defaultValueKey: 'defaultCurrent',
    // });
    // 启用半受控模式
    this.control = useControl.call(this, {
      valueKey: 'current',
      strict: false,
    });
  }

  detached() {
    this.pause();
  }

  ready() {
    this.createSelectorQuery()
      .select('#swiper')
      .boundingClientRect((rect) => {
        this.setData({
          _width: rect.width,
          _height: rect.height,
        });
        this.initItem();
        this.initNav();
        this.initCurrent();
      })
      .exec();
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
    const { _navigation } = this.data;
    if (_navigation) {
      // 启用内部导航器
      this.$nav = this.selectComponent('#swiperNav');
    } else {
      // 启用插槽嵌入的导航器
      this.$nav = this.getRelationNodes('./swiper-nav')?.[0];
    }
  }

  /**
   * 初始化也需要等待wxs完成，由wxs触发inited
   */
  inited() {
    this.updateNav(this.control.get());
    this.setData({
      inited: true,
    });
  }

  /**
   * 初始化current
   * 需要通过wxs更新位置，存在短暂延迟
   */
  initCurrent() {
    let index = +this.control.initValue;
    // 检查索引初始值超出范围
    index = Math.min(index, this.children.length - 1);
    index = Math.max(index, 0);
    this.control.set(index, {
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
    if (this.control.get() === index) {
      this.update(index);
      return;
    }
    this.control.change(
      index,
      {
        current: index,
        source,
      },
      () => {
        this.update(index);
      },
    );
  }

  /**
   * 更新目标页
   * @param index 目标页索引（一页可能有多个item）
   * @returns
   */
  update(index: number, finish?) {
    if (!this.children) return;
    const len = this.children.length;
    let fixIndex = +index;
    if (Number.isNaN(fixIndex)) return;
    if (fixIndex <= 0) {
      fixIndex = 0;
    } else if (fixIndex > len - 1) {
      fixIndex = len - 1;
    }
    this.updateNav(fixIndex);
    this.control.set(fixIndex, this.calcOffset(fixIndex), finish);
  }

  /**
   * 更新导航器
   * @param index
   */
  updateNav(index) {
    if (!this.$nav) return;
    const { direction } = this.properties;
    this.$nav?.onChange({
      index,
      total: this.children.length,
      direction,
    });
  }

  calcOffset(index: number) {
    const { direction } = this.properties;
    const { _width, _height } = this.data;
    if ((direction as any) === DIRECTION.HOR) {
      return {
        offsetX: -index * _width,
      };
    }
    return {
      offsetY: -index * _height,
    };
  }

  /**
   * 下一页
   * @param opt
   */
  next(opt: SwitchOpt) {
    const innerVal = this.control.get();
    const len = this.children.length;
    let nextIndex = innerVal;
    if (opt.cycle && innerVal === len - 1) {
      // 最后一个时，跳转第一个
      nextIndex = 0;
    } else if (len - 1 > innerVal) {
      nextIndex += 1;
    }
    this.goto(nextIndex, opt.source);
  }

  /**
   * 上一页
   * @param opt
   */
  prev(opt: SwitchOpt) {
    const innerVal = this.control.get();
    const len = this.children.length;
    let nextIndex = innerVal;
    if (opt.cycle && innerVal === 0) {
      // 第一个时，跳转到最后一个
      nextIndex = len - 1;
    } else if (nextIndex > 0) {
      nextIndex -= 1;
    }
    this.goto(nextIndex, opt.source);
  }

  /**
   * 内置导航组件，监听按钮点击
   * @param e
   */
  onSwiperNavBtnChange(e) {
    const { dir, ...rest } = e.detail;
    this.pause();
    this?.[dir](rest);
  }
}
