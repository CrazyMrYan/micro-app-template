import { createApp } from "vue";
import App from "./App.vue";
import routes from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory } from "vue-router";

function setDomain() {
  // window.ISNK = document.domain.indexOf('172') > -1 // 如果是172客户的域名,那就拿客户地址,自动判断,这里搞个全局判断标志
  window.ORIGIN =
    process.env.NODE_ENV === "development"
      ? process.env.VITE_ORIGIN_DEV
      : process.env.VITE_ORIGIN_PRO;
}
//  设置主域名,但不跟随基座端口变化而变化
setDomain();
let router = null;
let instance = null;
let history = null;
function render(props = {}) {
  const { container } = props;
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/field-system" : "/"
  );

  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  //   instance.use(store);
  instance.mount(
    container ? container.querySelector("#app") : document.getElementById("app")
  );
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log("我正在作为子应用运行");
  }
}

// some code
renderWithQiankun({
  mount(props) {
    console.log("viteapp mount", props);
    render(props);
    // console.log(instance.config.globalProperties.$route,"444444444");
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props) {
    console.log("vite被卸载了");
    instance.unmount();
    instance._container.innerHTML = "";
    history.destroy(); // 不卸载  router 会导致其他应用路由失败
    router = null;
    instance = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
