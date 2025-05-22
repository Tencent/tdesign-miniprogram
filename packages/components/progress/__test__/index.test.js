import path from 'path';
import simulate from 'miniprogram-simulate';

describe('progress', () => {
  const progress = load(path.resolve(__dirname, `../progress`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-progress class="progress" style="{{style}}" customStyle="{{customStyle}}"></t-progress>`,
      usingComponents: {
        't-progress': progress,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $progress = comp.querySelector('.progress >>> .t-progress');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($progress.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($progress.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`: status `, () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" status="{{status}}" ></t-progress>
      `,
      data: {},
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      status: 'error',
    });

    const component = comp.querySelector('.base >>> .t-class');
    expect(component.dom.getAttribute('class').includes('t-progress--status--error')).toBeTruthy();
  });

  it(`: label `, async () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" label="{{label}}" percentage="{{percentage}}" ></t-progress>
      `,
      data: {},
      methods: {
        percentage: 88,
      },
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      label: true,
      percentage: 100,
    });

    const $progress = comp.querySelector('.base');
    expect($progress.data.computedProgress).toBe(100);

    // props: status
    const component = comp.querySelector('.base >>> .t-class');
    expect($progress.data.computedStatus).toBe('success');
    expect(component.dom.getAttribute('class').includes('t-progress--status--success')).toBeTruthy();

    // props: label
    const label = comp.querySelector('.base >>> .t-progress__info');
    expect(label.dom.textContent.trim()).toBe('100%');
  });

  it(`: color `, () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" color="{{color}}" ></t-progress>
      `,
      data: {
        color: '#0052D9',
      },
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const barPercent = comp.querySelector('.base >>> .t-class-bar ');

    comp.setData({
      color: 'rgb(0, 82, 222)',
    });
    expect(barPercent.dom.getAttribute('style').includes('background:rgb(0, 82, 222);'));

    comp.setData({
      color: ['#f00', '#0ff', '#f0f'],
    });
    expect(barPercent.dom.getAttribute('style').includes('background:linear-gradient( 90deg,#f00,#0ff,#f0f );'));

    comp.setData({
      color: { '0%': '#f00', '100%': '#0ff' },
    });
    expect(barPercent.dom.getAttribute('style').includes('background:linear-gradient(to right, #f00 0%,#0ff 100%);'));

    comp.setData({
      color: { from: '#000', to: '#000' },
    });
    expect(barPercent.dom.getAttribute('style').includes('background:linear-gradient(to right, #000, #000);'));
  });

  it(`: trackColor `, () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" trackColor="{{trackColor}}" ></t-progress>
      `,
      data: {
        trackColor: '#0052D9',
      },
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      trackColor: 'rgb(0, 82, 200)',
    });
    const bar = comp.querySelector('.base >>> .t-progress__bar');
    expect(bar.dom.getAttribute('style').includes('background-color: rgb(0, 82, 200)')).toBeTruthy();
  });

  it(`: percentage `, () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" percentage="{{percentage}}"></t-progress>
      `,
      data: {
        percentage: 88,
      },
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $progress = comp.querySelector('.base');
    expect($progress.data.computedProgress).toBe(88);
    const barPercent = comp.querySelector('.base >>> .t-progress__inner');

    expect(barPercent.dom.getAttribute('style').includes('width: 88%')).toBeTruthy();

    comp.setData({
      percentage: 100,
    });
    expect($progress.data.computedProgress).toBe(100);
    expect(barPercent.dom.getAttribute('style').includes('width: 100%')).toBeTruthy();
  });

  it(`: strokeWidth `, () => {
    const id = simulate.load({
      template: `
      <t-progress class="base" strokeWidth="{{strokeWidth}}"></t-progress>
      `,
      data: {
        strokeWidth: '',
      },
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      strokeWidth: 10,
    });

    const bar = comp.querySelector('.base >>> .t-progress__bar');
    expect(bar.dom.getAttribute('style').includes('height: 10px')).toBeTruthy();
  });
});
