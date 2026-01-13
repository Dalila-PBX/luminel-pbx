import {  type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
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
