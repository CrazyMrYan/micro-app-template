const microApps = [
  {
    name: "field-system",
    entry:"//localhost:7316/field-system",
    activeRule: "/field-system",
  },
];

const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
    },
  };
});

export default apps;
