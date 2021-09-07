/* eslint-disable no-undef */
import automator from 'miniprogram-automator';

describe('radio', () => {
  let miniProgram;
  let page;
  const timeout = 1 * 60 * 1000;
  beforeAll(async () => {
    try {
      miniProgram = await automator.launch({
        projectPath: '_example',
        port: 9420,
      });
      await miniProgram.navigateTo('/pages/radio/radio');
      page = await miniProgram.currentPage();
    } catch (error) {
      console.error(error);
    }
  }, 10 * 60 * 1000);

  test(
    'active class should update correctly',
    async () => {
      const basicDemo = await page.$('.basic-demo');
      const radio = await basicDemo.$('.basic-radio');
      const cell = await radio.$('t-cell');
      const button = await radio.$('.t-radio__button');
      let cls = await button.attribute('class');
      expect(cls.indexOf('t-is-active')).toBe(-1);
      await cell.trigger('click');
      await page.waitFor(100);
      cls = await button.attribute('class');
      expect(cls.indexOf('t-is-active')).toBeGreaterThan(-1);
    },
    timeout,
  );
  test('disabled prop', async () => {
    const basicDemo = await page.$('.disabled-demo');
    const radio = await basicDemo.$('.radio-disabled');
    const button = await radio.$('.t-radio__button');
    let cls = await button.attribute('class');
    expect(cls.indexOf('t-is-active')).toBeGreaterThan(-1);
    const cell = await radio.$('t-cell');
    await cell.trigger('click');
    await page.waitFor(100);
    cls = await button.attribute('class');
    expect(cls.indexOf('t-is-active')).toBeGreaterThan(-1);
  });
  test("radio group's active class should update correctly", async () => {
    const radioGroup = await page.$('.group-demo');
    const radios = await radioGroup.$$('t-radio');
    const button0 = await radios[0].$('.t-radio__button');
    let buttonCls0 = await button0.attribute('class');
    const button1 = await radios[1].$('.t-radio__button');
    let buttonCls1 = await button1.attribute('class');
    const button2 = await radios[2].$('.t-radio__button');
    let buttonCls2 = await button2.attribute('class');
    expect(buttonCls0.indexOf('t-is-active')).toBeGreaterThan(-1);
    expect(buttonCls1.indexOf('t-is-active')).toBe(-1);
    expect(buttonCls2.indexOf('t-is-active')).toBe(-1);
    const cell1 = await radios[1].$('t-cell');
    await cell1.trigger('click');
    await page.waitFor(100);
    buttonCls0 = await button0.attribute('class');
    buttonCls1 = await button1.attribute('class');
    buttonCls2 = await button2.attribute('class');
    expect(buttonCls0.indexOf('t-is-active')).toBe(-1);
    expect(buttonCls1.indexOf('t-is-active')).toBeGreaterThan(-1);
    expect(buttonCls2.indexOf('t-is-active')).toBe(-1);
  });
  afterAll(async () => {
    await miniProgram.close();
  });
});
