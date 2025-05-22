import path from 'path';
import simulate from 'miniprogram-simulate';

describe('grid', () => {
  const id = load(path.resolve(__dirname, './index'));

  it(':base', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $grid = comp.querySelector('#grid >>> .t-grid');
    const $gridItem = comp.querySelector('#grid >>> .t-grid-item');

    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($grid.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect($gridItem.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($grid.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect($gridItem.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':border', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $content = comp.querySelector('#grid >>> .t-grid__content');
    expect($content.dom.style.marginLeft).toBe('-4px');

    comp.setData({ border: true });
    expect($content.dom.style.marginLeft).toBe('-2px');

    comp.setData({ border: {} });
    expect($content.dom.style.marginLeft).toBe('-2px');
  });

  it(':gutter', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({ gutter: 0 });

    const $content = comp.querySelector('#grid >>> .t-grid__content');
    expect($content.dom.style.marginLeft).toBe('-0px');
  });

  it(':event', async () => {
    const onClick = jest.fn();
    const comp = simulate.render(id, {
      onClick,
    });
    comp.attach(document.createElement('parent-wrapper'));

    const $a = comp.querySelector('#a >>> .t-grid-item');

    $a.dispatchEvent('tap');
    await simulate.sleep(0);
    expect(onClick).toHaveBeenCalled();

    comp.setData({ jumpType: 'navigate-to', url: 'test' });
    $a.dispatchEvent('tap');
    await simulate.sleep(0);
    expect(onClick).toHaveBeenCalledTimes(2);

    comp.setData({ jumpType: 'invalid' });
    $a.dispatchEvent('tap');
    await simulate.sleep(0);
    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
