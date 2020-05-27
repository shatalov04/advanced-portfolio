<template lang="pug">
  nav.tabs-component
    ul.tabs__list
      router-link(
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.href"
        v-slot="{href, route, navigate, isActive, isExactActive}"
        )
        li.tabs__item(
            :class="[ isExactActive && 'tabs__item_active']"
          )
          a.tabs__button(
            :data-text="tab.title"
            @click="navigate"
            :href="href"
            ) {{tab.title}}
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
    };
  },
  methods: {},
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

  &_active {
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
