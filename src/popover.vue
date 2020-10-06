<template>
  <div @click.stop="handleClick" class="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
          document.body.appendChild(contentWrapper);

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

  .content-wrapper {
    position: absolute;
    left: 0;
    bottom: 100%;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
