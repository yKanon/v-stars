<template>
  <button :class="{[`icon-${iconDirection}`]: true}" class="g-button">
    <svg aria-hidden="true" class="icon" v-if="icon">
      <use :xlink:href=`#s-${icon}`></use>
    </svg>
    <div class="message">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: ['icon', 'iconDirection']
  }
</script>

<style lang="scss">
  .g-button {
    height: var(--button-height);
    line-height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 .9em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .message {
      order: 2;
      margin: 0 0 0 .2em;
    }

    > .icon {
      order: 1;
    }

    &.icon-right {
      > .message {
        order: 1;
        margin: 0 .2em 0 0;
      }

      > .icon {
        order: 2;
      }
    }

    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }


</style>
