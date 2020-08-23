<template>
   <div :class="toastClasses" class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default"></div>
    </div>

    <span
      @click="onClickClose"
      class="close"
      ref="closeButton"
      v-if="closeButton.text"
    >
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'StarsToast',
    props: {
      position: {
        type: String,
        default: 'top',
        validator (value) {
          return ['top', 'bottom', 'middle'].indexOf(value) >= 0
        }
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 500
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: '关闭',
            callback: () => {}
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
    },
    data () {
      return {
        timer: null
      }
    },
    computed: {
      toastClasses () {
        return { [`position-${this.position}`]: true }
      }
    },
    methods: {
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      },
      close () {
        console.log(`close`)
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onAutoClose () {
        if (this.autoClose) {
          this.timer = setTimeout(this.close, this.autoCloseDelay * 1000)
        }
      },
      updateStyle () {
        this.$nextTick(() => {
          // console.log(this.$parent)
          this.$refs.closeButton.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      }
    },
    mounted () {
      this.updateStyle()
      this.onAutoClose()
    },
    beforeDestroy () {
      clearTimeout(this.timer)
    }
  }
</script>


<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-background-color: rgba(0, 0, 0, 0.75);
  $toast-radius: 4px;

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .toast {
    animation: fade-in 1s;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;

    display: flex;
    align-items: center;
    position: fixed;
    background-color: $toast-background-color;
    border-radius: $toast-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: #eeeeee;
    padding: 0 16px;
    left: 50%;

    .message {
      padding: 8px 0;
    }

    > .close {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding-left: 16px;
      margin-left: 16px;
      border-left: 1px solid #666666;
    }

    &.position-top {
      top: 0;
      transform: translateX(-50%);
    }

    &.position-bottom {
      bottom: 0;
      transform: translateX(-50%);
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
