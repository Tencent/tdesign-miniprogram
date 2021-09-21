/*
 * @Author: rileycai
 * @Date: 2021-06-30 11:22:22
 * @LastEditTime: 2021-09-20 20:03:40
 * @LastEditors: Please set LastEditors
 * @Description: 第一次走查问题修复
 * @FilePath: /tdesign-miniprogram/src/badge/badge.ts
 */
// import { BADGE_PROPS } from './badge.interface';
import { SuperComponent, wxComponent } from '../common/src/index';

type ShapeType = 'circle' | 'rounded' | 'ribbon';
type SizeType = 'medium' | 'small';
@wxComponent()
export default class Badge extends SuperComponent {
  externalClasses = ['wrapper-class', 'badge-class'];

  properties = {
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
      value: 'middle' as SizeType, // 尺寸，支持 'medium', 'small'
    },
    shape: {
      type: String,
      value: 'circle' as ShapeType, // 尺寸，支持 'circle', 'rounded', 'ribbon'
    },
    visible: {
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
  };

  data = {
    value: '',
  };
}
