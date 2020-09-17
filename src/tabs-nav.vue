<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarsTabsNav",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, itemVm) => {
      console.log(name);
      console.log(itemVm);
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$border-bottom-color: blue;
.tabs-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid red;
  height: $tab-height;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    width: 100px;
    border-bottom: 2px solid $border-bottom-color;
  }
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>
