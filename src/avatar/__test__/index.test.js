import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Avatar & Avatar Groups', () => {
  const id = load(path.resolve(__dirname, './index'));

  describe('Avatar Props', () => {
    it(':icon', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $default = comp.querySelector('.default-avatar >>> .t-icon-user');
      expect($default).toBeDefined();
    });

    it(':image', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $image = comp.querySelector('.image-avatar >>> #image');
      expect($image.toJSON().attrs.filter((v) => v.name === 'src')[0].value).toBe(
        'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar-v2/1.png',
      );
    });

    it(':shape', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $avatar = comp.querySelector('.shape-avatar >>> .t-avatar');
      expect($avatar.dom.getAttribute('class').includes('t-avatar--round')).toBeTruthy();
    });

    it(':size & text', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $avatar = comp.querySelector('.text-avatar >>> .t-avatar');
      expect($avatar.dom.getAttribute('class').includes('t-size-m')).toBeTruthy();

      const $text = comp.querySelector('.text-avatar >>> .t-avatar__text');
      expect($text.dom.textContent).toBe('A');
    });

    it(':hideOnLoadFailed', async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $wrapper = comp.querySelector('.error-avatar-wrapper >>> .t-avatar__wrapper');
      const $image = comp.querySelector('.error-avatar-wrapper >>> #image');
      expect($wrapper.dom.style.display).toBe('');

      comp.setData({
        hideOnLoadFailed: true,
      });
      $image.dispatchEvent('error');
      await simulate.sleep(20);
      expect($wrapper.dom.style.display).toBe('none');
    });
  });

  describe('Avatar Group Props', () => {
    it(':avatar-group-size', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $group = comp.querySelectorAll('.avatar-group >>> .t-avatar');
      $group.forEach((v) => {
        expect(v.dom.getAttribute('class').includes('t-size-s')).toBeTruthy();
      });
    });

    it(':avatar-group-size', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $group = comp.querySelectorAll('.avatar-group-size >>> .t-avatar');
      $group.forEach((v) => {
        if (v.querySelector('.t-image')) {
          expect(v.dom.getAttribute('class').includes('t-size-l')).toBeTruthy();
        }
      });
    });

    it(':avatar-group-cascading ', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const defaultZIndex = 100;

      const $wrapper = comp.querySelectorAll('.avatar-group-cascading >>> .t-avatar__wrapper');
      $wrapper.forEach((v, index) => {
        if (v.dom.style.zIndex > 0) {
          expect(Number(v.dom.style.zIndex)).toBe(defaultZIndex - index * 10);
        }
      });
    });
  });

  describe('Avatar Event', () => {
    it(':onLoadError', async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $image = comp.querySelector('.error-avatar-wrapper >>> #image');
      const spy = jest.spyOn(comp.instance, 'onLoadError');

      $image.dispatchEvent('error');
      await simulate.sleep(20);
      expect(spy).toBeCalled();
    });
  });
});
