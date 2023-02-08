export const Root = {
  path: '/',
  redirect: '/home',
  name: 'root'
}

export const BaseRouters = [
  {
    path: '/home',
    name: 'homeView',
    component: () => import('@/views/HomeView.vue'),
    meta: {}
  },
  {
    path: '/about',
    name: 'aboutView',
    component: () => import('@/views/AboutView.vue')
  }
]
