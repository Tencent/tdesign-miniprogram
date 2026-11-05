import path from 'path';
import simulate from 'miniprogram-simulate';

describe('comment', () => {
  const Comment = load(path.resolve(__dirname, '../comment'));

  const renderComment = ({ template, data = {}, methods = {} }) => {
    const id = simulate.load({
      template,
      data,
      methods,
      usingComponents: {
        't-comment': Comment,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    return comp;
  };

  describe('props', () => {
    it(': style && customStyle', () => {
      const comp = renderComment({
        template: `<t-comment class="comment" style="{{style}}" customStyle="{{customStyle}}" />`,
        data: { style: 'color: red', customStyle: 'font-size: 9px' },
      });
      const $comment = comp.querySelector('.comment >>> .t-comment');
      const style = $comment.dom.getAttribute('style');
      if (VIRTUAL_HOST) {
        expect(style.includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect(style.includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': author && content && datetime', () => {
      const comp = renderComment({
        template: `<t-comment id="comment" author="{{author}}" content="{{content}}" datetime="{{datetime}}" />`,
        data: { author: 'TDesign', content: '一条评论', datetime: '今天 16:38' },
      });
      expect(comp.querySelector('#comment >>> .t-comment__author').dom.textContent.trim()).toBe('TDesign');
      expect(comp.querySelector('#comment >>> .t-comment__content').dom.textContent.trim()).toBe('一条评论');
      expect(comp.querySelector('#comment >>> .t-comment__date').dom.textContent.trim()).toBe('今天 16:38');
    });

    it(': avatar 支持字符串与对象两种写法', async () => {
      const comp = renderComment({
        template: `<t-comment id="comment" avatar="{{avatar}}" />`,
        data: { avatar: 'https://tdesign.gtimg.com/avatar.png' },
      });
      const { instance } = comp.querySelector('#comment');
      expect(instance.data.avatarData).toEqual({ image: 'https://tdesign.gtimg.com/avatar.png' });

      const avatarProps = { shape: 'circle', image: 'https://tdesign.gtimg.com/avatar2.png' };
      comp.setData({ avatar: avatarProps });
      await simulate.sleep();
      expect(instance.data.avatarData).toEqual(avatarProps);
    });

    it(': actions 按 placement 分组渲染并标记 disabled', () => {
      const comp = renderComment({
        template: `<t-comment id="comment" actions="{{actions}}" />`,
        data: {
          actions: [
            { key: 'reply', content: '回复', placement: 'start' },
            { key: 'like', content: '6', icon: 'thumb-up', placement: 'end', disabled: true },
            { key: 'dislike', icon: 'uncomfortable-1', placement: 'end' },
          ],
        },
      });
      expect(comp.querySelectorAll('#comment >>> .t-comment__actions-item').length).toBe(3);
      expect(comp.querySelectorAll('#comment >>> .t-comment__actions-item--disabled').length).toBe(1);
      // 带图标与不带图标的操作项分别标记，用于区分文字颜色
      expect(comp.querySelectorAll('#comment >>> .t-comment__actions-item--with-icon').length).toBe(2);
    });

    it(': 未指定 placement 的操作项归入 start 分组而不丢失', () => {
      const comp = renderComment({
        template: `<t-comment id="comment" actions="{{actions}}" />`,
        data: { actions: [{ key: 'reply', content: '回复' }] },
      });
      expect(comp.querySelectorAll('#comment >>> .t-comment__actions-item').length).toBe(1);
    });

    it(': folds total <= 1 时不渲染折叠区', () => {
      const comp = renderComment({
        template: `<t-comment id="comment" folds="{{folds}}" />`,
        data: { folds: { state: 'collapsed', total: 1 } },
      });
      expect(comp.querySelector('#comment >>> .t-comment__folds')).toBeFalsy();
    });

    it(': folds 文案缺省时回退到全局国际化配置', async () => {
      const comp = renderComment({
        template: `<t-comment id="comment" folds="{{folds}}" />`,
        data: { folds: { state: 'collapsed', total: 6 } },
      });
      await simulate.sleep();
      const { instance } = comp.querySelector('#comment');
      expect(comp.querySelector('#comment >>> .t-comment__folds-item').dom.textContent).toContain('展开回复');

      instance.setData({
        globalConfig: { collapsedText: 'Expand replies', expandMoreText: 'More replies', collapseText: 'Collapse' },
      });
      await simulate.sleep();
      expect(comp.querySelector('#comment >>> .t-comment__folds-item').dom.textContent).toContain('Expand replies');
    });

    it(': folds 优先使用业务传入的 content 文案', async () => {
      const comp = renderComment({
        template: `<t-comment id="comment" folds="{{folds}}" />`,
        data: { folds: { state: 'collapsed', total: 6, content: { collapsed: '展开5条回复' } } },
      });
      await simulate.sleep();
      expect(comp.querySelector('#comment >>> .t-comment__folds-item').dom.textContent).toContain('展开5条回复');
    });
  });

  describe('event', () => {
    it(': actions 点击操作项触发事件并回传当前项', async () => {
      const handleActions = jest.fn();
      const action = { key: 'like', content: '6', icon: 'thumb-up', placement: 'end' };
      const comp = renderComment({
        template: `<t-comment id="comment" actions="{{actions}}" bind:actions="onActions" />`,
        data: { actions: [action] },
        methods: { onActions: handleActions },
      });
      comp.querySelector('#comment >>> .t-comment__actions-item').dispatchEvent('tap');
      await simulate.sleep(20);

      const { detail } = handleActions.mock.calls[0][0];
      expect(handleActions).toHaveBeenCalledTimes(1);
      expect(Object.keys(detail)).toEqual(['action']);
      expect(detail.action).toEqual(action);
    });

    it(': actions 禁用的操作项点击不触发事件', async () => {
      const handleActions = jest.fn();
      const comp = renderComment({
        template: `<t-comment id="comment" actions="{{actions}}" bind:actions="onActions" />`,
        data: { actions: [{ key: 'like', content: '6', placement: 'start', disabled: true }] },
        methods: { onActions: handleActions },
      });
      comp.querySelector('#comment >>> .t-comment__actions-item--disabled').dispatchEvent('tap');
      await simulate.sleep(20);
      expect(handleActions).not.toHaveBeenCalled();
    });

    it(': folds 非受控下逐级 展开 -> 部分 -> 完全展开 -> 收起', async () => {
      const comp = renderComment({
        template: `<t-comment id="comment" defaultFolds="{{folds}}" />`,
        data: { folds: { state: 'collapsed', total: 6, step: 3 } },
      });
      const { instance } = comp.querySelector('#comment');
      await simulate.sleep();
      expect(instance.data.foldState).toBe('collapsed');

      comp.querySelector('#comment >>> .t-comment__folds-item').dispatchEvent('tap');
      await simulate.sleep();
      expect(instance.data.foldState).toBe('partial');

      comp.querySelector('#comment >>> .t-comment__folds-item').dispatchEvent('tap');
      await simulate.sleep();
      expect(instance.data.foldState).toBe('expanded');

      comp.querySelector('#comment >>> .t-comment__folds-item').dispatchEvent('tap');
      await simulate.sleep();
      expect(instance.data.foldState).toBe('collapsed');
    });

    it(': folds 受控下仅派发事件，内部状态由外部驱动', async () => {
      const handleFolds = jest.fn();
      const folds = { state: 'collapsed', total: 6, step: 3, content: { collapsed: '展开5条回复' } };
      const comp = renderComment({
        template: `<t-comment id="comment" folds="{{folds}}" bind:folds="onFolds" />`,
        data: { folds },
        methods: { onFolds: handleFolds },
      });
      const { instance } = comp.querySelector('#comment');

      comp.querySelector('#comment >>> .t-comment__folds-item').dispatchEvent('tap');
      await simulate.sleep();

      const { detail } = handleFolds.mock.calls[0][0];
      expect(handleFolds).toHaveBeenCalledTimes(1);
      expect(Object.keys(detail)).toEqual(['fold']);
      expect(detail.fold).toEqual({ ...folds, state: 'partial' });
      // 外部未回写 folds，内部仍保持折叠态
      expect(instance.data.foldState).toBe('collapsed');
    });
  });

  describe('slots', () => {
    it(': avatar slot 在未传 avatar 时渲染', () => {
      const comp = renderComment({
        template: `<t-comment id="comment"><view slot="avatar" class="slot-avatar">头像</view></t-comment>`,
      });
      expect(comp.querySelector('#comment >>> .slot-avatar')).toBeTruthy();
    });

    it(': author slot 在未传 author 时渲染', () => {
      const comp = renderComment({
        template: `<t-comment id="comment"><view slot="author" class="slot-author">自定义作者</view></t-comment>`,
      });
      expect(comp.querySelector('#comment >>> .slot-author')).toBeTruthy();
    });

    it(': content slot 在未传 content 时渲染', () => {
      const comp = renderComment({
        template: `<t-comment id="comment"><view slot="content" class="slot-content">自定义内容</view></t-comment>`,
      });
      expect(comp.querySelector('#comment >>> .slot-content')).toBeTruthy();
    });

    it(': actions slot 在未传 actions 时渲染', () => {
      const comp = renderComment({
        template: `<t-comment id="comment" datetime="今天"><view slot="actions" class="slot-actions">自定义操作</view></t-comment>`,
      });
      expect(comp.querySelector('#comment >>> .slot-actions')).toBeTruthy();
    });

    it(': reply slot 渲染在回复区', () => {
      const comp = renderComment({
        template: `<t-comment id="comment"><view slot="reply" class="slot-reply">回复内容</view></t-comment>`,
      });
      const $reply = comp.querySelector('#comment >>> .slot-reply');
      expect($reply).toBeTruthy();
      expect(comp.querySelector('#comment >>> .t-comment__reply-inner')).toBeTruthy();
    });
  });
});
