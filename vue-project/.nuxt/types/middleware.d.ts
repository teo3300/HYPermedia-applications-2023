import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/onsur/OneDrive/Escritorio/polimi/hypermedia aplications/HYPermedia-applications-2023/vue-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}