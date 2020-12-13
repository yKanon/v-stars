<template>
  <div class="collapse-item">
    <div @click="open=!open" class="title">{{title}}</div>
    <div class="content" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarsCollapseItem',
    props: {
      title: {
        type: String,
        required: true
      },
      name: {},
      disabled: {}
    },
    data () {
      return {
        open: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-radius: 4px;
  $border-color: #ddd;
  .collapse-item {
    > .title {
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      padding: 0 .5em;
      border: 1px solid $border-color;
      min-height: 32px;
      display: flex;
      align-items: center;
    }

    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }

    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }

    > .content {
      padding: .5em;
    }
  }
</style>
