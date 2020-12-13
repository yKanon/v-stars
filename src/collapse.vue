<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsCollapse'
  }
</script>

<style lang="scss" scoped>
  $border-radius: 4px;
  $border-color: #ddd;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>
