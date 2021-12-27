/* eslint-disable */
const props = {
    /** 轮播切换动画效果类型 */
    animation: {
        type: String,
        value: 'slide',
    },
    /** 是否自动播放 */
    autoplay: {
        type: Boolean,
        value: true,
    },
    /** 当前轮播在哪一项（下标） */
    current: {
        type: Number,
        value: 0,
    },
    /** 轮播滑动方向，包括横向滑动和纵向滑动两个方向 */
    direction: {
        type: String,
        value: 'horizontal',
    },
    /** 滑动动画时长 */
    duration: {
        type: Number,
        value: 300,
    },
    /** 当使用垂直方向滚动时的高度 */
    height: {
        type: Number,
    },
    /** 轮播间隔时间 */
    interval: {
        type: Number,
        value: 5000,
    },
    /** 导航配置。`navigation.type` 表示导航器风格，圆点/分式等，没有值则不显示。`navigation.minShowNum` 表示小于这个数字不会显示导航器。`navigation.showSlideBtn` 表示是否显示两侧的滑动控制按钮 */
    navigation: {
        type: Object,
    },
};
export default props;

//# sourceMappingURL=props.js.map
