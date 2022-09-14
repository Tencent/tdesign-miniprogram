import simulate from 'miniprogram-simulate';
import path from 'path';
import similateApi from 'miniprogram-simulate/src/api';
import Message from '../index';
import * as Util from '../../common/utils';

global.wx = {
  ...similateApi,
};

const mockGetRect = jest.spyOn(Util, 'getRect');
mockGetRect.mockImplementation(() => {
  return new Promise((resolve) => resolve({ height: 46, width: 156 }));
});

const mock = jest.spyOn(Util, 'getInstance');

describe('message', () => {
  const message = simulate.load(path.resolve(__dirname, `../message`), 't-message', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  jest.resetModules();
  const icon = simulate.load(path.resolve(__dirname, `../../icon/icon`), 't-icon', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });
  describe('props', () => {
    it(': icon', async () => {
      const id = simulate.load({
        template: `<t-message id="t-message" />`,
        usingComponents: {
          't-message': message,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $message = comp.querySelector('#t-message');

      mock.mockImplementation(() => $message.instance);

      Message.info({
        context: $message.instance,
        offset: [20, 32],
        icon: 'notification',
        marquee: {},
        content: 'icon 使用空值',
        duration: -1,
      });
      await simulate.sleep(540);

      // theme
      const $theme = comp.querySelector('#t-message >>> .t-message');
      expect($theme.dom.getAttribute('class').includes('t-message--info')).toBe(true);

      // icon
      const $prefixIcon = comp.querySelector('#t-message >>> .t-message__icon--left');
      const iconId = simulate.load({
        template: `<t-icon id="t-icon" name="{{name}}" size="44rpx"></t-icon>`,
        data: {
          name: 'notification',
        },
        usingComponents: {
          't-icon': icon,
        },
      });
      const iconComp = simulate.render(iconId).querySelector('#t-icon');
      expect($prefixIcon.dom.innerHTML).toContain(iconComp.dom.innerHTML);

      // content
      const $content = comp.querySelector('#t-message >>> .t-message__text');
      expect($content.dom.textContent).toContain('icon 使用空值');
      comp.detach();
    });

    it(': marquee', async () => {
      const id = simulate.load({
        template: `<t-message id="t-message" />`,
        usingComponents: {
          't-message': message,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $message = comp.querySelector('#t-message');

      mock.mockImplementation(() => $message.instance);

      Message.info({
        context: $message.instance,
        offset: [20, 32],
        marquee: { speed: 100, loop: 3, delay: 0 },
        icon: '',
        content: 'icon 使用空值',
        duration: 10,
      });
      await simulate.sleep(540);
      Message.hide();
    });
  });

  describe('event', () => {
    it(': closeBtnClick', async () => {
      const actionBtnClick = jest.fn();
      const id = simulate.load({
        template: `<t-message id="t-message" bind:closeBtnClick="actionBtnClick"/>`,
        usingComponents: {
          't-message': message,
        },
        methods: {
          actionBtnClick,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $message = comp.querySelector('#t-message');

      mock.mockImplementation(() => $message.instance);

      Message.warning({
        context: $message.instance,
        offset: [20, 32],
        content: '这是一条带关闭的消息通知',
        duration: 0,
        closeBtn: true,
      });
      await simulate.sleep(540);

      const $icon = comp.querySelector('#t-message >>> .t-message__icon--right');
      $icon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(actionBtnClick).toHaveBeenCalledTimes(1);
      Message.hide();
    });
  });
});
