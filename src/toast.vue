<template>
  <div :class="toastClasses" class="wrapper">
    <div class="toast" ref="toast">
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
        type: [Boolean, Number],
        default: 5,
        validator (value) {
          return value === false || typeof value === 'number'
        }
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
        this.$el.remove()
        this.$emit('close')
        this.$destroy()
      },
      onAutoClose () {
        if (this.autoClose) {
          this.timer = setTimeout(this.close, this.autoClose * 1000)
        }
      },
      updateStyle () {
        let closeButtonElement = this.$refs.closeButton
        let toastElement = this.$refs.toast
        this.$nextTick(function() {
          closeButtonElement.style.height = `${toastElement.getBoundingClientRect().height}px`
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


<style lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-background-color: rgba(0, 0, 0, 0.75);
  $toast-radius: 4px;

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    $animation-duration: 300ms;

    &.position-top {
      top: 0;

      .toast {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animation-duration;
      }
    }

    &.position-bottom {
      bottom: 0;

      .toast {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animation-duration;
      }
    }

    &.position-middle {
      top: 50%;
      transform: translate(-50%, -50%);

      .toast {
        animation: fade-in $animation-duration;
      }
    }
  }

  .toast {
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-min-height;

    display: flex;
    align-items: center;
    background-color: $toast-background-color;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: #eeeeee;
    border-radius: $toast-radius;
    padding: 0 16px;

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
  }
</style>
