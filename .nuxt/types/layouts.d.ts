import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "author" | "default" | "list" | "post" | "post-simple"
declare module "/Users/jeongyunl/Documents/GitHub/jyunlog/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}