import popup from '../computed';

const props = { placement: 'bottom', zIndex: 12000, duration: 240 };

describe('uniapp popup maxWidth', () => {
  it.each([undefined, null, ''])('preserves the existing styles for %s', (maxWidth) => {
    expect(popup.hasMaxWidth('bottom', maxWidth)).toBe(false);
    expect(popup.getPopupStyles({ ...props, maxWidth })).toBe('z-index:12000;--td-popup-transition:all 240ms ease;');
  });

  it.each(['top', 'bottom'])('supports numeric widths for %s', (placement) => {
    expect(popup.hasMaxWidth(placement, 600)).toBe(true);
    expect(popup.getPopupStyles({ ...props, placement, maxWidth: 600 })).toContain('max-width:600px;');
  });

  it.each(['600px', '70vw', '600rpx', 'none'])('preserves the CSS width %s', (maxWidth) => {
    expect(popup.getPopupStyles({ ...props, maxWidth })).toContain(`max-width:${maxWidth};`);
  });

  it('supports zero', () => {
    expect(popup.hasMaxWidth('bottom', 0)).toBe(true);
    expect(popup.getPopupStyles({ ...props, maxWidth: 0 })).toContain('max-width:0px;');
  });

  it.each(['left', 'right', 'center'])('does not limit %s popups', (placement) => {
    expect(popup.hasMaxWidth(placement, 600)).toBe(false);
    expect(popup.getPopupStyles({ ...props, placement, maxWidth: 600 })).not.toContain('max-width');
  });

  it('preserves navbar offset and transition styles', () => {
    expect(popup.getPopupStyles({ ...props, placement: 'top', distanceTop: 44, maxWidth: 600 })).toBe(
      'z-index:12000;top:44px;--td-popup-distance-top:44px;--td-popup-transition:all 240ms ease;max-width:600px;',
    );
  });
});
