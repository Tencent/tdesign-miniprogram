/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 16:40:31
 * */
export interface TdSwipeCellProps {
    /**
     * 是否禁用滑动
     */
    disabled?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 左侧滑动操作项。所有行为同 `right`
     */
    left?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
        required?: boolean;
    };
    /**
     * 操作项是否呈现为打开态，值为数组时表示分别控制左右滑动的展开和收起状态
     * @default false
     */
    opened?: {
        type: BooleanConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: boolean | Array<boolean>;
        required?: boolean;
    };
    /**
     * 右侧滑动操作项。有两种定义方式，一种是使用数组，二种是使用插槽。`right.text` 表示操作文本，`right.className` 表示操作项类名，`right.style` 表示操作项样式，`right.onClick` 表示点击操作项后执行的回调函数。示例：`[{ text: '删除', style: 'background-color: red', onClick: () => {} }]`
     */
    right?: {
        type: ArrayConstructor;
        value?: Array<SwipeActionItem>;
        required?: boolean;
    };
}
export interface SwipeActionItem {
    text: string;
    className?: string;
    style?: string;
    onClick?: () => void;
    [key: string]: any;
}
