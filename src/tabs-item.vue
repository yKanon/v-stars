<template>
  <div :class="classes" :data-name="name" @click="onClick" class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StarsTabsItem',
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      name: {
        type: String | Number,
        required: true,
      },
    },
    data () {
      return {
        active: false,
      }
    },
    computed: {
      classes () {
        return {
          active: this.active,
          disabled: this.disabled
        }
      },
    },
    methods: {
      onClick () {
        if (this.disabled) return
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      },
    },
    created () {
      this.eventBus && this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name
      })
    },
  }
</script>

<style lang="scss" scoped>
  $color: blue;
  $disabled-color: grey;
  .tabs-item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 0 1em;
    height: 100%;
    cursor: pointer;

    &.active {
      color: $color;
    }

    &.disabled {
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>
