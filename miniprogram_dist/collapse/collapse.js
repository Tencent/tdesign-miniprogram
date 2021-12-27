import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-collapse`;
TComponent({
    options: {
        addGlobalClass: true,
    },
    externalClasses: [`${prefix}-class`],
    relations: {
        '../collapse-panel/collapse-panel': {
            type: 'descendant',
            linked(target) {
                this.children.push(target);
            },
            unlinked(target) {
                this.children = this.children.filter((item) => item !== target);
            },
        },
    },
    properties: {
        value: {
            type: null,
            observer() {
                this.updateExpanded();
            },
        },
        accordion: {
            type: Boolean,
            observer() {
                this.updateExpanded();
            },
            value: false,
        },
        border: {
            type: Boolean,
            value: true,
        },
    },
    data: {
        classPrefix: name,
    },
    methods: {
        created() {
            this.children = [];
        },
        updateExpanded() {
            this.children = this.getRelationNodes('../collapse-panel/collapse-panel');
            this.children.forEach((child) => {
                child.updateExpanded();
            });
        },
        switch(name = null, expanded = null) {
            const { accordion, value } = this.properties;
            const changeItem = name;
            if (!accordion) {
                name = expanded
                    ? (value || []).concat(name)
                    : (value || []).filter((activeName) => activeName !== name);
            }
            else {
                name = expanded ? name : '';
            }
            if (expanded) {
                this.triggerEvent('open', changeItem);
            }
            else {
                this.triggerEvent('close', changeItem);
            }
            this.triggerEvent('change', name);
            this.triggerEvent('input', name);
        },
    },
});

//# sourceMappingURL=collapse.js.map
