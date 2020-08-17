<template>
  <div class="row" :style="{marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}">
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
        console.log(vm)
      })
    },
    methods: {
      // getColValue () {
      //   const span = this.$refs.col.span
      //   console.log(span)
      // }
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
