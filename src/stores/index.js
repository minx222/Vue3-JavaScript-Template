import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const stores = createPinia()
stores.use(piniaPersist)

/**
 * 安装store 状态管理 使用pinia进行状态管理
 * @param {App} app
 */
const setupStore = (app) => {
  app.use(stores)
}

export { stores, setupStore }
