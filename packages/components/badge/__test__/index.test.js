import path from 'path';
import simulate from 'miniprogram-simulate';
import { hex2Rgb } from '../../../test/utils/colors';

const shapes = ['circle', 'square', 'round', 'ribbon'];

const sizes = ['small', 'medium'];

describe('badge', () => {
  const badge = load(path.resolve(__dirname, `../badge`), 't-badge');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-badge class="badge" style="{{style}}" customStyle="{{customStyle}}"></t-badge>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-badge': badge,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $badge = comp.querySelector('.badge >>> .t-badge');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($badge.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($badge.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`:base`, () => {
    const id = simulate.load({
      template: `<t-badge class="badge" dot content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    // expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':dot', () => {
    const id = simulate.load({
      template: `<t-badge class="badge" dot content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $dot = comp.querySelector('.badge >>> .t-badge--basic');
    expect($dot.dom.getAttribute('class').includes('t-badge--dot')).toBeTruthy();
  });

  it(':color', () => {
    const id = simulate.load({
      template: `<t-badge class="badge" color="{{color}}" dot content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        color: '#332244',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $dot = comp.querySelector('.badge >>> .t-badge--basic');
    expect($dot.dom.style.backgroundColor).toBe(hex2Rgb('#332244'));
  });

  it(':content', () => {
    const id = simulate.load({
      template: `<t-badge class="badge" content="{{content}}" dot></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        content: '消息提醒',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $content = comp.querySelector('.badge >>> .t-badge__content-text');
    expect($content.dom.textContent).toBe('消息提醒');
  });

  it(':count', () => {
    const id = simulate.load({
      template: `<t-badge class="badge" count="{{count}}" content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        count: 'new',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $count = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count.dom.textContent.trim()).toBe('new');
  });

  it(':max-count', () => {
    const id = simulate.load({
      template: `<t-badge class="badge" count="{{count}}" maxCount="{{maxCount}}" content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        maxCount: 80,
        count: 90,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $count = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count.dom.textContent.trim()).toBe('80+');
  });

  shapes.forEach((shape) => {
    it(`:shape ${shape}`, () => {
      const id = simulate.load({
        template: `<t-badge class="badge" count="{{count}}" shape="{{shape}}" content="测试"></t-badge>`,
        usingComponents: {
          't-badge': badge,
        },
        data: {
          shape,
          count: 90,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $count = comp.querySelector('.badge >>> .t-badge--basic');
      expect($count.dom.getAttribute('class').includes(`t-badge--${shape}`)).toBeTruthy();
    });
  });

  sizes.forEach((size) => {
    it(`:size ${size}`, () => {
      const id = simulate.load({
        template: `<t-badge class="badge" dot size="{{size}}" content="测试"></t-badge>`,
        usingComponents: {
          't-badge': badge,
        },
        data: {
          size,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $count = comp.querySelector('.badge >>> .t-badge--basic');

      expect($count.dom.getAttribute('class').includes(`t-badge--${size}`)).toBeTruthy();
    });
  });

  it(':show-zero', async () => {
    const id = simulate.load({
      template: `<t-badge class="badge" count="{{count}}" showZero="{{showZero}}" content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        showZero: false,
        count: 0,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $count = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count).toBeUndefined();

    comp.setData({ showZero: true });

    const $count2 = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count2.dom.textContent.trim()).toBe('0');
  });

  it(':offset string with unit', async () => {
    const id = simulate.load({
      template: `<t-badge class="badge" count="{{count}}" offset="{{offset}}" content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        count: 9,
        offset: ['15px', '20em'],
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $count = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count.dom.style.top).toBe('20em');
  });

  it(':offset number without unit', async () => {
    const id = simulate.load({
      template: `<t-badge class="badge" count="{{count}}" offset="{{offset}}" content="测试"></t-badge>`,
      usingComponents: {
        't-badge': badge,
      },
      data: {
        count: 9,
        offset: [16, 29],
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $count = comp.querySelector('.badge >>> .t-badge--basic');
    expect($count.dom.style.top).toBe('29px');
  });
});
