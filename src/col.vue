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
  const validator = (value) => {
    const keys = Object.keys(value)
    let isValid = true
    keys.forEach(key => {
      let flag = ['span', 'offset'].includes(key)

      if (!flag) {
        isValid = false
      }
    })

    return isValid
  }

  export default {
    name: 'StarsCol',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String]
      },
      ipad: {
        type: Object,
        validator
      },
      narrowpc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widepc: {
        type: Object,
        validator
      }
    },
    data () {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass () {
        const { span, offset, ipad, pc, narrowpc, widepc } = this

        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...(ipad ? [`col-ipad-${ipad.span}`] : []),
          ...(pc ? [`col-pc-${pc.span}`] : []),
          ...(narrowpc ? [`col-narrowpc-${narrowpc.span}`] : []),
          ...(widepc ? [`col-widepc-${widepc.span}`] : []),
        ]
      },
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $class-prefix: col-;
  $class-ipad-prefix: col-ipad-;
  $class-narrowpc-prefix: col-narrowpc-;
  $class-pc-prefix: col-pc-;
  $class-widepc-prefix: col-widepc-;
  $offset-prefix: offset-;

  .col {
    height: 100px;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    /* ipad */
    @media screen and (min-width: 577px) {
      @for $n from 1 through 24 {
        &.#{$class-ipad-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }

    /* narrow-pc */
    @media screen and (min-width: 769px) {
      @for $n from 1 through 24 {
        &.#{$class-narrowpc-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }

    /* pc */
    @media screen and (min-width: 993px) {
      @for $n from 1 through 24 {
        &.#{$class-pc-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }

    /* widepc */
    @media screen and (min-width: 1200px) {
      @for $n from 1 through 24 {
        &.#{$class-widepc-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
    }
  }


</style>
