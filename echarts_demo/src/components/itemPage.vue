<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="less" scoped>
.item {
  height: 5.5rem;
  border: 1px solid blue;
  margin: 0.25rem;
  background-color: rgba(12, 130, 255, 0.85);
}
</style>
