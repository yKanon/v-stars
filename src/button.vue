<template>
  <button
    :class="{[`icon-${iconPosition}`]: true}"
    class="s-button"
    @click="$emit('click')"
  >
    <s-icon
      :name="icon"
      class="icon"
      v-if="icon && !loading"
    ></s-icon>
    <s-icon
      class="icon loading"
      name="loading"
      v-if="loading"
    ></s-icon>
    <div class="message">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    // props: ['icon', 'iconDirection']
    components: {
      's-icon': Icon
    },
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  @keyframes loading-rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .s-button {
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

    .loading {
      animation: loading-rotate 2s infinite linear;
    }
  }
</style>
