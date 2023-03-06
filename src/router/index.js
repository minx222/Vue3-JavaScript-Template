import { createRouter, createWebHistory } from 'vue-router'
import { setupAfterEach, setupBeforeEach } from './each'
import { routers } from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers
})

/**
 * 安装router路由
 * @param {App} app
 */
export const setupRouter = (app) => {
  setupBeforeEach(router)
  setupAfterEach(router)
  app.use(router)
}

export default router
