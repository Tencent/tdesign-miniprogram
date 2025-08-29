import path from 'path';
import simulate from 'miniprogram-simulate';

// 文本位置
const textAlign = ['left', 'center', 'right'];

// 类型
const layout = ['horizontal', 'vertical'];

describe('Divider', () => {
  const divider = load(path.resolve(__dirname, `../divider`), 't-divider');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-divider class="divider" style="{{style}}" customStyle="{{customStyle}}"></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $divider = comp.querySelector('.divider >>> .t-divider');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($divider.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($divider.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`:base`, () => {
    const id = simulate.load({
      template: `<t-divider class="divider"></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  textAlign.forEach((align) => {
    it(`:align ${align} render correctly`, () => {
      const id = simulate.load({
        template: `<t-divider class="divider" align="{{align}}"></t-divider>`,
        usingComponents: {
          't-divider': divider,
        },
        data: {
          align,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $divider = comp.querySelector('.divider >>> .t-divider');
      expect($divider.dom.getAttribute('class').includes(`t-divider--${align}`));
    });
  });

  it(`:content string render correctly`, () => {
    const id = simulate.load({
      template: `<t-divider class="divider" content="{{content}}"></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
      data: {
        content: '文字信息',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $divider = comp.querySelector('.divider >>> .t-divider__content');
    expect($divider.dom.innerHTML).toBe('<wx-view> 文字信息 </wx-view>');
  });

  it(`:content slot render correctly`, () => {
    const id = simulate.load({
      template: `<t-divider class="divider"><text slot="content">文字信息</text></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $divider = comp.querySelector('.divider >>> .t-divider__content');
    expect($divider.dom.innerHTML).toBe('<wx-text>文字信息</wx-text>');
  });

  it(':dashed render correctly', () => {
    const id = simulate.load({
      template: `<t-divider class="divider" dashed="{{dashed}}"></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
      data: {
        dashed: true,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $divider = comp.querySelector('.divider >>> .t-divider');
    expect($divider.dom.getAttribute('class').includes(`t-divider--dash`));
  });

  layout.forEach((lay) => {
    it(`:layout ${lay} render correctly`, () => {
      const id = simulate.load({
        template: `<t-divider class="divider" layout="{{layout}}"></t-divider>`,
        data: {
          layout: 'horizontal',
        },
        usingComponents: {
          't-divider': divider,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $divider = comp.querySelector('.divider >>> .t-divider');
      expect($divider.dom.getAttribute('class').includes(`t-divider--${lay}`));
    });
  });
});
