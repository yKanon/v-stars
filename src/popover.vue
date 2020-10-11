<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-show="visible"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarsPopover',
  data() {
    return { visible: false, timer: null };
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1;
      },
    },
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    close() {
      this.visible = false;
      document.removeEventListener('click', this.onClickDocument);
      this.timer = 0;
      clearTimeout(this.timer);
    },
    open() {
      this.visible = true;
      this.$nextTick(this.positionPopper);
      // this.positionPopper();
      this.timer = setTimeout(() => {
        document.addEventListener('click', this.onClickDocument);
      });
    },
    onClick(ev) {
      if (this.$refs.triggerWrapper.contains(ev.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    },
    // 定位 popper
    positionPopper() {
      const position = this.position;
      let { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);

      let { height: heightPopover } = contentWrapper.getBoundingClientRect();
      let { width, height, top, left } = triggerWrapper.getBoundingClientRect();

      switch (position) {
        case 'top':
          contentWrapper.style.left = left + window.scrollX + 'px';
          contentWrapper.style.top = top + window.scrollY + 'px';
          break;
        case 'bottom':
          contentWrapper.style.left = left + window.scrollX + 'px';
          contentWrapper.style.top = height + top + window.scrollY + 'px';
          break;
        case 'left':
          contentWrapper.style.left = left + window.scrollX + 'px';
          contentWrapper.style.top =
            top + window.scrollY + (height - heightPopover) / 2 + 'px';
          break;
        case 'right':
          contentWrapper.style.left = left + width + window.scrollX + 'px';
          contentWrapper.style.top =
            top + window.scrollY + (height - heightPopover) / 2 + 'px';
          break;
        default:
          break;
      }
    },
    onClickDocument(e) {
      // 点击区域在 popper 中时，不关闭 popper
      let flag =
        this.$refs.popover &&
        (this.$refs.contentWrapper.contains(e.target) ||
          this.$refs.contentWrapper === e.target);

      if (flag) return;
      this.close();
    },
  },
};
</script>

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: white;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
  padding: 0.5em 1em;
  max-width: 20em;
  word-wrap: break-word;
  ::before,
  ::after {
    content: '';
    display: block;
    border: 8px solid transparent;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    ::before,
    ::after {
      left: 10px;
    }
    ::before {
      top: 100%;
      border-top-color: black;
    }
    ::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    ::before,
    ::after {
      left: 10px;
    }
    ::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    ::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    ::before,
    ::after {
      transform: translateY(-50%);
      top: 50%;
    }
    ::before {
      border-left-color: black;
      left: 100%;
    }
    ::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    ::before,
    ::after {
      transform: translateY(-50%);
      top: 50%;
    }
    ::before {
      border-right-color: black;
      right: 100%;
    }
    ::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
