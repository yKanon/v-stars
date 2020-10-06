<template>
  <div @click.stop="handleClick" class="popover">
    <div class="content-wrapper" v-if="visible" @click.stop>
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
      console.log('visible', this.visible);

      if (this.visible) {
        this.$nextTick(() => {
          const listener = () => {
            console.log('监听器内部');
            this.visible = false;
            console.log('visible', this.visible);
            document.removeEventListener('click', listener);
          };

          document.addEventListener('click', listener);
        });
      } else {
        console.log('vm 隐藏 popover');
      }
    },
  },
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
