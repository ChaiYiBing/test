import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      { path: '/dashboard', name: 'Dashboard', component: () => import('@/views/dashboard/Dashboard.vue') },
      { path: '/products', name: 'Product List', component: () => import('@/views/products/ProductList.vue') },
      { path: '/products/create', name: 'Add Product', component: () => import('@/views/products/ProductForm.vue') },
      { path: '/products/:id', name: 'Edit Product', component: () => import('@/views/products/ProductForm.vue'), props: true },
      { path: '/orders', name: 'Order List', component: () => import('@/views/orders/OrderList.vue') },
      { path: '/users', name: 'User List', component: () => import('@/views/users/UserList.vue') },
      { path: '/users/create', name: 'Add User', component: () => import('@/views/users/UserForm.vue') },
      { path: '/settings', name: 'Settings', component: () => import('@/views/Settings.vue') },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/pages/Page404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
