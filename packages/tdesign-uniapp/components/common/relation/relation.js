// #ifdef H5
// import { sortChildren } from '../../common/dom/vnodes-h5';
// #endif
// #ifndef H5
// import { sortMPChildren } from '../../common/dom/vnodes-mp';
// #endif

function findNearListParent(children = [], name) {
  let temp;
  for (const item of children) {
    // console.log('__nodeId__', item, item.$options.name, parentRelationKey, thisRelationKey);
    const parentRelationKey = item.$props && item.$props.relationKey;
    const thisRelationKey = this.$props && this.$props.relationKey;
    if (item.$options.name === name && parentRelationKey === thisRelationKey) {
      temp = item;
    }
    if (item === this && temp) {
      // console.log('item === this', item);
      return temp;
    }
    const foundInChildren = findNearListParent.call(this, item.$children, name);
    if (foundInChildren) {
      return foundInChildren;
    }
  }

  return temp;
}


function getParentInToutiao(name) {
  let parent = this.$parent;
  if (!parent) {
    const pages = getCurrentPages();
    parent = pages[pages.length - 1]?.$vm;
  }

  if (parent && !parent.$parent) {
    const children = parent.$children;
    if (!children || !children.length) return;
    const result = findNearListParent.call(this, children, name);
    // const result2 = children.find(item => item.$options.name === name);
    // console.log('result2', result2, result2.__nodeId__);
    // console.log('result', result, result.__nodeId__);
    return result;
  }
}


function getParent(name = '') {
  const found = getParentInToutiao.call(this, name);
  if (found) {
    return found;
  }

  let parent = this.$parent;

  if (!parent) {
    return;
  }

  let parentName = parent.$options.name;
  while (parentName !== name) {
    parent = parent.$parent;
    if (!parent) return false;
    parentName = parent.$options.name;
  }
  return parent;
}


export function ChildrenMixin(parent, options = {}) {
  const indexKey = options.indexKey || 'index';

  return {
    inject: {
      // #ifndef MP-TOUTIAO
      [parent]: {
        default: null,
      },
      // #endif
    },
    data() {
      return {
        // #ifdef MP-TOUTIAO
        [parent]: null,
        // #endif
      };
    },
    computed: {
      // 会造成循环引用
      // parent() {
      //   if (this.disableBindRelation) {
      //     return null;
      //   }

      //   return this[parent];
      // },

      [indexKey]() {
        const that = this;

        that.bindRelation();

        if (that[parent]) {
          return that[parent].children.indexOf(this);
        }

        return null;
      },
    },

    watch: {
      disableBindRelation(val) {
        const that = this;
        if (!val) {
          that.bindRelation();
        }
      },
    },

    created() {
      // 循环引用调试代码
      // this[parent].children.push(this);
      // #ifndef H5
      const that = this;
      that.bindRelation();
      // #endif
    },


    mounted() {
      // #ifdef H5
      const that = this;
      that.bindRelation();
      // #endif
    },

    // #ifdef VUE2
    beforeDestroy() {
      const that = this;
      that.onBeforeMount();
    },
    // #endif

    // #ifdef VUE3
    beforeUnmount() {
      const that = this;
      that.onBeforeMount();
    },
    // #endif

    methods: {
      bindRelation() {
        // #ifdef MP-TOUTIAO
        const parentComponentName = `T${parent}`;
        this[parent] = getParent.call(this, parentComponentName);
        // #endif
        if (!this[parent] || (this[parent].children && this[parent].children.indexOf(this) !== -1)) {
          return;
        }

        const children = [...(this[parent].children || []), this];


        // #ifdef H5
        try {
          // sortChildren(children, this[parent]);
        } catch (err) {
          console.log('err', err);
        }
        // #endif

        // #ifndef H5
        // sortMPChildren(children);
        // #endif

        this[parent].children = children;
        this.innerAfterLinked?.(this);
        this[parent].innerAfterLinked?.(this);

        // console.log('bindRelation.children', children);
      },
      onBeforeMount() {
        const that = this;
        if (that[parent]) {
          that[parent].children = that[parent].children.filter(item => item !== that);
          this[parent].innerAfterUnLinked?.(this);
          this.innerAfterUnLinked?.(this);

          that?.destroyCallback?.();
        }
      },
    },
  };
}

export function ParentMixin(parent) {
  return {
    provide() {
      return {
        [parent]: this,
      };
    },

    data() {
      return {
        // 会造成循环引用
        // children: [],
      };
    },
  };
}
