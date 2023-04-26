
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Index' ,component: () => import('../pages/Categories.vue')},
      { path: '/blog', name: 'Blog', component: () => import('../pages/Blog.vue')},
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    children: [
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
