import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-skeleton`;

@wxComponent()
export default class Skeleton extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = [
    'after-loading-class',
    'avatar-class',
    'title-class',
    'row-class',
    'loading-class',
  ];

  properties = {
    row: {
      type: Number,
      value: 0,
      // observer: (value: number) => {
      //   this.setData({ rowArray: Array.from({ length: value }) });
      // },
    },
    title: Boolean,
    avatar: Boolean,
    loading: {
      type: Boolean,
      value: true,
    },
    animate: {
      type: Boolean,
      value: true,
    },
    avatarSize: {
      type: String,
      value: '64rpx',
    },
    avatarShape: {
      type: String,
      value: 'round',
    },
    titleWidth: {
      type: String,
      value: '40%',
    },
    rowWidth: {
      type: null,
      value: '100%',
      observer(this: Skeleton, val) {
        if (Array.isArray(val)) {
          this.setData({ rowWidthArray: val });
        }
      },
    },
    rowHeight: {
      type: Array,
      value: null,
    },
  };

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
    isArray: false,
    rowWidthArray: [],
  };
  /**
   * Component methods
   */
}
