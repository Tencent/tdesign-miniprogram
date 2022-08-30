import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Sticky Props', () => {
  const id = simulate.load(path.resolve(__dirname, './_example/sticky'), { less: true });

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $body = comp.querySelector('.tdesign-demo-sticky-base');
    // $body
    simulate.scroll($body, 3000, 15);

    await simulate.sleep(20);

    console.log($body.dom.getBoundingClientRect());

    const $baseButton = comp.querySelector('.tdesign-demo-sticky-base >>> .base-button');
    console.log($baseButton.dom.getBoundingClientRect());
  });
});
