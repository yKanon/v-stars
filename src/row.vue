<template>
  <div :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsRow',
    props: {
      gutter: {
        type: [Number, String]
      },
      span: {
        type: [Number, String]
      },
      align: {
        type: String
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
      },
      rowClass () {
        const { align } = this
        return [`row`, align && `align-${align}`]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    /*box-sizing: border-box;*/
    &.align-left {
      justify-content: flex-start;
    }

    &.align-right {
      justify-content: flex-end;
    }

    &.align-center {
      justify-content: center;
    }
  }
</style>
