<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsContainer'
  }
</script>

<style lang="scss" scoped>
  .container {
    flex-grow: 1;
  }
</style>
