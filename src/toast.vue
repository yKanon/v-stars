<template>
  <div class="toast" ref="wrapper">
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
    methods: {
      onClickClose () {
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback(this)
        }
      },
      close () {
        this.$el.remove()
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

  .toast {
    font-size: $font-size;
    line-height: 1.8;
    /*height: max-content;*/
    /*<!--min-height: $toast-min-height;-->*/

    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: $toast-background-color;
    border-radius: $toast-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    color: #eeeeee;
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
