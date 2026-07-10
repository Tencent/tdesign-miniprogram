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
});
