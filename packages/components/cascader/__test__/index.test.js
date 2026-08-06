import path from 'path';
import simulate from 'miniprogram-simulate';

describe('cascader', () => {
  const cascader = load(path.resolve(__dirname, `../cascader`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-cascader class="cascader" style="{{style}}" customStyle="{{customStyle}}"></t-cascader>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-cascader': cascader,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $cascader = comp.querySelector('.cascader >>> .t-cascader');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($cascader.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($cascader.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  describe(': filterable', () => {
    const options = [
      {
        label: '北京市',
        value: '110000',
        children: [
          {
            label: '北京市',
            value: '110100',
            children: [
              { label: '海淀区', value: '110108' },
              { label: '朝阳区', value: '110105' },
            ],
          },
        ],
      },
      {
        label: '上海市',
        value: '310000',
        children: [{ label: '上海市', value: '310100', children: [{ label: '浦东新区', value: '310115' }] }],
      },
      {
        label: '广东省',
        value: '440000',
        children: [{ label: '珠海市', value: '440400' }],
      },
    ];

    const renderCascader = (overrides = {}) => {
      const id = simulate.load({
        template: `<t-cascader id="cas" filterable filter="{{filter}}" options="{{options}}" />`,
        data: {
          options,
          filter: null,
          ...overrides,
        },
        usingComponents: { 't-cascader': cascader },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      return comp;
    };

    it('reflects filterable on instance data', () => {
      const comp = renderCascader();
      const $cascader = comp.querySelector('#cas');
      expect($cascader.instance.data.filterable).toBe(true);
      expect($cascader.instance.data.isSearching).toBe(false);
    });

    it('default filter matches full-path label (case-insensitive)', async () => {
      const comp = renderCascader();
      const $cascader = comp.querySelector('#cas');
      $cascader.instance.applyFilter('海');
      await simulate.sleep();
      expect($cascader.instance.data.isSearching).toBe(true);
      const keys = $cascader.instance.data.filterResults.map((r) => r.key);
      expect(keys).toEqual(expect.arrayContaining(['110000/110100/110108', '440000/440400']));
    });

    it('shows empty state when no path matches', async () => {
      const comp = renderCascader();
      const $cascader = comp.querySelector('#cas');
      $cascader.instance.applyFilter('xxxxx');
      await simulate.sleep();
      expect($cascader.instance.data.isSearching).toBe(true);
      expect($cascader.instance.data.filterResults).toHaveLength(0);
    });

    it('clear restores layered view', async () => {
      const comp = renderCascader();
      const $cascader = comp.querySelector('#cas');
      $cascader.instance.applyFilter('北');
      await simulate.sleep();
      expect($cascader.instance.data.isSearching).toBe(true);
      $cascader.instance.resetFilter();
      await simulate.sleep();
      expect($cascader.instance.data.isSearching).toBe(false);
      expect($cascader.instance.data.filterKeyword).toBe('');
    });

    it('uses custom filter function when provided', async () => {
      const comp = renderCascader({
        filter: (keyword, option) => option.label === keyword,
      });
      const $cascader = comp.querySelector('#cas');
      $cascader.instance.applyFilter('浦东新区');
      await simulate.sleep();
      expect($cascader.instance.data.filterResults).toHaveLength(1);
      expect($cascader.instance.data.filterResults[0].key).toBe('310000/310100/310115');
    });

    it('selecting a flat result writes selectedIndexes and clears search state', async () => {
      const comp = renderCascader();
      const $cascader = comp.querySelector('#cas');

      $cascader.instance.applyFilter('海淀');
      await simulate.sleep();
      const target = $cascader.instance.data.filterResults[0];
      $cascader.instance.onFilterResultTap({ currentTarget: { dataset: { key: target.key } } });
      await simulate.sleep();

      expect($cascader.instance.data.isSearching).toBe(false);
      expect($cascader.instance.data.filterKeyword).toBe('');
      expect($cascader.instance.data.selectedIndexes).toEqual(target.indexes);
      const { items, selectedIndexes } = $cascader.instance.data;
      const leaf = items[selectedIndexes.length - 1][selectedIndexes[selectedIndexes.length - 1]];
      expect(leaf.label).toBe('海淀区');
      expect(leaf.value).toBe('110108');
    });
  });

  describe(': lazy load', () => {
    const renderCascader = ({ options, value = null, load, keys } = {}) => {
      const id = simulate.load({
        template: `<t-cascader id="cas" options="{{options}}" value="{{value}}" load="{{load}}" keys="{{keys}}" />`,
        data: { options, value, load, keys },
        usingComponents: { 't-cascader': cascader },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      return comp;
    };

    const select = ($cascader, level, value) => {
      $cascader.instance.handleSelect({
        target: { dataset: { level } },
        detail: { value },
      });
    };

    it('loads children:true nodes on selection without mutating options', async () => {
      const options = [{ label: '中国', value: 'CN', children: true }];
      const load = jest.fn(() => Promise.resolve([{ label: '广东省', value: '440000' }]));
      const comp = renderCascader({ options, load });
      const $cascader = comp.querySelector('#cas');

      expect(load).not.toHaveBeenCalled();
      select($cascader, 0, 'CN');
      await simulate.sleep();

      expect(load).toHaveBeenCalledTimes(1);
      expect(load.mock.calls[0][0]).toMatchObject({ label: '中国', value: 'CN' });
      expect($cascader.instance.data.items[1]).toEqual([{ label: '广东省', value: '440000', disabled: undefined }]);
      expect(options[0].children).toBe(true);
    });

    it('initializes a value whose full path already exists', () => {
      const options = [
        {
          label: '中国',
          value: 'CN',
          children: [{ label: '深圳市', value: '440300' }],
        },
      ];
      const load = jest.fn();
      const comp = renderCascader({ options, value: '440300', load });
      const $cascader = comp.querySelector('#cas');

      expect($cascader.instance.data.selectedIndexes).toEqual([0, 0]);
      expect($cascader.instance.data.selectedValue).toEqual(['CN', '440300']);
      expect(load).not.toHaveBeenCalled();
    });

    it('restores an unresolved value after its path is loaded', async () => {
      const options = [{ label: '中国', value: 'CN', children: true }];
      const load = jest.fn((node) => {
        if (node.value === 'CN') {
          return Promise.resolve([{ label: '广东省', value: '440000', children: true }]);
        }
        return Promise.resolve([{ label: '深圳市', value: '440300' }]);
      });
      const comp = renderCascader({ options, value: '440300', load });
      const $cascader = comp.querySelector('#cas');
      const triggerChange = jest.spyOn($cascader.instance, 'triggerChange');

      expect($cascader.instance.data.selectedIndexes).toEqual([]);
      expect(load).not.toHaveBeenCalled();

      select($cascader, 0, 'CN');
      await simulate.sleep();
      expect($cascader.instance.data.selectedIndexes).toEqual([0]);

      select($cascader, 1, '440000');
      await simulate.sleep();

      expect(load).toHaveBeenCalledTimes(2);
      expect($cascader.instance.data.selectedIndexes).toEqual([0, 0, 0]);
      expect($cascader.instance.data.selectedValue).toEqual(['CN', '440000', '440300']);
      expect(triggerChange).not.toHaveBeenCalled();
    });

    it('deduplicates an in-flight request and caches the loaded children', async () => {
      let resolveLoad;
      const load = jest.fn(
        () =>
          new Promise((resolve) => {
            resolveLoad = resolve;
          }),
      );
      const comp = renderCascader({ options: [{ label: '中国', value: 'CN', children: true }], load });
      const $cascader = comp.querySelector('#cas');

      select($cascader, 0, 'CN');
      select($cascader, 0, 'CN');
      expect(load).toHaveBeenCalledTimes(1);

      resolveLoad([{ label: '广东省', value: '440000' }]);
      await simulate.sleep();
      select($cascader, 0, 'CN');
      await simulate.sleep();

      expect(load).toHaveBeenCalledTimes(1);
      expect($cascader.instance.data.items[1][0].value).toBe('440000');
    });

    it('keeps children:true after a rejected request so it can retry', async () => {
      const load = jest
        .fn()
        .mockRejectedValueOnce(new Error('network error'))
        .mockResolvedValueOnce([{ label: '广东省', value: '440000' }]);
      const comp = renderCascader({ options: [{ label: '中国', value: 'CN', children: true }], load });
      const $cascader = comp.querySelector('#cas');

      select($cascader, 0, 'CN');
      await simulate.sleep();
      select($cascader, 0, 'CN');
      await simulate.sleep();

      expect(load).toHaveBeenCalledTimes(2);
      expect($cascader.instance.data.items[1][0].value).toBe('440000');
    });

    it('supports lazy loading with custom keys', async () => {
      const keys = { label: 'name', value: 'code', children: 'nodes', disabled: 'blocked' };
      const load = jest.fn(() => Promise.resolve([{ name: '广东省', code: '440000' }]));
      const comp = renderCascader({ options: [{ name: '中国', code: 'CN', nodes: true }], load, keys });
      const $cascader = comp.querySelector('#cas');

      select($cascader, 0, 'CN');
      await simulate.sleep();

      expect(load).toHaveBeenCalledTimes(1);
      expect($cascader.instance.data.items[1]).toEqual([{ name: '广东省', code: '440000', blocked: undefined }]);
    });
  });
});
