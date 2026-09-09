global.uni = {
  getWindowInfo: jest.fn(() => ({})),
  getAppBaseInfo: jest.fn(() => ({})),
  getDeviceInfo: jest.fn(() => ({})),
  getSystemInfoSync: jest.fn(() => ({})),
};

const { uniComponent } = require('../src/instantiationDecorator');
const radioProps = require('../../radio/props').default;
const checkboxProps = require('../../checkbox/props').default;

describe('uniComponent props', () => {
  it.each([
    ['radio', radioProps],
    ['checkbox', checkboxProps],
  ])('preserves the declared value type order for %s', (_, props) => {
    const component = uniComponent({ props: { value: { ...props.value, type: [...props.value.type] } } });

    expect(component.props.value.type).toEqual([String, Number, Boolean]);
  });
});
