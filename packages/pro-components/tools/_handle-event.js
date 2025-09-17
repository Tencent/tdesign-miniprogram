/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */

// eslint-disable-next-line import/prefer-default-export
export function handleEvent(event) {
  const { hasOwnProperty } = Object.prototype;
  const _toString = Object.prototype.toString;
  function noop() {}
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  function isPlainObject(obj) {
    return _toString.call(obj) === '[object Object]';
  }
  function getObjByArray(arr) {
    const obj = {};
    for (let i = 1; i < arr.length; i++) {
      const element = arr[i];
      // eslint-disable-next-line prefer-destructuring
      obj[element[0]] = element[1];
    }
    return obj;
  }
  function getTarget(obj, path) {
    const parts = path.split('.');
    let key = parts[0];
    if (key.indexOf('__$n') === 0) {
      // number index
      key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
      return obj[key];
    }
    return getTarget(obj[key], parts.slice(1).join('.'));
  }
  function getValue(dataPath, target) {
    return getTarget(target, dataPath);
  }
  function getExtraValue(vm, dataPathsArray) {
    let context = vm;
    dataPathsArray.forEach((dataPathArray) => {
      const dataPath = dataPathArray[0];
      const value = dataPathArray[2];
      if (dataPath || typeof value !== 'undefined') {
        // ['','',index,'disable']
        const propPath = dataPathArray[1];
        const valuePath = dataPathArray[3];

        let vFor;
        if (Number.isInteger(dataPath)) {
          vFor = dataPath;
        } else if (!dataPath) {
          vFor = context;
        } else if (typeof dataPath === 'string' && dataPath) {
          if (dataPath.indexOf('#s#') === 0) {
            vFor = dataPath.slice(3);
          } else {
            vFor = getValue(dataPath, context);
          }
        }
        if (Number.isInteger(vFor)) {
          context = value;
        } else if (!propPath) {
          context = vFor[value];
        } else if (Array.isArray(vFor)) {
          context = vFor.find((vForItem) => getValue(propPath, vForItem) === value);
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find((vForKey) => getValue(propPath, vFor[vForKey]) === value);
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }

        if (valuePath) {
          context = getValue(valuePath, context);
        }
      }
    });
    return context;
  }

  function processEventExtra(vm, extra, event, __args__) {
    const extraObj = {};

    if (Array.isArray(extra) && extra.length) {
      /**
       *[
       *    ['data.items', 'data.id', item.data.id],
       *    ['metas', 'id', meta.id]
       *],
       *[
       *    ['data.items', 'data.id', item.data.id],
       *    ['metas', 'id', meta.id]
       *],
       *'test'
       */
      extra.forEach((dataPath, index) => {
        if (typeof dataPath === 'string') {
          if (!dataPath) {
            // model,prop.sync
            extraObj[`$${index}`] = vm;
          } else if (dataPath === '$event') {
            // $event
            extraObj[`$${index}`] = event;
          } else if (dataPath === 'arguments') {
            extraObj[`$${index}`] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj[`$${index}`] = getValue(dataPath.replace('$event.', ''), event);
          } else {
            extraObj[`$${index}`] = getValue(dataPath, vm);
          }
        } else {
          extraObj[`$${index}`] = getExtraValue(vm, dataPath);
        }
      });
    }
    return extraObj;
  }
  function processEventArgs(vm, event, args = [], extra = [], methodName) {
    // fixed 用户直接触发 mpInstance.triggerEvent
    const __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
    if (!args.length) {
      return [event];
    }

    const extraObj = processEventExtra(vm, extra, event, __args__);

    const ret = [];
    args.forEach((arg) => {
      if (arg === '$event') {
        if (methodName === '__set_model') {
          // input v-model value
          ret.push(event.target.value);
        } else {
          ret.push(event);
        }
      } else if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    });

    return ret;
  }
  function isMatchEventType(eventType, optType) {
    return eventType === optType || (optType === 'regionchange' && (eventType === 'begin' || eventType === 'end'));
  }
  function wrapper$1(event) {
    event.stopPropagation = noop;
    event.preventDefault = noop;

    event.target = event.target || {};

    if (!hasOwn(event, 'detail')) {
      event.detail = {};
    }
    // 抄的uniapp的源码，不知道具体场景是怎样
    if (hasOwn(event, 'markerId')) {
      event.detail = typeof event.detail === 'object' ? event.detail : {};
      event.detail.markerId = event.markerId;
    }

    if (isPlainObject(event.detail)) {
      event.target = { ...event.target, ...event.detail };
    }

    return event;
  }
  event = wrapper$1(event);
  const { dataset } = event.currentTarget || event.target;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  const eventOpts = dataset.eventOpts || dataset['event-opts'];
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }
  const eventType = event.type;
  const ret = [];
  eventOpts.forEach((eventOpt) => {
    let type = eventOpt[0];
    const eventsArray = eventOpt[1];

    const ONCE = '~';
    const CUSTOM = '^';

    const isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    const isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach((eventArray) => {
        const methodName = eventArray[0].replace('^', '').replace('~', ''); // handler的方法名
        if (methodName) {
          const handler = this.data[methodName];
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          let params = processEventArgs(this.data, event, eventArray[1], eventArray[2], methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([, , , , , , , , , , event]);
          }
          ret.push(handler.apply(this, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
