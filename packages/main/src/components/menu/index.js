import { defineComponent } from "vue";

export default defineComponent({
  props: {
    item: Object,
  },
  setup(props) {
    return { item: toRef(props, 'item') };
  },
  template: `
    <a-sub-menu :key="item.key" :title="item.title">
      <template #title>
        <span>
          {{ item.title }}
        </span>
      </template>
      <template v-for="child in item.children">
        <template v-if="child.children">
          <recursive-sub-menu :key="child.key" :item="child"></recursive-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="child.key">{{ child.title }}</a-menu-item>
        </template>
      </template>
    </a-sub-menu>
  `,
  })
