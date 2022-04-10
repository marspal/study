<template>
  <header>CSS 架构</header>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped>
header {
  width: 200px;
  height: 200px;
  background: rgba(#000, 0.4);
  color: #fff;
  @include box-center(center, center);
}
</style>
