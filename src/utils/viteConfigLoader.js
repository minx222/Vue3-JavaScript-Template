const httpsRE = /^https:\/\//
// 加载服务代理
export function loaderProxy(list) {
  const proxyProperties = {}
  for (const item of list) {
    const isHttps = httpsRE.test(item.target)
    proxyProperties[item.prefix] = {
      target: item.target,
      changeOrigin: true,
      ws: true,
      ...(item.rewrite
        ? {
            rewrite: (path) => path.replace(new RegExp(`^${item.prefix}`), '')
          }
        : {}),
      ...(isHttps ? { secure: false } : {})
    }
  }
  return proxyProperties
}
