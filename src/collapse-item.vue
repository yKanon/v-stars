<template>
  <div class="collapse-item">
    <div @click="toggle" class="title">{{title}}</div>
    <div class="content" v-show="isOpen">
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
      name: {
        type: String
      }
    },
    inject: ['eventBus'],
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      close () {
        this.isOpen = false
      },
      open () {
        this.isOpen = true
      },
      toggle () {
        if (this.isOpen) {
          this.close()
        } else {
          this?.eventBus?.$emit('update:selected', this.name)
        }
      }
    },
    mounted () {
      this?.eventBus?.$on('update:selected', (name) => {
        if (name !== this.name) {
          this.close()
        } else {
          this.open()
        }
      })
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

    /*&:last-child {
      > .title {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        margin-bottom: -1px;
      }
    }*/

    > .content {
      padding: .5em;
    }
  }
</style>
