<template>
  <div :class="[span && `col-${span}`, offset && `offset-${offset}`]"
       :style="{paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}"
       class="col"
  >
    <div style="border: 1px solid green; height: 100%">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StarsCol',
    props: {
      span: {
        type: [Number, String],
        validator (value) {
          return parseInt(value) <= 24
        }
      },
      offset: {
        type: [Number, String]
      }
    },
    // mounted () {
    //   console.log(this.gutter)
    // },
    data() {
      return {
        gutter: 0
      }
    },
  }
</script>

<style lang="scss" scoped>
  $class-prefix: col-;
  $offset-prefix: offset-;

  .col {
    height: 100px;
    width: 50%;
    /*padding: 0 10px;*/
    /*margin: 0 10px;*/

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
