import _Vue from "vue"
import Api from "./api"

const MyPlugin = {
  install: (Vue: typeof _Vue, options?: MyPluginOptions) => {
    Vue.prototype.$api = new Api()
  }
}

export default MyPlugin;
export class MyPluginOptions {
    /* some stuff */
}