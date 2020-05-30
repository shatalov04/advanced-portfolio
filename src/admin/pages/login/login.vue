<template lang="pug">
section.authorization#authorization
  .authorization__container
    .authorization__form
      form.form(@submit.prevent="loginUser")
        h1.form__title Авторизация
        .form__properties
          .form-property
            label.form-property__label(for="login") Логин
            Icon.input__icon( name="user")
            input.input.form-property__input(
              v-model="user.name"
              name="login"
              type="text"
              placeholder="Введите логин"
              required)
          .form-property
            label.form-property__label(for="password") Пароль
            Icon.input__icon(name="key")
            input.input.form-property__input(
              v-model="user.password"
              name="password"
              type="password"
              placeholder="Введите пароль"
              required)
        .form__buttons.form__buttons_center
          button(type="submit").form__button.form__button_auth отправить
        IconedButton.authorization__remove-button(
          icon="remove"
          modificator="close"
          )
</template>

<script>
import { mapActions } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import $axios from '../../shared/requests';

export default {
  data() {
    return {
      user: {
        name: '',
        password: '',
      },
    };
  },
  components: {
    Icon,
    IconedButton,
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    async loginUser() {
      try {
        const {
          data: { token },
        } = await $axios.post('/login', this.user);

        await this.login(token);
        this.$router.replace('/');
      } catch (error) {
        const errorData = error.response.data;

        console.error(errorData.error || errorData.message);
      }
    },
  },
};
</script>
<style lang="postcss" scoped>
@import '../../styles/form.pcss';
@import '../../styles/property-input.pcss';

.authorization {
  background: url(../../../images/content/welcome-background.jpg) no-repeat
    top/cover;
}
.authorization__container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $text-color;
  opacity: 0.9;
}
.authorization__form {
  position: relative;

  width: 564px;
  & .form {
    padding: 20px 80px 40px;
  }
  & .form__properties {
    width: 100%;
    margin: 0;
  }
  & .form__title {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    border: 0;
  }

  & .input {
    padding-left: 40px;
    padding-bottom: 15px;
  }
  & .form-property__label {
    padding-left: 40px;
    padding-bottom: 15px;
  }
}
.authorization__remove-button {
  color: $text-color;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
