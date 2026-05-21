import path from 'path';
import simulate from 'miniprogram-simulate';
import * as titleProps from '../../title/props';
import * as titleType from '../../title/type';

describe('title exports', () => {
  it(': props module can be loaded', () => {
    expect(titleProps).toBeDefined();
  });

  it(': type module can be loaded', () => {
    expect(titleType).toBeDefined();
  });
});

describe('title', () => {
  const Title = load(path.resolve(__dirname, '../../title/title'));

  describe('props', () => {
    it(': style && customStyle', async () => {
      const id = simulate.load({
        template: `<t-title class="title" style="{{style}}" customStyle="{{customStyle}}" content="Title"></t-title>`,
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      if (VIRTUAL_HOST) {
        expect($title.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect($title.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': content', () => {
      const id = simulate.load({
        template: `<t-title class="title" content="{{content}}"></t-title>`,
        data: {
          content: '标题内容',
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.querySelector('.title').dom.textContent).toContain(comp.data.content);
    });

    it(': level - h1 (default)', () => {
      const id = simulate.load({
        template: `<t-title class="title" content="H1 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h1')).toBeTruthy();
    });

    it(': level - h2', () => {
      const id = simulate.load({
        template: `<t-title class="title" level="h2" content="H2 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h2')).toBeTruthy();
    });

    it(': level - h3', () => {
      const id = simulate.load({
        template: `<t-title class="title" level="h3" content="H3 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h3')).toBeTruthy();
    });

    it(': level - h4', () => {
      const id = simulate.load({
        template: `<t-title class="title" level="h4" content="H4 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h4')).toBeTruthy();
    });

    it(': level - h5', () => {
      const id = simulate.load({
        template: `<t-title class="title" level="h5" content="H5 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h5')).toBeTruthy();
    });

    it(': level - h6', () => {
      const id = simulate.load({
        template: `<t-title class="title" level="h6" content="H6 Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $title = comp.querySelector('.title >>> .t-typography');
      expect($title.dom.getAttribute('class').includes('t-typography--h6')).toBeTruthy();
    });

    it(': ellipsis[Boolean]', () => {
      const id = simulate.load({
        template: `<t-title class="title" ellipsis="{{true}}" content="{{content}}"></t-title>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.title >>> .t-typography__ellipsis-wrapper');
      expect($wrapper).toBeDefined();
      const $content = comp.querySelector('.title >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
    });

    it(': ellipsis[Object] with row', () => {
      const id = simulate.load({
        template: `<t-title class="title" ellipsis="{{ellipsis}}" content="{{content}}"></t-title>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2 },
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $content = comp.querySelector('.title >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
      expect($content.dom.getAttribute('style')).toContain('-webkit-line-clamp:2');
    });

    it(': ellipsis[Object] with expandable', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-title class="title" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-title>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.title >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();
      expect($expandBtn.dom.textContent).toContain('展开');

      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(1);
    });

    it(': ellipsis[Object] with expandable and collapsible', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-title class="title" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-title>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true, collapsible: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 展开
      const $expandBtn = comp.querySelector('.title >>> .t-typography-ellipsis-symbol');
      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 收起按钮出现
      const $collapseBtn = comp.querySelector('.title >>> .t-typography-ellipsis-symbol');
      expect($collapseBtn).toBeDefined();
      expect($collapseBtn.dom.textContent).toContain('收起');

      // 收起
      $collapseBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(2);
    });

    it(': ellipsis[Object] without expandable does not show button', () => {
      const id = simulate.load({
        template: `<t-title class="title" ellipsis="{{ellipsis}}" content="{{content}}"></t-title>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2, expandable: false },
        },
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.title >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).not.toBeTruthy();
    });

    it(': without ellipsis does not show ellipsis wrapper', () => {
      const id = simulate.load({
        template: `<t-title class="title" content="Short Title"></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.title >>> .t-typography__ellipsis-wrapper');
      expect($wrapper).not.toBeTruthy();
    });

    it(': slot content', () => {
      const id = simulate.load({
        template: `<t-title class="title"><view>Slot Title</view></t-title>`,
        usingComponents: {
          't-title': Title,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.querySelector('.title').dom.textContent).toContain('Slot Title');
    });
  });
});
