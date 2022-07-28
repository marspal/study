<template>
  <div class="c-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CMain",
};
</script>
<style scoped lang="scss">
@include b(c-main) {
  overflow: auto;
  flex: 1;
}
</style>
