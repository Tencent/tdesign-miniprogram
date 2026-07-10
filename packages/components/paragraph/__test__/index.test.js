import path from 'path';
import simulate from 'miniprogram-simulate';
import * as paragraphProps from '../props';
import * as paragraphType from '../type';

describe('paragraph exports', () => {
  it(': props module can be loaded', () => {
    expect(paragraphProps).toBeDefined();
  });

  it(': type module can be loaded', () => {
    expect(paragraphType).toBeDefined();
  });
});

describe('paragraph', () => {
  const Paragraph = load(path.resolve(__dirname, '../paragraph'));

  describe('props', () => {
    it(': style && customStyle', async () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" style="{{style}}" customStyle="{{customStyle}}" content="hello"></t-paragraph>`,
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $paragraph = comp.querySelector('.paragraph >>> .t-typography');
      if (VIRTUAL_HOST) {
        expect(
          $paragraph.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($paragraph.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': content', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系。',
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.querySelector('.paragraph').dom.textContent).toContain(comp.data.content);
    });

    it(': slot content', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph"><view>Slot Content</view></t-paragraph>`,
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.querySelector('.paragraph').dom.textContent).toContain('Slot Content');
    });

    it(': ellipsis[Boolean]', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{true}}" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.paragraph >>> .t-typography__ellipsis-wrapper');
      expect($wrapper).toBeDefined();
      const $content = comp.querySelector('.paragraph >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
    });

    it(': ellipsis[Object] with row', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 3 },
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $content = comp.querySelector('.paragraph >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
      expect($content.dom.getAttribute('style')).toContain('-webkit-line-clamp:3');
    });

    it(': ellipsis[Object] with expandable', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();
      expect($expandBtn.dom.textContent).toContain('展开');

      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(1);
    });

    it(': ellipsis[Object] with expandable and collapsible', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2, expandable: true, collapsible: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 展开
      const $expandBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 收起按钮
      const $collapseBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      expect($collapseBtn).toBeDefined();
      expect($collapseBtn.dom.textContent).toContain('收起');

      // 收起
      $collapseBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(2);
    });

    it(': ellipsis[Object] without expandable does not show button', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2, expandable: false },
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).not.toBeTruthy();
    });

    it(': ellipsis[Object] with expandable but not collapsible', async () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true, collapsible: false },
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();

      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 展开后 collapsible=false，不应有收起按钮
      const $paragraph = comp.querySelector('.paragraph');
      expect($paragraph.data.isExpanded).toBe(true);
    });

    it(': ellipsis[Object] with suffix slot', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"><view slot="suffix">更多</view></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true, collapsible: false, suffix: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $suffixBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      expect($suffixBtn).toBeDefined();

      $suffixBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(1);
    });

    it(': without ellipsis does not show ellipsis wrapper', () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" content="Short paragraph"></t-paragraph>`,
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.paragraph >>> .t-typography__ellipsis-wrapper');
      expect($wrapper).not.toBeTruthy();
    });

    it(': ellipsis expanded removes line clamp style', async () => {
      const id = simulate.load({
        template: `<t-paragraph class="paragraph" ellipsis="{{ellipsis}}" content="{{content}}"></t-paragraph>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2, expandable: true, collapsible: true },
        },
        usingComponents: {
          't-paragraph': Paragraph,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 展开前有 line-clamp 样式
      let $content = comp.querySelector('.paragraph >>> .t-typography__ellipsis-content');
      expect($content.dom.getAttribute('style')).toContain('-webkit-line-clamp:2');

      // 点击展开
      const $expandBtn = comp.querySelector('.paragraph >>> .t-typography-ellipsis-symbol');
      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 展开后样式应为空（isExpanded = true）
      $content = comp.querySelector('.paragraph >>> .t-typography__ellipsis-content');
      expect($content.dom.getAttribute('style')).toBe('');
    });
  });
});
