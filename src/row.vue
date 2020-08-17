<template>
  <div :style="rowStyle" class="row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    mounted () {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter
      })
    },
    computed: {
      rowStyle () {
        const { gutter } = this
        return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    box-sizing: border-box;
    margin: 0 -10px;
  }
</style>
