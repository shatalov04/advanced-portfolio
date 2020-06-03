<template lang="pug">
  .context-tooltip
    .context-tooltip__message {{errorMessage}}
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/property-input.pcss';
.context-tooltip {
  background: currentColor;
  text-align: center;
  &:after {
    content: '';
    background: currentColor;
    position: absolute;
    width: 15px;
    height: 15px;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 9px) rotate(45deg);
  }
}
.context-tooltip__message {
  padding: 2px 15px;
  color: white;
}
</style>
