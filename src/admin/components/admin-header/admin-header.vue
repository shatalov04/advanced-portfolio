<template lang="pug">
  header.header
    .header__bar
      .section-container.header__container
        Headline(@logout="handleLogout")
          User.header__user(
            name="Максим Шаталов"
            :image="imagePath"
          )
    .header__nav
      .section-container.header__container
          Tabs.header_nav
</template>

<script>
import { mapActions } from 'vuex';
import User from '../user';
import Headline from '../headline';
import Tabs from '../tabs';

export default {
  data() {
    return {
      imagePath: '',
    };
  },
  components: {
    User,
    Headline,
    Tabs,
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    handleLogout() {
      this.logout();
      this.$router.replace('/login');
    },
  },
  created() {
    const requiredImage = require('../../../images/content/avatar.jpg');
    // eslint-disable-next-line no-param-reassign
    this.imagePath = requiredImage;
  },
};
</script>

<style lang="postcss" scoped>
@import '../../../styles/mixins.pcss';

// prettier-ignore
.header__container {
    margin: 0 auto;
  max-width: 1200Px;
  width: 95%;

  @include desktop {
    max-width: 1080Px;
  }

  @include tablet {
    max-width: 688Px;
    width: 90%;
  }

  @include phone {
    width: 85%;
  }
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
