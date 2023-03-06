export const RootRouters = [
  {
    path: '/',
    redirect: '/home'
  }, 
]

export const BaseRouters = [
  {
    path: '/home',
    component: () => import('@/views/HomeView.vue'),
  }, 
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
  },
]
