import path from 'path';
import simulate from 'miniprogram-simulate';

describe('qrcode', () => {
  const qrcode = load(path.resolve(__dirname, `../qrcode`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-qrcode class="qrcode" style="{{style}}" customStyle="{{customStyle}}"></t-qrcode>`,
      usingComponents: {
        't-qrcode': qrcode,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $qrcode = comp.querySelector('.qrcode >>> .t-qrcode');

    if (VIRTUAL_HOST) {
      expect($qrcode.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($qrcode.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`: value and size `, () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" value="{{value}}" size="{{size}}"></t-qrcode>`,
      data: {
        value: 'https://tdesign.tencent.com/',
        size: 200,
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $qrcode = comp.querySelector('.base');
    expect($qrcode.data.value).toBe('https://tdesign.tencent.com/');
    expect($qrcode.data.size).toBe(200);
  });

  it(`: color and bgColor `, () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" color="{{color}}" bg-color="{{bgColor}}"></t-qrcode>`,
      data: {
        color: '#0052D9',
        bgColor: '#ECF2FE',
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
  });

  it(`: icon and iconSize `, () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" icon="{{icon}}" icon-size="{{iconSize}}"></t-qrcode>`,
      data: {
        icon: 'https://tdesign.gtimg.com/miniprogram/images/icon.png',
        iconSize: 30,
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $qrcode = comp.querySelector('.base');
    expect($qrcode.data.icon).toBe('https://tdesign.gtimg.com/miniprogram/images/icon.png');
    expect($qrcode.data.iconSize).toBe(30);
  });

  it(`: level `, () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" level="{{level}}"></t-qrcode>`,
      data: {
        level: 'H',
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      level: 'Q',
    });

    const $qrcode = comp.querySelector('.base');
    expect($qrcode.data.level).toBe('Q');
  });

  it(`: status `, async () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" status="{{status}}"></t-qrcode>`,
      data: {
        status: 'active',
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      status: 'expired',
    });

    await simulate.sleep(0);

    const $qrcode = comp.querySelector('.base');
    expect($qrcode.data.status).toBe('expired');
  });

  it(`: borderless `, () => {
    const id = simulate.load({
      template: `<t-qrcode class="base" borderless="{{borderless}}"></t-qrcode>`,
      data: {
        borderless: false,
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      borderless: true,
    });

    const container = comp.querySelector('.base >>> .t-qrcode');
    expect(container.dom.getAttribute('class').includes('t-qrcode--borderless')).toBeTruthy();
  });

  it(`: refresh event `, async () => {
    const handleRefresh = jest.fn();
    const id = simulate.load({
      template: `
      <t-qrcode 
        class="base" 
        status="{{status}}"
        bind:refresh="handleRefresh"
      ></t-qrcode>`,
      data: {
        status: 'expired',
      },
      methods: {
        handleRefresh,
      },
      usingComponents: {
        't-qrcode': qrcode,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $qrcode = comp.querySelector('.base');
    expect($qrcode.data.status).toBe('expired');
  });
});
