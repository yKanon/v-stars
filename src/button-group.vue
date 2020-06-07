<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'button-group',
    mounted () {
      const children = this.$el.children
      for (const node of children) {
        if (!node) {
          console.warn(`请给按钮组传入参数~`)
        }

        const nodeName = node.nodeName.toLowerCase()
        if (node && nodeName !== 'button') {
          console.warn(`按钮组期待子节点为button标签，却接收到${nodeName}`)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .s-button-group {
    display: inline-flex;
    vertical-align: middle;

    .s-button {
      border-radius: 0;

      &:not(:first-child) {
        margin-left: -1px;
      }

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        z-index: 2;
        /*position: relative;*/
        /*border-color: greenyellow;*/
      }
    }
  }
</style>
