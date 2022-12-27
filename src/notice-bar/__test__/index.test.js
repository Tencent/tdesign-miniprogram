import simulate from 'miniprogram-simulate';
import path from 'path';
import similateApi from 'miniprogram-simulate/src/api';
import * as Util from '../../common/utils';

// simulate提供一些基本的api，如getSystemInfoSync, createAnimation, 如果涉及到复杂的链式调用需要自行 mock
global.wx = {
  ...similateApi,
};

const mockGetAnimationFrame = jest.spyOn(Util, 'getAnimationFrame');
const mockGetRect = jest.spyOn(Util, 'getRect');

// 设置每次调用函数的值
mockGetAnimationFrame.mockImplementation((cb) => {
  return cb();
});

// 调用函数第1次的返回值 nodeRect
mockGetRect.mockImplementation((context, id) => {
  if (id === '.t-notice-bar__content') {
    return {
      width: 350,
    };
  }
  return {
    width: 313,
  };
});

describe('notice-bar', () => {
  const noticeBar = load(path.resolve(__dirname, `../notice-bar`), 't-notice-bar');
  jest.resetModules();
  const icon = load(path.resolve(__dirname, `../../icon/icon`), 't-icon');

  describe('props', () => {
    it(': visible', () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"></t-notice-bar>`,
        data: {
          visible: true,
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      expect(comp.querySelector('.base >>> .t-notice-bar')).toBeDefined();

      comp.setData({
        visible: false,
      });
      expect(comp.querySelector('.base >>> .t-notice-bar')).not.toBeDefined();

      comp.detach();
    });

    it(': theme', () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          theme="{{theme}}"
          ></t-notice-bar>`,
        data: {
          visible: true,
          theme: 'info',
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $component = comp.querySelector('.base >>> .t-notice-bar');
      expect($component.dom.getAttribute('class').includes('t-notice-bar--info')).toBeTruthy();

      comp.setData({
        theme: 'success',
      });
      expect($component.dom.getAttribute('class').includes('t-notice-bar--success')).toBeTruthy();
    });

    it(': content', () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          content="{{content}}"></t-notice-bar>`,
        data: {
          visible: true,
          content: 'notice-bar content',
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $noticeBar = comp.querySelector('.base');
      const $content = comp.querySelector('.base >>> .t-notice-bar__content');

      expect($content.dom.textContent.trim()).toBe($noticeBar.instance.data.content);
    });

    it(': extra', () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          extra="{{extra}}"></t-notice-bar>`,
        data: {
          visible: true,
          extra: 'notice-bar extra',
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $noticeBar = comp.querySelector('.base');
      const $extra = comp.querySelector('.base >>> .t-notice-bar__extra');

      expect($extra.dom.textContent.trim()).toBe($noticeBar.instance.data.extra);
    });

    it(': prefix-icon', () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          prefixIcon="{{prefixIcon}}"></t-notice-bar>`,
        data: {
          visible: true,
          prefixIcon: false,
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      expect(comp.querySelector('.base >>> .t-notice-bar__prefix-icon')).toBeUndefined();

      comp.setData({
        prefixIcon: 'add',
      });

      const iconId = simulate.load({
        template: `<t-icon name="{{name}}"></t-icon>`,
        data: {
          name: 'add',
        },
        usingComponents: {
          't-icon': icon,
        },
      });
      const iconComp = simulate.render(iconId);
      expect(comp.querySelector('.base >>> .t-notice-bar__prefix-icon').dom.innerHTML).toContain(
        iconComp.dom.innerHTML,
      );
    });

    const delay = 7100;
    it(
      ': marquee',
      async () => {
        const id = simulate.load({
          template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          marquee="{{marquee}}"
          content="{{content}}"
        ></t-notice-bar>`,
          data: {
            visible: true,
            content: '提示文字描述提示文字描述提示文字描述提示文字描述文',
            // marquee: true,
            marquee: {
              speed: 80,
              loop: -1,
              delay: 0,
            },
          },
          usingComponents: {
            't-notice-bar': noticeBar,
          },
        });

        const comp = simulate.render(id);
        comp.attach(document.createElement('parent-wrapper'));
        await simulate.sleep(delay); // 等待 delay 后再继续后续代码的执行

        expect(comp.toJSON()).toMatchSnapshot();
        const $instance = comp.querySelector('.base');
        const $content = comp.querySelector('.base >>> .t-notice-bar__content');
        expect($content.dom.textContent.trim()).toBe($instance.data.content);

        // TODO: marquee 需要支持 Object && Boolean, 单测环境中，marquee值会固定为默认值 false
        // marquee = false, content内容开启超出换行
        expect($content.dom.getAttribute('class')).not.toContain('t-notice-bar__content-wrapable');
        // const componentInstance = simulate.render(noticeBar).instance;
        // expect(componentInstance.data.marquee).toEqual(comp.instance.data.marquee);
      },
      delay,
    );
  });

  describe('slots', () => {
    it(': content', () => {
      const text = 'content 内容';
      const id = simulate.load({
        template: `<t-notice-bar
          class="base"
          visible="{{visible}}"
          >
            <text slot="content">{{text}}</text>
          </t-notice-bar>`,
        data: {
          visible: true,
          text,
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $content = comp.querySelector('.base >>> .t-notice-bar__content');
      expect($content.dom.textContent).toBe(text);
    });
  });

  describe('event', () => {
    let triggerName = null;
    const click = jest.fn((e) => {
      const { trigger } = e.detail;
      triggerName = trigger;
    });

    it(': click', async () => {
      const id = simulate.load({
        template: `<t-notice-bar
          class="base
          visible="{{visible}}"
          suffixIcon="chevron-right"
          extra="详情"
          content="提示文字描述提示文字描述提示文字描述"
          bind:click="click"
        ></t-notice-bar>`,
        data: {
          visible: true,
        },
        methods: {
          click,
        },
        usingComponents: {
          't-notice-bar': noticeBar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $prefixIcon = comp.querySelector('.base >>> .t-notice-bar__prefix-icon');
      const $content = comp.querySelector('.base >>> .t-notice-bar__content');
      const $extra = comp.querySelector('.base >>> .t-notice-bar__extra');
      const $suffixIcon = comp.querySelector('.base >>> .t-notice-bar__suffix-icon');
      $prefixIcon.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(triggerName).toBe('prefix-icon');
      expect(click).toHaveBeenCalledTimes(1);
      $content.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(triggerName).toBe('content');
      expect(click).toHaveBeenCalledTimes(2);
      $extra.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(triggerName).toBe('extra');
      expect(click).toHaveBeenCalledTimes(3);

      $suffixIcon.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(triggerName).toBe('suffix-icon');
      expect(click).toHaveBeenCalledTimes(4);
    });
  });
});
