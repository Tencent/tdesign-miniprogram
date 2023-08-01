import path from 'path';
import simulate from 'miniprogram-simulate';

describe('navbar', () => {
  const navbar = load(path.resolve(__dirname, `../navbar`), 't-navbar');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-navbar class="navbar" style="{{style}}" customStyle="{{customStyle}}"></t-navbar>`,
      usingComponents: {
        't-navbar': navbar,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $navbar = comp.querySelector('.navbar >>> .t-navbar');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($navbar.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($navbar.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const id = simulate.load({
      template: `<t-navbar visible="{{visible}}" animation="{{animation}}" title="test" />`,
      data: {
        visible: true,
        animation: true,
      },
      usingComponents: {
        't-navbar': navbar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();

    // invisible
    comp.setData({ visible: false });
    await simulate.sleep();
    expect(comp.toJSON()).toMatchSnapshot();

    // without aniamtion
    comp.setData({ animation: false });
    await simulate.sleep();
    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':fixed', async () => {
    const id = simulate.load({
      template: `<t-navbar visible fixed title="test" />`,
      usingComponents: {
        't-navbar': navbar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':event', async () => {
    const handleBack = jest.fn();
    const handleSuccess = jest.fn();
    const handleFail = jest.fn();
    const handleComplete = jest.fn();
    const id = simulate.load({
      template: `<t-navbar
        id="base"
        visible
        left-arrow
        bind:go-back="handleBack"
        bind:success="handleSuccess"
        bind:fail="handleFail"
        bind:complete="handleComplete"
         />`,
      methods: {
        handleBack,
        handleSuccess,
        handleFail,
        handleComplete,
      },
      usingComponents: {
        't-navbar': navbar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $back = comp.querySelector('#base >>> .t-navbar__btn');

    // go back
    const mocked = jest.spyOn(wx, 'navigateBack');

    // mock success
    mocked.mockImplementation((option) => option.success());
    $back.dispatchEvent('tap');
    await simulate.sleep();
    expect(handleSuccess).toHaveBeenCalledTimes(1);
    expect(handleBack).toHaveBeenCalledTimes(1);

    // mock fail
    mocked.mockImplementation((option) => option.fail());
    $back.dispatchEvent('tap');
    await simulate.sleep();
    expect(handleFail).toHaveBeenCalledTimes(1);
    expect(handleBack).toHaveBeenCalledTimes(2);

    // mock complete
    mocked.mockImplementation((option) => option.complete());
    $back.dispatchEvent('tap');
    await simulate.sleep();
    expect(handleComplete).toHaveBeenCalledTimes(1);
    expect(handleBack).toHaveBeenCalledTimes(3);

    // mock delta < 1
    let hasBacked = false;
    $base.setData({ delta: 0 });
    mocked.mockImplementation(() => {
      hasBacked = true;
    });
    $back.dispatchEvent('tap');
    await simulate.sleep();
    expect(hasBacked).toBeFalsy();
  });

  it(':menu button', async () => {
    const id = simulate.load({
      template: `<t-navbar title="test" />`,
      usingComponents: {
        't-navbar': navbar,
      },
    });
    wx.getMenuButtonBoundingClientRect = () => ({
      top: 10,
      bottom: 20,
      left: 0,
      height: 10,
      width: 40,
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    expect(comp.toJSON()).toMatchSnapshot();
    wx.getMenuButtonBoundingClientRect = undefined;
  });
});
