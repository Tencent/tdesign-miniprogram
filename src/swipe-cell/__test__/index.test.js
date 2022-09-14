import simulate from 'miniprogram-simulate';
import path from 'path';

describe('SwipeCell', () => {
  const swipeCell = simulate.load(path.resolve(__dirname, '../swipe-cell'), {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':props data', async () => {
    const onActionClick = jest.fn();
    const id = simulate.load({
      template: `
      <t-swipe-cell class="base" right="{{right}}" bind:click="onActionClick"></t-swipe-cell>`,
      data: {
        right: [
          {
            text: '编辑',
            className: 't-swipe-cell-demo-btn edit-btn',
          },
          {
            text: '删除',
            className: 't-swipe-cell-demo-btn delete-btn',
          },
          {
            text: '收藏',
            className: 't-swipe-cell-demo-btn favor-btn',
          },
        ],
      },
      methods: {
        onActionClick,
      },
      usingComponents: {
        't-swipe-cell': swipeCell,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const btnsLength = comp.data.right.length;

    const $swipeCellBtns = comp.querySelectorAll('.base >>> .t-swipe-cell-demo-btn');
    expect($swipeCellBtns.length).toBe(btnsLength);

    // 模拟触发事件
    $swipeCellBtns.forEach((btnItem) => {
      btnItem.dispatchEvent('tap');
    });
    await simulate.sleep();
    expect(onActionClick).toHaveBeenCalledTimes(btnsLength);
  });

  it(':mutually exclusive event', async () => {
    const id = simulate.load({
      template: `
          <view>
            <t-swipe-cell class="swipeItem1" opened="{{opened}}">
              <view slot="right" class="t-swipe-cell-demo-btn">删除</view>
            </t-swipe-cell>
            <t-swipe-cell class="swipeItem2">
              <view slot="right" class="t-swipe-cell-demo-btn">删除</view>
            </t-swipe-cell>
          </view>`,
      data: {
        opened: true,
      },
      usingComponents: {
        't-swipe-cell': swipeCell,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $swipeItem1 = comp.querySelector('.swipeItem1');
    expect($swipeItem1.data.opened).toEqual(true);

    const $swipeItem2 = comp.querySelector('.swipeItem2');
    $swipeItem2.instance.closeOther();
    $swipeItem2.instance.open();
    await simulate.sleep();
    expect($swipeItem1.data.opened).toEqual(false);
    expect($swipeItem2.data.opened).toEqual(true);
  });
});
