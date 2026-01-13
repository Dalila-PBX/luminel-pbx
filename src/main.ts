

import { ViteSSG } from 'vite-ssg'
import './style.css'
/*Si hago un css global aqui lo referencio, el style css esta a la altura del main.ts*/
import App from './App.vue'
import { routes } from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { MotionPlugin } from '@vueuse/motion';

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
    },
  },
  ({ app, router, isClient }) => {
    app.use(MotionPlugin)

    if (isClient) {
      // Importar JS de Bootstrap solo en el cliente para evitar errores de 'document is not defined'
      import('bootstrap/dist/js/bootstrap.bundle.min.js')

      router.afterEach((to) => {
        const defaultTitle = 'Luminel';
        const title = to.meta.title as string;
        document.title = title || defaultTitle;
      });
    }
  },
)
