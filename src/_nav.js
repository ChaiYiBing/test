export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Management',
  },
  {
    component: 'CNavItem',
    name: 'Products',
    to: '/products',
    icon: 'cil-list',
  },
  {
    component: 'CNavItem',
    name: 'Add Product',
    to: '/products/create',
    icon: 'cil-plus',
  },
  {
    component: 'CNavItem',
    name: 'Orders',
    to: '/orders',
    icon: 'cil-cart',
  },
  {
    component: 'CNavItem',
    name: 'Users',
    to: '/users',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'Settings',
    to: '/settings',
    icon: 'cil-settings',
  },
]
