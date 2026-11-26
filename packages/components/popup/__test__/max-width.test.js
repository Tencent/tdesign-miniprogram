import path from 'path';
import simulate from 'miniprogram-simulate';

describe('popup maxWidth', () => {
  const popupId = load(path.resolve(__dirname, '../popup'), 't-popup');
  let component;

  const render = (props = {}) => {
    component = simulate.render(popupId, { visible: true, ...props });
    component.attach(document.createElement('parent-wrapper'));
    return () => component.querySelector('.t-popup').dom;
  };

  afterEach(() => component.detach());

  it('preserves the existing layout when omitted', () => {
    const popup = render({ placement: 'bottom', customStyle: 'width: 320px' });
    expect(popup().className).not.toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('');
    expect(popup().style.width).toBe('320px');
  });

  it.each(['top', 'bottom'])('updates and removes maxWidth for %s', (placement) => {
    const popup = render({ placement, maxWidth: 600 });
    expect(popup().className).toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('600px');
    component.setData({ maxWidth: '70vw' });
    expect(popup().style.maxWidth).toBe('70vw');
    component.setData({ maxWidth: 'none' });
    expect(popup().style.maxWidth).toBe('none');
    component.setData({ maxWidth: null });
    expect(popup().className).not.toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('');
  });

  it('accepts zero as a numeric width', () => {
    const popup = render({ placement: 'bottom', maxWidth: 0 });
    expect(popup().className).toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('0px');
  });

  it.each(['left', 'right', 'center'])('does not limit %s popups', (placement) => {
    const popup = render({ placement, maxWidth: 600 });
    expect(popup().className).not.toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('');
  });

  it('updates the limit when placement changes', () => {
    const popup = render({ placement: 'bottom', maxWidth: 600 });
    component.setData({ placement: 'left' });
    expect(popup().className).not.toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('');
    component.setData({ placement: 'top' });
    expect(popup().className).toContain('t-popup--with-max-width');
    expect(popup().style.maxWidth).toBe('600px');
  });
});
