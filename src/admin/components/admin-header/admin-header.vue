<template lang="pug">
  header.header
    .header__bar
      .container.header__container
        Headline
          User.header__user(
            name="Максим Шаталов"
            image="content/avatar.jpg"
          )
    .header__nav
      .container.header__container
          Tabs.header_nav
</template>

<script>
import User from '../user';
import Headline from '../headline';
import Tabs from '../tabs';

export default {
  components: {
    User,
    Headline,
    Tabs,
  },
};
</script>

<style lang="postcss" scoped>
// prettier-ignore
.header__container {
  width: 1200Px;
}
.header_nav {
  height: 80px;
}

.header {
}
.header__bar {
  background: $main-color;
  background: linear-gradient(90deg, $header-color 0%, $header-alt-color 100%);
  color: white;
}
.header__nav {
}
</style>
