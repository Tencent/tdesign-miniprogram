/* eslint-disable no-param-reassign */
import { isPlainObject } from '../validator';
import { canUseVirtualHost } from '../version';
import { toCamel, toPascal, hyphenate } from '../utils';

const getInnerControlledValue = key => `data${key.replace(/^(\w)/, (e, t) => t.toUpperCase())}`;
const getDefaultKey = key =>  `default${key.replace(/^(\w)/, (e, t) => t.toUpperCase())}`;

const ARIAL_PROPS = [
  { key: 'ariaHidden', type: Boolean },
  { key: 'ariaRole', type: String },
  { key: 'ariaLabel', type: String },
  { key: 'ariaLabelledby', type: String },
  { key: 'ariaDescribedby', type: String },
  { key: 'ariaBusy', type: Boolean },
];

const getPropsDefault = (type, disableBoolean = false) => {
  if (type === Boolean && !disableBoolean) {
    return false;
  }
  if (type === String) {
    return '';
  }
  return undefined;
};

const COMMON_PROPS = {
  ...ARIAL_PROPS.reduce((acc, item) => ({
    ...acc,
    [item.key]: {
      type: item.type,
      default: getPropsDefault(item.type),
    },
  }), {}),

  customStyle: { type: [String, Object], default: '' },
};


export const toComponent = function (options) {
  if (!options.properties && options.props) {
    options.properties = options.props;
  }

  if (options.properties) {
    Object.keys(options.properties).forEach((k) => {
      let opt = options.properties[k];
      // 如果不是 Object 类型，则默认指定 type = options.properties[k]；
      if (!isPlainObject(opt)) {
        opt = { type: opt };
      }
      options.properties[k] = opt;
    });
  }

  if (!options.methods) options.methods = {};

  if (!options.lifetimes) options.lifetimes = {};

  const oldCreated = options.created;
  const { controlledProps = [] } = options;

  options.created = function (...args) {
    if (oldCreated) {
      oldCreated.apply(this, args);
    }
    controlledProps.forEach(({ key }) => {
      const defaultKey = getDefaultKey(key);
      const tDataKey = getInnerControlledValue(key);
      this[tDataKey] = this[key];

      if (this[key] == null) {
        this._selfControlled = true;
      }

      if (this[key] == null && this[defaultKey] != null) {
        this[tDataKey] = this[defaultKey];
      }
    });
  };

  options.methods._trigger = function (evtName, detail, opts) {
    const target = controlledProps.find(item => item.event === evtName);

    if (target) {
      const { key } = target;
      if (this._selfControlled) {
        const tDataKey = getInnerControlledValue(key);
        this[tDataKey] = detail[key];
      }
      this.$emit(
        `update:${key}`,
        detail[key],
        opts,
      );
    }

    this.$emit(
      evtName,
      detail,
      opts,
    );
  };
  return options;
};


/**
 * 将一个继承了 BaseComponent 的类转化成 小程序 Component 的调用
 * 根据最新的微信 d.ts 描述文件，Component 在实例化的时候，会忽略不支持的自定义属性
 */
export const wxComponent = function wxComponent() {
  return function (baseConstructor) {
    class WxComponent extends baseConstructor {
      // 暂时移除了冗余的代码，后续补充
    }

    const current = new WxComponent();

    current.options = current.options || {};

    // 所有组件默认都开启css作用域
    // 写到这里是为了防止组件设置 options 时无意覆盖掉了 addGlobalClass
    // 使用 "styleIsolation": "apply-shared" 代替 addGlobalClass: true，see https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/glass-easel/migration.html#JSON-%E9%85%8D%E7%BD%AE
    // if (current.options.addGlobalClass === undefined) {
    //   current.options.addGlobalClass = true;
    // }

    if (canUseVirtualHost() && current.options.virtualHost == null) {
      current.options.virtualHost = true;
    }

    const obj = toComponent(current);

    return obj;
  };
};

function sortPropsType(type) {
  if (!Array.isArray(type)) {
    return type;
  }
  type.sort((a, b) => {
    if (a === Boolean) {
      return -1;
    }
    if (b === Boolean) {
      return 1;
    }
    return 0;
  });
  return type;
}

function filterProps(props, controlledProps) {
  const newProps = {};
  const emits = [];
  const reg = /^on[A-Z][a-z]/;
  const controlledKeys = Object.values(controlledProps).map(item => item.key);
  const unControlledKeys = controlledKeys.map(key => getDefaultKey(key));

  Object.keys(props).forEach((key) => {
    const curType = props[key].type || props[key];

    if (reg.test(key) && props[key].type === Function) {
      const str = key.replace(/^on/, '');
      const eventName = str.charAt(0).toLowerCase() + str.slice(1);
      emits.push(...[hyphenate(eventName), eventName]);
    } else if (controlledKeys.indexOf(key) > -1
       || unControlledKeys.indexOf(key) > -1
    ) {
      const newType = Array.isArray(curType) ? curType : [curType];
      // #ifdef VUE3
      newProps[key] = {
        type: [null, ...newType],
        default: null,
      };
      // #endif
      // #ifdef VUE2
      newProps[key] = {
        type: [...newType],
        default: null,
      };
      // #endif
    } else if (
      [Boolean, String].indexOf(props[key].type) > -1
      && props[key].default === undefined
    ) {
      newProps[key] = {
        ...props[key],
        default: getPropsDefault(props[key].type, true),
      };
    } else {
      newProps[key] = {
        ...(typeof props[key] === 'object' ? props[key] : {}),
        type: sortPropsType(curType),
      };
    }
  });

  return {
    newProps,
    emits,
  };
}

const getEmitsByControlledProps = controlledProps => Object.values(controlledProps).map(item => `update:${item.key}`);

export const uniComponent = function (info) {
  const { newProps, emits } = filterProps(info.props || {}, info.controlledProps || {});
  info.props = {
    ...getExternalClasses(info),
    ...newProps,
    ...COMMON_PROPS,
  };
  info.emits = Array.from(new Set([
    ...(info.emits || []),

    ...(getEmitsByControlledProps(info.controlledProps || {})),
    ...emits,
  ]));

  info.options = {
    ...(info.options || {}),
    multipleSlots: true,
  };

  if (canUseVirtualHost() && info.options.virtualHost == null) {
    info.options.virtualHost = true;
  }

  if (!info.options.styleIsolation) {
    info.options.styleIsolation = 'shared';
  }
  if (info.name) {
    info.name = toPascal(info.name);
  }

  const obj = toComponent(info);
  return obj;
};


export function getExternalClasses(info) {
  if (!info.externalClasses) {
    return {};
  }
  const { externalClasses } = info;
  const list = Array.isArray(externalClasses) ? externalClasses : [externalClasses];

  return list.reduce((acc, item) => ({
    ...acc,
    [toCamel(item)]: {
      type: String,
      default: '',
    },
  }), {});
}
