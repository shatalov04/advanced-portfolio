<template lang="pug">
  .icon-wrapper
    svg(:viewBox="viewBox" preserveAspectRatio="none").icon
      use(:xlink:href="src")
</template>

<script>
export default {
  data() {
    return {
      icon: {},
    };
  },
  created() {
    this.icon = require(`../../images/icons/${this.name}.svg`).default;
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return this.icon.url;
    },
    viewBox() {
      return this.icon.viewBox;
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon-wrapper {
  max-width: 150px;
  max-height: 150px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 100%;
  height: 100%;
  display: block;
  fill: currentColor;
}
</style>
