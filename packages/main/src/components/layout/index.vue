<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" > logo </div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item v-for="item in sitemap" @click="handleChangeMenu(item)" :key="item.key">
          <component :is="item.icon" />
          {{ item.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          theme="dark"
          v-model:selectedKeys="selectedKeys2"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
        <template v-for="item in sederMenu">
          <template v-if="item.children">
            <a-sub-menu :key="item.key" :title="item.title">
              <template #title>
                <span>
                  <component :is="item.icon" />
                  {{ item.title }}
                </span>
              </template>
              <template v-for="subItem in item.children">
                <template v-if="subItem.children">
                  <recursive-sub-menu :key="subItem.key" :item="subItem"></recursive-sub-menu>
                </template>
                <template v-else>
                  <a-menu-item :key="subItem.key">
                    <component :is="item.icon" />
                    {{ subItem.title }}</a-menu-item>
                </template>
              </template>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item  @click="handleChangeSideMenu(item)" :key="item.key">
              <component :is="item.icon" />
              {{ item.title }}
            </a-menu-item>
          </template>
        </template>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="item in breadcrumbs" :key="item.key">{{ item.title }}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import recursiveSubMenu from '../menu';
import {findBreadcrumbData} from '@/utils/breadcrumb'

const props = defineProps({
  sitemap: Object,
})

const sederMenu = ref([]);
const selectedKeys2 = ref([]);
const selectedKeys1 = ref([]);
const breadcrumbs = ref([]);

onMounted(() => {
  handleChangeMenu(props.sitemap[0]);
})

const push = (path) => {
  breadcrumbs.value = findBreadcrumbData(props.sitemap, path);
  history.pushState(null, path, path);
};

const handleChangeMenu = (item) =>{
  sederMenu.value = item.children;
  push(item.path)
  selectedKeys1.value = [item.key];
  selectedKeys2.value = [item.children[0].key];
}

const handleChangeSideMenu = (item) => {
  push(item.path);
}
</script>

<style scoped>
.header {
  display: flex;
  background-color: #FFF !important;
  padding: 0 !important;
}
.logo {
  width: 200px;
  text-align: center;
  background-color: #001529;
  color: #FFF;
  margin-right: 8px;
}
</style>
