<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'StarsCollapse',
    provide() {
      if (this.accordion) {
        return {
          eventBus: new Vue()
        }
      }
    },
    props: {
      accordion: {
        type: Boolean,
        default: false
      }
    }
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
