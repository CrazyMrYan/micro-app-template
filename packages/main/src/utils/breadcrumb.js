
// 递归查找面包屑数据
export function findBreadcrumbData(data, path) {
  for (const item of data) {
    if (item.path === path) {
      return [item];
    }
    if (item.children) {
      const result = findBreadcrumbData(item.children, path);
      if (result.length > 0) {
        return [item, ...result];
      }
    }
  }
  return [];
}
