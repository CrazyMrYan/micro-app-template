<template>
  <div class="layout-wrapper">
    <a-style-provider hash-priority="high">
      <a-config-provider
        :theme="provider"
      >
        <layout>
          <div id="viewport" ></div>
        </layout>
      </a-config-provider>
    </a-style-provider>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, provide } from 'vue';
import NProgress from 'nprogress';
import microApps from './micro-app';
import Layout from './components/layout/index.vue';
import provider from './theme/provider'

const isLoading = ref(true);
const current = ref('/vue/');

// watch(isLoading, (val) => {
//   if (val) {
//     NProgress.start();
//   } else {
//     NProgress.done();
//   }
// });

// const goto = (item) => {
//   history.pushState(null, item.activeRule, item.activeRule);
//   current.value = item.name
// };

const bindCurrent = () => {
  const path = window.location.pathname;
  console.info('xxxxxxxx');
  if (microApps.findIndex((item) => item.activeRule === path) >= 0) {
    current.value = path;
  }
};

onMounted(() => {
  bindCurrent();
  // NProgress.start();
});
</script>

<style lang="scss">
html,
body {
  margin: 0 !important;
  padding: 0;
}
.layout-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
