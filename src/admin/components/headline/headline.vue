<template lang="pug">
  .headline-component
    .content
      slot
    .headline__title Панель администрирования
    button(
      type="button"
      @click="$emit('logout')"
    ).headline__btn Выйти
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.headline-component {
  height: 80px;
  display: flex;
  align-items: center;
}

.headline__title {
  opacity: 0.7;
}
.headline__btn {
  opacity: 0.7;
  margin-left: auto;
  text-decoration: underline;
  transition: $delay;
  padding: 10px;
  color: inherit;
  &:hover {
    opacity: 1;
  }
}
.content {
  margin-right: 20px;
}
</style>
