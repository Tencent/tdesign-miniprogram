import { badgeProps } from './badge.interface';
import TComponent from '../common/component';

TComponent({
  properties: {
    customStyle: String,
    color: {
      type: String,
      value: '#e34d59',
    },
    count: {
      type: Number,
      value: 0,
    },
    dot: {
      type: Boolean,
      value: false,
    },
    maxCount: {
      type: Number,
      value: 99,
    },
    content: {
      type: String,
      value: '',
    },
    size: {
      type: String,
      value: 'middle', // 尺寸，支持 'medium', 'small'
    },
    shape: {
      type: String,
      value: 'circle', // 尺寸，支持 'circle', 'rounded', 'ribbon'
    },
    showZero: {
      type: Boolean,
      value: false,
    },
    offset: {
      type: Array,
      value: [0, 0],
    },
    hasSlot: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    value: '',
  },
  lifetimes: {
    created() {},
  },
});
