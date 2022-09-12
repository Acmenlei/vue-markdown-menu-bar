import { App } from "vue"
import VueMarkdownMenuBar from "./lib/menu-bar/MenuBar.vue"

export default {
  install(Vue: App) {
    Vue.component("VueMarkdownMenuBar", VueMarkdownMenuBar);
  }
}

export { VueMarkdownMenuBar }
export * from "./types"