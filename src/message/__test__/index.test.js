import path from 'path';
import simulate from 'miniprogram-simulate';
import Message from '../index';
import * as Util from '../../common/utils';

const mockGetRect = jest.spyOn(Util, 'getRect');
mockGetRect.mockImplementation(() => {
  return new Promise((resolve) => resolve({ height: 46, width: 156 }));
});

const mockInstance = jest.spyOn(Util, 'getInstance');

describe('message', () => {
  const message = load(path.resolve(__dirname, `../message`), 't-message');

  jest.resetModules();
  const icon = load(path.resolve(__dirname, `../../icon/icon`), 't-icon');

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-message id="t-message" ></t-message>`,
        usingComponents: {
          't-message': message,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $message = comp.querySelector('#t-message');

      mockInstance.mockImplementation(() => $message.instance);

      const style = 'color: red';
      const customStyle = 'font-size: 9px';

      Message.warning({
        context: $message.instance,
        offset: [20, 32],
        content: '这是一条带关闭的消息通知',
        duration: 0,
        style: style,
        customStyle: customStyle,
        closeBtn: true,
      });
      await simulate.sleep(540);

      expect(comp.toJSON()).toMatchSnapshot();

      const $style = comp.querySelector('#t-message >>> .t-message');
      if (VIRTUAL_HOST) {
        expect($style.dom.getAttribute('style').includes(`${style}; ${customStyle}`)).toBeTruthy();
      } else {
        expect($style.dom.getAttribute('style').includes(`${customStyle}`)).toBeTruthy();
      }
    });

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

      mockInstance
        .mockImplementation(() => $message.instance)
        .mockImplementationOnce(() => null)
        .mockImplementationOnce(() => null);

      // null: 控制台输出 console.error('未找到组件,请确认 selector && context 是否正确');
      Message.info({
        context: $message.instance,
      });
      await simulate.sleep();
      expect(comp.querySelector('#t-message >>> .t-message')).toBeUndefined();

      // null hide()方法未被调用
      Message.hide();

      Message.info({
        context: $message.instance,
        offset: [20, 32],
        icon: 'notification',
        marquee: {},
        content: 'iconName 为 notification',
        duration: -1,
      });
      await simulate.sleep(540);
      expect(comp.querySelector('#t-message >>> .t-message')).not.toBeUndefined();

      // theme
      const $theme = comp.querySelector('#t-message >>> .t-message');
      expect($theme.dom.getAttribute('class').includes('t-message--info')).toBe(true);

      // icon
      const $prefixIcon = comp.querySelector('#t-message >>> .t-message__icon--left');
      const iconId = simulate.load({
        template: `<t-icon id="t-icon" name="{{name}}"></t-icon>`,
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
      expect($content.dom.textContent).toContain('iconName 为 notification');
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

      mockInstance.mockImplementation(() => $message.instance);
      Message.info({
        context: $message.instance,
        offset: [20, 32],
        marquee: { speed: 100, loop: 3, delay: 0 },
        icon: false,
        content: 'icon 使用空值',
        duration: 0,
      });
      await simulate.sleep(540);
      // icon 为空
      const $prefixIcon = comp.querySelector('#t-message >>> .t-message__icon--left');
      expect($prefixIcon.dom.innerHTML).toBe('');
      Message.hide();
      await simulate.sleep(500);
      expect($message.instance.data.visible).toBe(false);
    });
  });

  describe('event', () => {
    it(': closeBtnClick', async () => {
      const actionBtnClick = jest.fn();
      const id = simulate.load({
        template: `<t-message id="t-message" bind:close-btn-click="actionBtnClick"/>`,
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

      mockInstance.mockImplementation(() => $message.instance);

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

  describe('multiple', () => {
    it(': message-count-gap', async () => {
      const id = simulate.load({
        template: `<t-message id="t-message" ></t-message>`,
        usingComponents: {
          't-message': message,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $message = comp.querySelector('#t-message');

      mockInstance.mockImplementation(() => $message.instance);
      Message.hide();
      const showMessageFn = async (i) => {
        Message.info({
          context: $message.instance,
          offset: [20, 32],
          content: `这是第${i}条消息通知`,
          duration: -1,
          gap: '16',
        });
      };
      showMessageFn('1');
      await simulate.sleep(550);
      showMessageFn('2');
      await simulate.sleep(550);
      showMessageFn('3');
      await simulate.sleep(550);
      const $messageItems = comp.querySelectorAll('#t-message >>> .t-message');
      expect($messageItems.length).toBe(3);
      if ($messageItems.length === 3) {
        const top = 20 + (46 + 16) * 2;
        expect($messageItems[2].dom.getAttribute('style').includes(`top:${top}px;`)).toBeTruthy();
      }
    });
  });
});
