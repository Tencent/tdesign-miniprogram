/**
 * 出现的所有组件名必须在 src 目录下有对应的文件夹
 * - 父组件即在文档中有独立 url 页面的组件
 * - 没有子组件的可以不写在这里
 */
export const PARENT_WITH_CHILDREN_MAP: Record<string, string[]> = {
  Avatar: ['AvatarGroup'],
  Cell: ['CellGroup'],
  Checkbox: ['CheckboxGroup'],
  Collapse: ['CollapsePanel'],
  DropdownMenu: ['DropdownItem'],
  Grid: ['GridItem'],
  Indexes: ['IndexesAnchor'],
  Message: ['MessageItem'],
  Picker: ['PickerItem'],
  Radio: ['RadioGroup'],
  SideBar: ['SidebarItem'],
  Steps: ['StepItem'],
  Swiper: ['SwiperCell', 'SwiperNav'],
  TabBar: ['TabBarItem'],
  Tabs: ['TabPanel'],
};

/**
 * 将子组件映射回父组件
 */
export const CHILD_TO_PARENT_MAP = Object.entries(PARENT_WITH_CHILDREN_MAP).reduce((map, [parent, children]) => {
  children.forEach((child) => (map[child] = parent));
  return map;
}, {} as Record<string, string>);
