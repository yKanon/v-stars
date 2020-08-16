<template>
  <div class="col" :class="[`col-${span}`]"></div>
</template>

<script>
  export default {
    name: 'StarsCol',
    props: {
      span: {
        type: [Number, String]
      }
    }
  }
</script>

<style lang="scss" scoped>
  $class-prefix: col-;

  .col {
    height: 100px;
    width: 50%;
    background-color: grey;
    border: 1px solid green;

    @for $n from 1 through 24
    {
      &.#{$class-prefix}#{$n}
      {
        width:($n / 24) * 100%;
      }
    }
  }

</style>
