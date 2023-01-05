import simulate from 'miniprogram-simulate';
import path from 'path';
import similateApi from 'miniprogram-simulate/src/api';

const mock = (options, res) => {
  if (res.errMsg.indexOf(':ok') >= 0 && typeof options.success === 'function') options.success(res);
  if (res.errMsg.indexOf(':fail') >= 0 && typeof options.fail === 'function') options.fail(res);
  if (typeof options.complete === 'function') options.complete(res);
};

const mockChooseMedia = (cb) => {
  return (
    options = {
      success: jest.fn(),
      fail: jest.fn(),
      complete: jest.fn(),
    },
  ) => {
    const res = cb();
    mock(options, res);
  };
};

const mockFn = jest
  .fn()
  .mockReturnValue({
    errMsg: `chooseMedia:ok`,
    type: 'image',
    tempFiles: [
      {
        fileType: 'image',
        size: 219906,
        tempFilePath: 'https://tdesign.gtimg.com/site/upload1.png',
      },
    ],
  })
  .mockReturnValueOnce({
    errMsg: 'chooseMedia:ok',
    type: 'image',
    tempFiles: [
      {
        fileType: 'image',
        size: 219906,
        tempFilePath: 'https://tdesign.gtimg.com/site/upload1.png',
      },
    ],
  })
  .mockReturnValueOnce({
    errMsg: `chooseMedia:fail`,
  })
  .mockReturnValueOnce({
    errMsg: `chooseMedia:ok`,
    type: 'image',
    tempFiles: [
      {
        size: 219906,
        tempFilePath: 'wxfile://tmp_5d4b353a87732d4e5e4f397fbbd5f385.jpg',
      },
      {
        fileType: 'image',
        size: 219906,
        tempFilePath: 'https://tdesign.gtimg.com/site/upload1.png',
      },
    ],
  });

global.wx = {
  ...similateApi,
  chooseMedia: mockChooseMedia(mockFn),
};

describe('upload', () => {
  const upload = load(path.resolve(__dirname, `../upload`), 't-upload');
  jest.resetModules();
  const icon = load(path.resolve(__dirname, `../../icon/icon`), 't-icon');

  describe('props', () => {
    it(': add-content', () => {
      const id = simulate.load({
        template: `<t-upload id="t-upload"></t-upload>`,
        data: {},
        usingComponents: {
          't-upload': upload,
          't-icon': icon,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $addIcon = comp.querySelector('#t-upload >>> .t-upload__add-icon');
      // expect(comp.toJSON()).toMatchSnapshot();

      const iconId = simulate.load({
        template: `<t-icon name="add"></t-icon>`,
        usingComponents: {
          't-icon': icon,
        },
      });
      const iconComp = simulate.render(iconId);
      expect($addIcon.dom.innerHTML).toContain(iconComp.dom.innerHTML);
    });
    it(': grid-config && gutter', () => {
      const id = simulate.load({
        template: `<t-upload
          id="t-upload"
          gridConfig="{{gridConfig}}"
          gutter="{{gutter}}"
        >
        </t-upload>
      `,
        data: {
          gridConfig: {
            column: 4,
            width: 160,
            height: 160,
          },
          gutter: 16,
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $gridContent = comp.querySelector('#t-upload >>> .t-grid__content');
      const $gridItemWrapper = comp.querySelector('#t-upload >>> .t-upload__wrapper');
      const $gridItem = comp.querySelector('#t-upload >>> .t-grid-item');
      // gutter = 16, 单位 rpx
      expect($gridContent.dom.getAttribute('style')).toEqual(
        `margin-left:-${comp.data.gutter}px; margin-top:-${comp.data.gutter}px`,
      );

      // gridConfig: width、 height
      expect($gridItemWrapper.dom.getAttribute('style')).toEqual(
        `width:${comp.data.gridConfig.width}px;height:${comp.data.gridConfig.height}px`,
      );

      // gridConfig: column
      expect($gridItem.dom.getAttribute('style')).toStrictEqual(`width:${100 / comp.data.gridConfig.column}%`);
    });
    it(': size-limit', async () => {
      let successFiles;
      const handleSelectChange = jest.fn();
      const handleAdd = jest.fn();
      const handleSuccess = jest.fn((e) => {
        const { files } = e.detail;
        successFiles = files;
      });
      const id = simulate.load({
        template: `<t-upload id="t-upload"
        sizeLimit="{{sizeLimit}}"
        bind:add="handleAdd"
        bind:select-change="handleSelectChange"
        bind:success="handleSuccess"
        ></t-upload>
        `,
        data: {
          sizeLimit: 10240,
        },
        methods: {
          handleSelectChange,
          handleAdd,
          handleSuccess,
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $gridItem = comp.querySelectorAll('#t-upload >>> .t-grid-item');

      // click add
      $gridItem[$gridItem.length - 1].dispatchEvent('tap');
      await simulate.sleep();
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(handleSelectChange).toHaveBeenCalledTimes(1);
      expect(handleAdd).toHaveBeenCalledTimes(1);
      expect(handleSuccess).toHaveBeenCalledTimes(1);
      // sizeLimit && size > sizeLimit, successFiles = []
      expect(successFiles).toStrictEqual([]);
    });

    it(': max', async () => {
      let selectedFiles = {};
      let addFiles;
      let successFiles;
      const handleSelectChange = jest.fn((e) => {
        selectedFiles = Object.assign(e.detail);
      });
      const handleAdd = jest.fn((e) => {
        const { files } = e.detail;
        addFiles = files;
      });
      const handleSuccess = jest.fn((e) => {
        const { files } = e.detail;
        successFiles = files;
      });
      const handleFail = jest.fn();
      const id = simulate.load({
        template: `<t-upload
          id="t-upload"
          max="{{max}}"
          mediaType="{{['video','image']}}"
          files="{{originFiles}}"
          bind:add="handleAdd"
          bind:select-change="handleSelectChange"
          bind:fail="handleFail"
          bind:success="handleSuccess"
        >
        </t-upload>
        `,
        data: {
          max: 2,
          originFiles: [
            {
              url: 'https://tdesign.gtimg.com/site/upload1.png',
              name: 'uploaded1.png',
              type: 'image',
            },
          ],
        },
        methods: {
          handleSelectChange,
          handleAdd,
          handleFail,
          handleSuccess,
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $upload = comp.querySelector('#t-upload');
      const $gridItem = comp.querySelectorAll('#t-upload >>> .t-grid-item');

      // click add
      $gridItem[$gridItem.length - 1].dispatchEvent('tap');
      await simulate.sleep();
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(handleFail).toHaveBeenCalledTimes(1);

      $gridItem[$gridItem.length - 1].dispatchEvent('tap');
      await simulate.sleep();
      expect(mockFn).toHaveBeenCalledTimes(3);
      expect(handleSuccess).toHaveBeenCalledTimes(1);
      expect(handleSelectChange).toHaveBeenCalledTimes(1);
      expect(addFiles.length).toBe(2);
      expect(selectedFiles.currentSelectedFiles[0].length).toBe(2);
      expect(successFiles.length).toBe(3);

      // 赋值 originFiles: files
      comp.setData({
        originFiles: successFiles,
      });
      expect($upload.instance.data.files.length).toBe(3);

      // gridItem 子项长度为 max
      expect($gridItem.length).toBe(comp.data.max);
      const $addIcon = comp.querySelector('#t-upload >>> .t-upload__add-icon');
      expect($addIcon).not.toBeDefined();
    });

    it(': request-method', async () => {
      let successFiles;
      const handleSuccess = jest.fn((e) => {
        const { files } = e.detail;
        successFiles = files;
      });

      const id = simulate.load({
        template: `<t-upload
          id="t-upload"
          mediaType="{{['video','image']}}"
          files="{{originFiles}}"
          request-method="{{requestMethod}}"
          bind:success="handleSuccess"
        >
        </t-upload>
        `,
        data: {
          requestMethod: (files) => {
            return files;
          },
          originFiles: [
            {
              url: 'https://tdesign.gtimg.com/site/upload1.png',
              name: 'uploaded1.png',
              type: 'image',
            },
          ],
        },
        methods: {
          handleSuccess,
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $gridItem = comp.querySelectorAll('#t-upload >>> .t-grid-item');

      // click add
      $gridItem[$gridItem.length - 1].dispatchEvent('tap');
      await simulate.sleep();
      expect(successFiles.length).toBe(2);

      const requestMethod = () =>
        new Promise((resolve) => {
          resolve();
        });
      comp.setData({
        requestMethod,
      });

      $gridItem[$gridItem.length - 1].dispatchEvent('tap');
      await simulate.sleep();
      expect(successFiles.length).toBe(2);
    });
  });

  describe('slot', () => {
    it(': add-content', () => {
      const id = simulate.load({
        template: `<t-upload
          id="t-upload"
          addContent="slot"
        >
          <text slot="add-content"> {{text}} </text>
        </t-upload>
      `,
        data: {
          text: 'Upload',
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $addIcon = comp.querySelector('#t-upload >>> .t-upload__add-icon');
      expect($addIcon.dom.textContent).toContain(comp.data.text);
    });
  });

  describe('event', () => {
    it(': remove', async () => {
      let removeItem = {};
      const handleRemove = jest.fn((e) => {
        removeItem = Object.assign(e.detail);
      });
      const id = simulate.load({
        template: `<t-upload
          id="t-upload"
          files="{{originFiles}}"
          bind:remove="handleRemove"
        >
        </t-upload>
        `,
        data: {
          originFiles: [
            {
              url: 'https://tdesign.gtimg.com/site/upload1.png',
              name: 'uploaded1.png',
              type: 'image',
            },
          ],
        },
        methods: {
          handleRemove,
        },
        usingComponents: {
          't-upload': upload,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // delete
      const $delete = comp.querySelectorAll('#t-upload >>> .t-upload__close-btn');
      const index = 0;
      $delete[index].dispatchEvent('tap');
      await simulate.sleep();
      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(removeItem.index).toBe(index);
      expect(removeItem.file.name).toBe(comp.data.originFiles[index].name);
    });
  });
});
