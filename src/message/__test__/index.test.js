import simulate from 'miniprogram-simulate';
import path from 'path';
import Message from '../index.ts';

describe('message', () => {
  const message = simulate.load(path.resolve(__dirname, `../message`), {
    rootPath: path.resolve(__dirname, `../../../src`),
    less: true,
  });

  describe('props', () => {
    it(':visible', async () => {
      const comId = simulate.load({
        template: `<t-message id="base" marquee visible="{{visible}}" content="{{content}}" />`,
        data: {
          visible: false,
          content: '',
        },
        usingComponents: {
          't-message': message,
        },
      });

      const comp = simulate.render(comId);
      comp.attach(document.createElement('parent-wrapper'));

      await simulate.sleep(10);
      comp.setData({ visible: true, content: '这是一段文字通知 5s消失' });

      const $message = comp.querySelector('#base >>> #t-message');
      expect($message).not.toBeUndefined();
    });

    it(':theme', async () => {
      const comId = simulate.load({
        template: `<t-message id="t-message" theme="{{theme}}" visible="{{visible}}"  />`,
        data: {
          visible: false,
          theme: 'success',
        },
        usingComponents: {
          't-message': message,
        },
      });

      const comp = simulate.render(comId);
      comp.attach(document.createElement('parent-wrapper'));

      await simulate.sleep(10);
      comp.setData({ visible: true });
      const indicator = comp.querySelector('#t-message >>> .t-message');

      expect(indicator.dom.getAttribute('class').includes('t-message--success')).toBeTruthy();
    });

    it('event:', async () => {
      const handleActionBtn = jest.fn();
      const handleCloseBtn = jest.fn();
      const resetData = jest.fn();
      const comId = simulate.load({
        template: `<t-message id="base" 
          visible
          action="按钮"
          closeBtn
          duration
          marquee="-1"
          bind:actionBtnClick="handleActionBtn"
          bind:closeBtnClick="handleCloseBtn"
          />`,
        data: {
          resetData,
        },
        methods: {
          handleActionBtn,
          handleCloseBtn,
        },
        usingComponents: {
          't-message': message,
        },
      });

      const comp = simulate.render(comId);
      comp.attach(document.createElement('parent-wrapper'));

      const $action = comp.querySelector('#base >>> .t-message__btn--right');
      $action.dispatchEvent('tap');

      await simulate.sleep();
      expect(handleActionBtn).toHaveBeenCalledTimes(1);

      const $close = comp.querySelector('#base >>> .t-message__icon--right');
      $close.dispatchEvent('tap');

      await simulate.sleep();
      expect(handleCloseBtn).toHaveBeenCalledTimes(1);
    });
  });

  describe('event', () => {
    it('show:', async () => {
      const comId = simulate.load({
        template: `<t-message id="base"  icon marquee duration="20"  />`,
        usingComponents: {
          't-message': message,
        },
      });

      const comp = simulate.render(comId);
      comp.attach(document.createElement('parent-wrapper'));

      const $base = comp.querySelector('#base');

      $base.instance.show();
      await simulate.sleep(10);

      const $message = comp.querySelector('#base >>> #t-message');
      expect($message).not.toBeUndefined();
    });

    it('api:', () => {
      const comId = simulate.load({
        template: `<t-message id="t-message" />`,
        usingComponents: {
          't-message': message,
        },
      });

      const comp = simulate.render(comId);
      comp.attach(document.createElement('parent-wrapper'));

      const apiArr = ['info', 'success', 'warning', 'error'];
      apiArr.forEach(async (theme) => {
        const msgData = Message[theme]({ context: comp.instance });
        await simulate.sleep();
        expect(msgData.properties.theme).toBe(theme);
      });
    });
  });
});
