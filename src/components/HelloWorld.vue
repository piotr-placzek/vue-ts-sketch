<template>
  <div class="hello">
    <h1>{{ thisDoesntWork() }}</h1>
    <h1>{{ thisWorks() }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  
  self = this as any;

  thisWorks() {
    return this.self.$api.test();
  }

  thisDoesntWork() {
    return this.$api.test();
    /*
      ERROR in /tmp/vue-ts-plugin-issue/src/components/HelloWorld.vue(17,17):
      17:17 Property '$api' does not exist on type 'HelloWorld'.
      15 |   
      16 |   thisDoesntWork() {
    > 17 |     return this.$api.test();
         |                 ^
      18 |   }
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
