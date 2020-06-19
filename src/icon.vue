<template>
  <svg aria-hidden="true" class="s-icon">
    <use :xlink:href=`#s-${name}`></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    name: 'icon',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  .s-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
