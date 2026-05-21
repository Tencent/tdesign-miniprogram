import path from 'path';
import simulate from 'miniprogram-simulate';
import * as textExports from '../../text/index';

describe('text exports', () => {
  it(': index.ts should export props and type', () => {
    expect(textExports).toBeDefined();
  });
});

describe('text', () => {
  const Text = load(path.resolve(__dirname, '../../text/text'));

  describe('props', () => {
    it(': style && customStyle', async () => {
      const id = simulate.load({
        template: `<t-text class="text" style="{{style}}" customStyle="{{customStyle}}" content="hello"></t-text>`,
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      if (VIRTUAL_HOST) {
        expect($text.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect($text.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': content', () => {
      const id = simulate.load({
        template: `<t-text class="text" content="{{content}}"></t-text>`,
        data: {
          content: 'TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系。',
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.querySelector('.text').dom.textContent).toContain(comp.data.content);
    });

    it(': code', () => {
      const id = simulate.load({
        template: `<t-text class="text" code="{{true}}" content="code text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--code');
      expect($inner).toBeDefined();
    });

    it(': strong', () => {
      const id = simulate.load({
        template: `<t-text class="text" strong="{{true}}" content="bold text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--strong');
      expect($inner).toBeDefined();
    });

    it(': italic', () => {
      const id = simulate.load({
        template: `<t-text class="text" italic="{{true}}" content="italic text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--italic');
      expect($inner).toBeDefined();
    });

    it(': underline', () => {
      const id = simulate.load({
        template: `<t-text class="text" underline="{{true}}" content="underline text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--underline');
      expect($inner).toBeDefined();
    });

    it(': delete', () => {
      const id = simulate.load({
        template: `<t-text class="text" delete="{{true}}" content="deleted text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--delete');
      expect($inner).toBeDefined();
    });

    it(': keyboard', () => {
      const id = simulate.load({
        template: `<t-text class="text" keyboard="{{true}}" content="Ctrl"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--keyboard');
      expect($inner).toBeDefined();
    });

    it(': mark[Boolean]', () => {
      const id = simulate.load({
        template: `<t-text class="text" mark="{{true}}" content="marked text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--mark');
      expect($inner).toBeDefined();
    });

    it(': mark[String] with custom color', () => {
      const id = simulate.load({
        template: `<t-text class="text" mark="{{mark}}" content="marked text"></t-text>`,
        data: {
          mark: '#07c160',
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $inner = comp.querySelector('.text >>> .t-typography--mark');
      expect($inner).toBeDefined();
      // markStyle 在上层容器或 decor 元素的 style 中
      const $text = comp.querySelector('.text >>> .t-typography');
      const style = $text.dom.getAttribute('style') || '';
      const decorStyle = $inner.dom.getAttribute('style') || '';
      expect(style + decorStyle).toContain('background-color:#07c160');
    });

    it(': disabled', () => {
      const id = simulate.load({
        template: `<t-text class="text" disabled="{{true}}" content="disabled text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--disabled')).toBeTruthy();
    });

    it(': theme - primary', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="primary" content="primary text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--primary')).toBeTruthy();
    });

    it(': theme - secondary', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="secondary" content="secondary text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--secondary')).toBeTruthy();
    });

    it(': theme - success', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="success" content="success text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--success')).toBeTruthy();
    });

    it(': theme - warning', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="warning" content="warning text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--warning')).toBeTruthy();
    });

    it(': theme - error', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="error" content="error text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--error')).toBeTruthy();
    });

    it(': theme should not add class when disabled', () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="primary" disabled="{{true}}" content="text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('class').includes('t-typography--disabled')).toBeTruthy();
      expect($text.dom.getAttribute('class').includes('t-typography--primary')).not.toBeTruthy();
    });

    it(': multiple decorations combined', () => {
      const id = simulate.load({
        template: `<t-text class="text" strong="{{true}}" italic="{{true}}" underline="{{true}}" code="{{true}}" content="decorated"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $strong = comp.querySelector('.text >>> .t-typography--strong');
      const $italic = comp.querySelector('.text >>> .t-typography--italic');
      const $underline = comp.querySelector('.text >>> .t-typography--underline');
      const $code = comp.querySelector('.text >>> .t-typography--code');
      expect($strong).toBeDefined();
      expect($italic).toBeDefined();
      expect($underline).toBeDefined();
      expect($code).toBeDefined();
    });

    it(': ellipsis[Boolean]', () => {
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{true}}" content="{{content}}"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.text >>> .t-typography__ellipsis-wrapper');
      expect($wrapper).toBeDefined();
      const $content = comp.querySelector('.text >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
    });

    it(': ellipsis[Object] with row', () => {
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{ellipsis}}" content="{{content}}"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 2 },
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $content = comp.querySelector('.text >>> .t-typography__ellipsis-content');
      expect($content).toBeDefined();
      expect($content.dom.getAttribute('style')).toContain('-webkit-line-clamp:2');
    });

    it(': ellipsis[Object] with expandable', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.text >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();
      expect($expandBtn.dom.textContent).toContain('展开');

      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(1);
    });

    it(': ellipsis[Object] with collapsible', async () => {
      const handleExpand = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{ellipsis}}" content="{{content}}" bind:expand="handleExpand"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true, collapsible: true },
        },
        methods: {
          handleExpand,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 先展开
      const $expandBtn = comp.querySelector('.text >>> .t-typography-ellipsis-symbol');
      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 展开后应有收起按钮
      const $collapseBtn = comp.querySelector('.text >>> .t-typography-ellipsis-symbol');
      expect($collapseBtn).toBeDefined();
      expect($collapseBtn.dom.textContent).toContain('收起');

      $collapseBtn.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleExpand).toHaveBeenCalledTimes(2);
    });

    it(': ellipsis[Object] with expandable but not collapsible', async () => {
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{ellipsis}}" content="{{content}}"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { row: 1, expandable: true, collapsible: false },
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.text >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();

      $expandBtn.dispatchEvent('tap');
      await simulate.sleep(10);

      // 展开后 collapsible=false，不应有收起按钮（querySelector 未找到返回 undefined）
      const $text = comp.querySelector('.text');
      expect($text.data.isExpanded).toBe(true);
    });

    it(': ellipsis with copyable shows extra margin', () => {
      const id = simulate.load({
        template: `<t-text class="text" ellipsis="{{ellipsis}}" copyable="{{true}}" content="{{content}}"></t-text>`,
        data: {
          content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。',
          ellipsis: { expandable: true },
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $expandBtn = comp.querySelector('.text >>> .t-typography-ellipsis-symbol');
      expect($expandBtn).toBeDefined();
      // rpx 在编译后变为 px
      expect($expandBtn.dom.getAttribute('style')).toContain('margin-right:16px');
    });

    it(': copyable[Boolean]', () => {
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{true}}" content="copyable text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      expect($copy).toBeDefined();
    });

    it(': copyable triggers copy event', async () => {
      const handleCopy = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{true}}" content="{{content}}" bind:copy="handleCopy"></t-text>`,
        data: {
          content: '复制文本',
        },
        methods: {
          handleCopy,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleCopy).toHaveBeenCalledTimes(1);
    });

    it(': copyable[Object] with custom text', async () => {
      const handleCopy = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{copyable}}" content="显示文本" bind:copy="handleCopy"></t-text>`,
        data: {
          copyable: { text: '自定义复制内容' },
        },
        methods: {
          handleCopy,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleCopy).toHaveBeenCalledTimes(1);
    });

    it(': copyable prevents double click', async () => {
      const handleCopy = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{true}}" content="text" bind:copy="handleCopy"></t-text>`,
        methods: {
          handleCopy,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);

      // 第二次点击应被忽略（isCopied 状态）
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleCopy).toHaveBeenCalledTimes(1);
    });

    it(': copyable icon resets after timeout', async () => {
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{true}}" content="text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);

      const $text = comp.querySelector('.text');
      expect($text.data.isCopied).toBe(true);

      // 等待 1500ms+ 后恢复
      await simulate.sleep(1600);
      expect($text.data.isCopied).toBe(false);
    });

    it(': copyable triggers copy event with empty content', async () => {
      const handleCopy = jest.fn();
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{true}}" bind:copy="handleCopy"></t-text>`,
        methods: {
          handleCopy,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      $copy.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleCopy).toHaveBeenCalledTimes(1);
      expect(handleCopy.mock.calls[0][0].detail).toEqual({ text: '' });
    });

    it(': copyable with suffix slot', () => {
      const id = simulate.load({
        template: `<t-text class="text" copyable="{{copyable}}" content="text"><view slot="suffix">自定义</view></t-text>`,
        data: {
          copyable: { suffix: true },
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $copy = comp.querySelector('.text >>> .t-typography__copy');
      expect($copy).toBeDefined();
    });

    it(': without ellipsis renders inline', () => {
      const id = simulate.load({
        template: `<t-text class="text" content="inline text"></t-text>`,
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $text = comp.querySelector('.text >>> .t-typography');
      expect($text.dom.getAttribute('style')).toContain('display:inline');
    });
  });

  describe('observers', () => {
    it(': theme change updates className', async () => {
      const id = simulate.load({
        template: `<t-text class="text" theme="{{theme}}" content="text"></t-text>`,
        data: {
          theme: 'primary',
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $textComp = comp.querySelector('.text');
      expect($textComp.data.className.includes('t-typography--primary')).toBeTruthy();

      // 通过组件实例直接修改 properties 来触发 observer
      $textComp.setData({ theme: 'success' });
      await simulate.sleep(10);

      expect($textComp.data.className.includes('t-typography--success')).toBeTruthy();
      expect($textComp.data.className.includes('t-typography--primary')).not.toBeTruthy();
    });

    it(': disabled change updates className', async () => {
      const id = simulate.load({
        template: `<t-text class="text" disabled="{{disabled}}" theme="primary" content="text"></t-text>`,
        data: {
          disabled: false,
        },
        usingComponents: {
          't-text': Text,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $textComp = comp.querySelector('.text');
      expect($textComp.data.className.includes('t-typography--primary')).toBeTruthy();

      $textComp.setData({ disabled: true });
      await simulate.sleep(10);

      expect($textComp.data.className.includes('t-typography--disabled')).toBeTruthy();
      expect($textComp.data.className.includes('t-typography--primary')).not.toBeTruthy();
    });
  });
});
