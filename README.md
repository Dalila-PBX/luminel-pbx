# Luminel - Sitio Web Agencia Creativa

El proyecto está construido sobre un stack moderno de JavaScript:

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Lenguaje:** TypeScript para tipado estático y seguridad.
- **Estilos:** Bootstrap 5 para el sistema de rejillas y componentes base, con CSS personalizado (scoped).
- **Enrutamiento:** Vue Router para la navegación entre vistas.
- **Animaciones:** `@vueuse/motion` para animaciones de entrada y `epic-spinners` para el loader.
- **Empaquetador:** Vite para un desarrollo rápido y builds optimizados.

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

### Prerrequisitos

Asegúrate de tener instalado Node.js (versión 16 o superior).

### Pasos

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/TU_USUARIO/luminel-pbx.git
    cd luminel-pbx
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    El sitio estará disponible generalmente en `http://localhost:5173`.

4.  **Compilar para producción:**
    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

La arquitectura del proyecto sigue las mejores prácticas de Vue 3:

```text
src/
├── components/          # Componentes reutilizables de la UI
│   ├── branding/        # Componentes específicos de la vista Branding
│   ├── diseno/          # Componentes específicos de la vista Diseño Web
│   ├── home/            # Secciones de la página de Inicio (Hero, Servicios, Clientes)
│   ├── marketing/       # Componentes específicos de la vista Marketing
│   ├── nosotros/        # Componentes específicos de la vista Nosotros
│   ├── FooterComponent.vue      # Pie de página global
│   ├── HeaderComponent.vue      # Barra de navegación global
│   ├── LoaderComponent.vue      # Pantalla de carga inicial
│   └── WhatsappChatComponent.vue # Botón flotante de WhatsApp
│
├── composables/         # Lógica reutilizable (Hooks)
│   └── useGlobalLoader.ts # Estado global para controlar el Loader entre vistas
│
├── data/                # Archivos TypeScript con el contenido estático (Textos, Rutas de img)
│   ├── home.ts          # Datos para la Home
│   ├── branding.ts      # Datos para Branding
│   └── ...
│
├── interfaces/          # Definiciones de tipos TypeScript (Modelos de datos)
│
├── router/              # Configuración de rutas (Vue Router)
│
├── views/               # Vistas principales (Páginas)
│   ├── HomeView.vue
│   ├── BrandingView.vue
│   ├── DisenoView.vue
│   ├── MarketingView.vue
│   └── NosotrosView.vue
│
└── App.vue              # Componente raíz
```

## 🧩 Características Clave

### Gestión de Contenido (Data Driven)

El contenido del sitio está desacoplado de la vista en la carpeta `src/data/`. Para modificar un texto, edita el archivo `.ts` correspondiente.

### Sistema de Carga (Loader)

Se implementó un sistema de carga global que muestra un spinner animado al navegar entre rutas, garantizando la carga de recursos.

## ⚙️ Configuración Recomendada (IDE)

VS Code + Vue - Official.

## 👥 Autores

- **Desarrollador Frontend:** [Crisanta Dalila Santiago Alberto]
