<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "StarsTabs",
  props: {
    selected: {
      type: String,
      require: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((outer) => {
      if (outer.$options.name === "StarsTabsNav") {
        outer.$children.forEach((item) => {
          if (
            item.$options.name === "StarsTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>
