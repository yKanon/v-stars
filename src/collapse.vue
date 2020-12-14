<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'StarsCollapse',
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    props: {
      accordion: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    mounted () {
      this.eventBus.$emit(`update:selected`, this.value)
      this.eventBus.$on(`update:selected`, (name) => {
        this.$emit(`update:value`, name)
      })
    }
  }
</script>

<style lang="scss" scoped>
  $border-radius: 4px;
  $border-color: #ddd;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>
