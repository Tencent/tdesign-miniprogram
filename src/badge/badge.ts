/*
 * @Author: rileycai
 * @Date: 2021-06-30 11:22:22
 * @LastEditTime: 2021-09-21 19:48:29
 * @LastEditors: Please set LastEditors
 * @Description: 第一次走查问题修复
 * @FilePath: /tdesign-miniprogram/src/badge/badge.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';

@wxComponent()
export default class Badge extends SuperComponent {
  externalClasses = ['wrapper-class', 'badge-class'];

  properties = props;

  data = {
    value: '',
  };
}
