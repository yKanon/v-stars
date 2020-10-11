<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
      this.positionPopper();
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
      document.body.appendChild(this.$refs.contentWrapper);

      let {
        width,
        height,
        top,
        left,
      } = this.$refs.triggerWrapper.getBoundingClientRect();

      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
