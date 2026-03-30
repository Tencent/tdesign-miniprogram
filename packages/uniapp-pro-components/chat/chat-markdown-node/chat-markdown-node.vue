<template>
  <!-- #ifdef VUE2 -->
  <view>
    <!-- #endif -->

    <block
      v-for="(item, i) in nodes"
      :key="i"
    >
      <!-- blocks -->

      <block v-if="item.type === 'heading'">
        <view
          :class="classPrefix + '-h ' + classPrefix + '-h' + item.depth"
          :data-index="i"
          @click="nodeClick"
        >
          <t-chat-markdown-node :nodes="item.tokens" />
        </view>
      </block>

      <block v-else-if="item.type === 'list'">
        <view
          :class="classPrefix + '-list ' + (item.ordered ? classPrefix + '-list__decimal' : '')"
          :data-type="item.ordered"
          :data-index="i"
          @click="nodeClick"
        >
          <block
            v-for="(li, j) in item.items"
            :key="j"
          >
            <view :class="classPrefix + '-list-item'">
              <block v-if="li.tokens && li.tokens.length">
                <t-chat-markdown-node :nodes="li.tokens" />
              </block>
              <block v-else>
                {{ li.text }}
              </block>
            </view>
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'paragraph'">
        <view
          :class="classPrefix + '-p'"
          :data-index="i"
          @click="nodeClick"
        >
          <t-chat-markdown-node :nodes="item.tokens" />
        </view>
      </block>

      <block v-else-if="item.type === 'image'">
        <view
          :class="classPrefix + '-image'"
          :data-index="i"
          @click="nodeClick"
        >
          <image
            :src="item.href"
            :alt="item.title"
            mode="widthFix"
          />
        </view>
      </block>

      <block v-else-if="item.type === 'table'">
        <view
          :class="tableName"
          :data-index="i"
          @click="nodeClick"
        >
          <view :class="tableName + '__container'">
            <view :class="tableName + '__thead'">
              <view :class="tableName + '__tr'">
                <block
                  v-for="(th, j) in item.header"
                  :key="j"
                >
                  <view
                    :class="tableName + '__th'"
                    :style="'text-align:' + item.align[j] || 'left' + ';'"
                  >
                    <t-chat-markdown-node :nodes="th.tokens" />
                  </view>
                </block>
              </view>
            </view>
            <view :class="tableName + '__tbody'">
              <block
                v-for="(row, k) in item.rows"
                :key="k"
              >
                <view :class="tableName + '__tr'">
                  <block
                    v-for="(cell, l) in row"
                    :key="l"
                  >
                    <view
                      :class="tableName + '__td'"
                      :style="'text-align:' + item.align[l] || 'left' + ';'"
                    >
                      <t-chat-markdown-node :nodes="cell.tokens" />
                    </view>
                  </block>
                </view>
              </block>
            </view>
          </view>
        </view>

      <!-- <chat-markdown-table :node="item">
        <template #default="{th}">
          <TChatMarkdownNode :nodes="th.tokens" />
        </template>
      </chat-markdown-table> -->
      </block>

      <block v-else-if="item.type === 'blockquote'">
        <view
          :class="classPrefix + '-blockquote'"
          :data-index="i"
          @click="nodeClick"
        >
          <t-chat-markdown-node :nodes="item.tokens" />
        </view>
      </block>

      <block v-else-if="item.type === 'code'">
        <chat-markdown-code
          :node="item"
          :theme="theme"
        />
      </block>

      <!-- Inlines -->

      <block v-else-if="item.type === 'text'">
        <view
          :class="classPrefix + '-text ' + classPrefix + '-inline'"
          :data-raw="item.raw"
          :data-index="i"
          @click="nodeClick"
        >
          <block v-if="item.tokens && item.tokens.length">
            <t-chat-markdown-node :nodes="item.tokens" />
          </block>
          <block v-else>
            {{ '' + item.raw + '' }}
            <text
              v-if="item.isTail"
              :class="classPrefix + '-tail'"
            >
              {{ item.tailContent }}
            </text>
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'strong'">
        <view
          :class="classPrefix + '-strong ' + classPrefix + '-inline'"
          :data-index="i"
          @click="nodeClick"
        >
          <block v-if="item.tokens && item.tokens.length">
            <t-chat-markdown-node :nodes="item.tokens" />
          </block>
          <block v-else>
            {{ '' + item.text + '' }}
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'em'">
        <view
          :class="classPrefix + '-em ' + classPrefix + '-inline'"
          :data-index="i"
          @click="nodeClick"
        >
          <block v-if="item.tokens && item.tokens.length">
            <t-chat-markdown-node :nodes="item.tokens" />
          </block>
          <block v-else>
            {{ '' + item.text + '' }}
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'del'">
        <view
          :class="classPrefix + '-del ' + classPrefix + '-inline'"
          :data-index="i"
          @click="nodeClick"
        >
          <block v-if="item.tokens && item.tokens.length">
            <t-chat-markdown-node :nodes="item.tokens" />
          </block>
          <block v-else>
            {{ '' + item.text + '' }}
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'link'">
        <view
          :class="classPrefix + '-link ' + classPrefix + '-inline'"
          :data-index="i"
          @click="nodeClick"
        >
          <block v-if="item.tokens && item.tokens.length">
            <t-chat-markdown-node :nodes="item.tokens" />
          </block>
        </view>
      </block>

      <block v-else-if="item.type === 'ref'">
        <view
          :class="classPrefix + '-ref ' + classPrefix + '-inline'"
          :data-index="i"
          @click="nodeClick"
        >
          <text :class="classPrefix + '-ref-txt'">
            {{ '' + item.text + '' }}
          </text>
        </view>
      </block>

      <block v-else-if="item.type === 'space'">
        <view
          :class="classPrefix + '-space'"
          :data-index="i"
          @click="nodeClick"
        />
      </block>

      <block v-else-if="item.type === 'br'">
        <view
          :class="classPrefix + '-br'"
          :data-index="i"
          @click="nodeClick"
        />
      </block>

      <block v-else-if="item.type === 'hr'">
        <view
          :class="classPrefix + '-hr'"
          :data-index="i"
          @click="nodeClick"
        />
      </block>

      <block v-else-if="item.type === 'codespan'">
        <view
          :class="classPrefix + '-codespan ' + classPrefix + '-inline'"
          :data-type="item.type"
          :data-index="i"
          @click="nodeClick"
        >
          {{ '' + (item.text || item.raw) + '' }}
        </view>
      </block>

      <block v-else>
        <view
          :class="classPrefix + '-raw ' + classPrefix + '-inline'"
          :data-type="item.type"
          :data-index="i"
          @click="nodeClick"
        >
          {{ '' + (item.text || item.raw) + '' }}
        </view>
      </block>
    </block>
  <!-- #ifdef VUE2 -->
  </view>
  <!-- #endif -->
</template>

<script>
import chatMarkdownCode from '../chat-markdown-code/chat-markdown-code.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import { uniComponent } from '@tdesign/uniapp/common/src/index';
// #ifdef MP
import { TChatMarkdownNode } from './chat-markdown-node.vue';
// #endif

const name = `${prefix}-chat-markdown`;
const tableName = `${prefix}-chat-markdown-table`;


export default {
  components: {
    chatMarkdownCode,
    // #ifdef MP
    TChatMarkdownNode,
    // #endif
  },
  ...uniComponent({
    name: `${name}-node`,
    options: {
      multipleSlots: true,
      styleIsolation: 'shared',
    },

    props: {
      nodes: {
        type: Array,
        default: () => [],
      },
    },

    data() {
      return {
        classPrefix: name,
        tableName,
        theme: '',
      };
    },

    methods: {
      nodeClick(e) {
        const { index } = e.currentTarget.dataset || {};
        const token = this.nodes?.[index];
        this.handleClick(e, 'node-tap', token);
      },

      getCareMarkdown() {
        if (this.careMarkdown) {
          return this.careMarkdown;
        }
        this.careMarkdown = this.$parent;
        while (this.careMarkdown && this.careMarkdown.name !== name) {
          this.careMarkdown = this.careMarkdown.$parent;
        }

        return this.careMarkdown;
      },

      handleClick(event, type, token) {
      // 通用点击事件
        const target = this.getCareMarkdown();
        if (!target) return;

        target.$emit('click', {
          event,
          node: token,
        });
      },
    },

  }),
};
</script>
<style scoped>
@import '../chat-markdown/chat-markdown.css';
@import '../chat-markdown-table/chat-markdown-table.css';
</style>
