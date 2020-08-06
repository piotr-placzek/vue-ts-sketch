import Vue from 'vue'
import Api from 'src/plugins/myplugin/api'

declare module 'vue/types/vue' {
  interface Vue {
    $api:  Api
  }
}