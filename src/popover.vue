<template>
  <div @click="handleClick" class="popover">
    <div class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsPopover',
    data () {
      return {
        visible: false,
        random: 0,
      }
    },
    mounted () {
      this.random = parseInt(Math.random() * 10)
    },
    methods: {
      handleClick () {
        console.log(this.random)
        this.visible = !this.visible
      }
    }
  }
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
      box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    }
  }
</style>
