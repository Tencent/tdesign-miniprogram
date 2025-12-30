export function selectComponent(context, selector) {
  if (!selector || !context) return;

  if (typeof selector === 'function') {
    return selector(context);
  }

  let attribute = selector;
  if (attribute.match(/^[^\w]/)) {
    attribute = attribute.slice(1);
  }

  if (
    context.$refs && context.$refs[attribute]) {
    return context.$refs[attribute];
  }

  if (context && typeof context.$selectComponent === 'function') {
    const res =  context.$selectComponent(selector);
    return res;
  }

  return context && context.selectComponent && context.selectComponent(selector);
}


