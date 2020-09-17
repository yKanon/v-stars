<template>
  <div class="tabs-nav">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarsTabsNav",
  inject: ["eventBus"],
  created() {
    console.log(`eventBus`, this.eventBus);
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid red;
  height: $tab-height;
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>
