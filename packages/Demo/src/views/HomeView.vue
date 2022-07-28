<template>
  <div class="home">
    <div class="home__item1">11</div>
    <div class="home__item2">22</div>
    <div class="home__item3">33</div>
    <div class="home__item4">44</div>
    <div v-for="(item, index) in data.list" :key="index">
      <div>名字: {{ item.name }}</div>
      <div>年龄: {{ item.age }}</div>
    </div>
  </div>
</template>

<script>
import { getUsers } from "../api";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const data = reactive({
      list: [],
    });
    onMounted(() => {
      getUsers().then((res) => {
        console.log(res);
        data.list = res.data;
      });
    });
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 200px;
  height: 200px;
  background: rgba(#000, 0.4);
  color: $color-primary;
  @include box-center(center, center);
}
</style>
