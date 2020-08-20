<template>
  <transition name="slide">
    <div :style="{width}" class="sider" v-if="visible">
      <slot></slot>
      <button @click="handleClick">X</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'StarsSider',
    props: {
      width: {
        type: String,
        default: '200px'
      }
    },
    data () {
      return {
        visible: true
      }
    },
    methods: {
      handleClick () {
        this.visible = false
      },
    },
    // mounted () {
    //   document.querySelector('.sider').style.marginLeft = this.width
    // }
  }
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;

    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: margin .5s ease;
  }

  .slide-enter,
  .slide-leave-to {
     margin-left: -200px
    /*transform-origin: left;*/
    /*transform: scaleX(0);*/
  }
</style>
