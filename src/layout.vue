<template>
  <div
    :class="layoutClasses"
    class="layout"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsLayout',
    data () {
      return {
        layoutClasses: {
          hasSider: false
        }
      }
    },
    mounted () {
      const {
        $children,
        layoutClasses,
      } = this

      $children.forEach(child => {
        if (child.$options.name === 'StarsSider') {
          layoutClasses.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }


</style>
