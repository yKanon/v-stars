<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line" v-show="visible"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarsTabsNav',
    inject: ['eventBus'],
    data () {
      return {
        visible: false
      }
    },
    mounted () {
      this.eventBus.$on('update:selected', (name, itemVm) => {
        let { width, left } = itemVm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.transform = `translateX(${left}px)`
        this.visible = true
      })
    },
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $border-bottom-color: blue;
  .tabs-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: $tab-height;
    position: relative;

    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $border-bottom-color;
      transition: all .3s;
    }

    > .action-wrapper {
      margin-left: auto;
    }
  }
</style>
