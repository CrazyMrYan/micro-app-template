<template>
  <div class="layout-wrapper">
    <div id="viewport"></div>
  </div>
</template>

<script>
import NProgress from "nprogress";
import microApps from "./micro-app";

export default {
  name: "App",
  data() {
    return {
      isFirst: true,
      isLoading: true,
      microApps,
      current: "/vue/",
    };
  },
  computed: {

  },
  watch: {
    isLoading(val) {
      if (val) {
        NProgress.start();
      } else {
        this.$nextTick(() => {
          NProgress.done();
        });
      }
    },
  },
    created() {
    this.bindCurrent();
    NProgress.start();
  },
mounted() {

},
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule);
      // this.current = item.name
    },
    bindCurrent() {
      const path = window.location.pathname;
      console.info("xxxxxxxx");
      if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
        this.current = path;
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0 !important;
  padding: 0;
}
.layout-wrapper {
  width: 100%;
}
</style>
