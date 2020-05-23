<template lang="pug">
  nav.tabs-component
    ul.tabs__list
      li.tabs__item(
        v-for="tab in tabs"
        :key="tab.id"
        :class="{'active' : activeTabId === tab.id}"
        @click="handleChange(tab)"
        )
        router-link.tabs__button(
          :data-text="tab.title"
          :to="tab.href") {{tab.title}}
</template>

<script>
const tabs = [
  {
    id: 0,
    title: 'Обо мне',
    href: '/',
  },
  {
    id: 1,
    title: 'Работы',
    href: '/works',
  },
  {
    id: 2,
    title: 'Отзывы',
    href: '/yells',
  },
];

export default {
  data() {
    return {
      tabs,
      activeTabId: 0,
    };
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id;
      this.$emit('tabChanged', tab);
    },
  },
};
</script>

<style lang="postcss" scoped>
.tabs-component {
}
.tabs__list {
  height: 100%;
  display: flex;
  align-items: center;
}
.tabs__item {
  position: relative;
  transition: $delay;

  &.active {
    color: $main-color;
    :before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 3px;
      background: $main-color;
    }
  }
}
.tabs__button {
  padding: 26px;
  display: block;
  transition: $delay;
  font-weight: 600;
  color: inherit;
  &:hover {
    color: $main-color;
  }
}
</style>
