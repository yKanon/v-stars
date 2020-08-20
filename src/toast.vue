<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsToast'
  }
</script>


<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-background-color: rgba(0, 0, 0,  0.75);
  $toast-radius: 4px;

  .toast {
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;

    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background-color: $toast-background-color;
    border-radius: $toast-radius;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    color: #eeeeee;
    padding: 0 16px;
  }
</style>
