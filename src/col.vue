<template>
  <div
    :class="colClass"
    :style="colStyle"
    class="col"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsCol',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String]
      }
    },
    data () {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass () {
        const { span, offset } = this
        return [span && `col-${span}`, offset && `offset-${offset}`]
      },
      paddingSide () {
        return this.gutter / 2 + 'px'
      },
      colStyle () {
        return {
          paddingLeft: this.paddingSide,
          paddingRight: this.paddingSide
        }
      }
      ,
    }
  }
</script>

<style lang="scss" scoped>
  $class-prefix: col-;
  $offset-prefix: offset-;

  .col {
    height: 100px;
    width: 50%;

    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }

      &.#{$offset-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

</style>
