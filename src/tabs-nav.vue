<template>
  <div class="tabs-nav">
    <slot></slot>
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: "StarsTabsNav",
};
</script>

<style scoped>
.tabs-nav {
}
</style>
