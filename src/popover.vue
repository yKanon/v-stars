<template>
  <div @click.stop="handleClick" class="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
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
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;

      if (this.visible) {
        this.$nextTick(() => {
          const contentWrapper = this.$refs.contentWrapper;
          const triggerWrapper = this.$refs.triggerWrapper;

          let {
            width,
            height,
            top,
            left,
          } = triggerWrapper.getBoundingClientRect();

          document.body.appendChild(contentWrapper);

          contentWrapper.style.left = left + window.scrollX + 'px';
          contentWrapper.style.top = top + window.scrollY + 'px';

          const listener = () => {
            this.visible = false;
            document.removeEventListener('click', listener);
          };

          document.addEventListener('click', listener);
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
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
