import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/onsur/OneDrive/Escritorio/polimi/hypermedia aplications/HYPermedia-applications-2023/vue-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}