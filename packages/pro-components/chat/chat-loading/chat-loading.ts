import { ComponentWithComputed } from 'miniprogram-computed';
import config from '../../../components/common/config';

const { prefix } = config;
const name = `${prefix}-chat-loading`;

const constructorOptions = {
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    animation: {
      type: String,
      value: 'moving',
    },
    text: {
      type: String,
      value: '',
    },
  },
  data: {
    COMPONENT_NAME: name,
  },
};
ComponentWithComputed(constructorOptions);
