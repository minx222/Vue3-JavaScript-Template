import { createRouter, createWebHistory } from "vue-router";
import { routers } from "./routers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
});

/**
 * 安装router路由
 * @param {App} app
 */
export const setupRouter = (app) => {
  app.use(router);
};

export default router;
