import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Avatar & Avatar Groups', () => {
  const id = load(path.resolve(__dirname, './index'));
  jest.resetModules();
  const avatar = load(path.resolve(__dirname, `../avatar`));

  describe('Avatar Props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-avatar class="avatar" style="{{style}}" customStyle="{{customStyle}}"></t-avatar>`,
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },

        usingComponents: {
          't-avatar': avatar,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $avatar = comp.querySelector('.avatar >>> .t-avatar__wrapper');
      expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect($avatar.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect($avatar.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

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
        'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
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
      expect($avatar.dom.getAttribute('class').includes('t-avatar--medium')).toBeTruthy();

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
        expect(v.dom.getAttribute('class').includes('t-avatar--medium')).toBeTruthy();
      });
    });

    it(':avatar-group-size', () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $group = comp.querySelectorAll('.avatar-group-size >>> .t-avatar');
      $group.forEach((v) => {
        if (v.querySelector('.t-image')) {
          expect(v.dom.getAttribute('class').includes('t-avatar--large')).toBeTruthy();
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
