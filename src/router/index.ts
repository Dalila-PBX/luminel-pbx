import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Luminel | Inicio' },
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('@/views/NosotrosView.vue'),
    meta: { title: 'Luminel | Nosotros' },
  },
  {
    path: '/branding',
    name: 'branding',
    component: () => import('@/views/BrandingView.vue'),
    meta: { title: 'Luminel | Branding' },
  },
  {
    path: '/diseno',
    name: 'diseno',
    component: () => import('@/views/DisenoView.vue'),
    meta: { title: 'Luminel | Diseno' },
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: () => import('@/views/MarketingView.vue'),
    meta: { title: 'Luminel | Marketing' },
  },
];

const router = createRouter({
  //verificar si funciona sin el #
  history: createWebHistory(),
  routes,
  //siempre hace scroll pa'riba xd
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 };
  },
}); 

//actualiza el titulo de la pestaña despues de cada navegacion
router.afterEach((to) => {
  const defaultTitle = 'Luminel';
  const title = to.meta.title as string;
  document.title = title || defaultTitle;
});

export default router;
