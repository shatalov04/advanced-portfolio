<template lang="pug">
  section.yells#yells
    .container.yells__container
      .section-title.yells__title
        h1.section-title__text Блок "Отзывы"
      .yells__content
        .yells__form
          form.form
            h2.form__title Новый отзыв
            .form__content
              .form__loader.yells__loader
                .photo-loader
                  button.button.button_user.yells__user-button(type="button")
                    Icon.button__icon.button__icon_man-user(name="man-user")
                    .button__caption Добавить фото
              .form__properties
                .form-property
                  .form-property__label Имя автора
                  input.input.form-property__input(
                    name="name"
                    placeholder="Введите имя")
                .form-property
                  .form-property__label Титул автора
                  input.input.form-property__input(
                    name="occupation"
                    placeholder="Введите титул")
                .form-property
                  .form-property__label Отзыв
                  textarea.input.input_textarea.form-property__input(
                    name="yell"
                    placeholder="Введите отзыв")
                .form__buttons
                  button(type="button").form__button.form__button_secondary Отмена
                  button(type="submit").form__button сохранить

        ul.section-list.yells__list
          li.section-list__item.yells__item
            NewItem(caption="Добавить отзыв")
          li.section-list__item.yells__item
            .yell
              .yell__header
                User.yell__user(
                  name="Владимир Сабанцев"
                  image="content/avatar-2.jpg"
                  occupation="Преподаватель"
                )
              .yell__info
                .yell__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
              .yell__bar
                .control-bar
                  IconedButton(
                    icon="pencil"
                    modificator="blue-icon"
                    caption="Редактировать"
                    isCaptionBefore=true
                  )
                  IconedButton(
                    icon="remove"
                    modificator="cancel"
                    caption="Удалить"
                    isCaptionBefore=true
                  )
          li.section-list__item.yells__item
            .yell
              .yell__header
                User.yell__user(
                    name="Ковальчук Дмитрий"
                    image="content/avatar-1.jpg"
                    occupation="Основатель Loftschool"
                  )
              .yell__info
                .yell__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .yell__bar
                .control-bar
                  IconedButton(
                    icon="pencil"
                    modificator="blue-icon"
                    caption="Редактировать"
                    isCaptionBefore=true
                  )
                  IconedButton(
                    icon="remove"
                    modificator="cancel"
                    caption="Удалить"
                    isCaptionBefore=true
                  )
          li.section-list__item.yells__item
            .yell
              .yell__header
                User.yell__user(
                  name="Владимир Сабанцев"
                  image="content/avatar-2.jpg"
                  occupation="Преподаватель"
                )
              .yell__info
                .yell__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
              .yell__bar
                .control-bar
                  IconedButton(
                    icon="pencil"
                    modificator="blue-icon"
                    caption="Редактировать"
                    isCaptionBefore=true
                  )
                  IconedButton(
                    icon="remove"
                    modificator="cancel"
                    caption="Удалить"
                    isCaptionBefore=true
                  )
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import NewItem from '../../components/new-item';
import User from '../../components/user';

export default {
  components: {
    Icon,
    IconedButton,
    NewItem,
    User,
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    ...mapMutations(),
  },
};
</script>
<style lang="postcss" scoped>
@import '../../styles/form.pcss';
@import '../../styles/section.pcss';
@import '../../styles/property-input.pcss';

//yells
.yells {
  background: $admin-bg-color;
  padding-bottom: 50px;
}
//prettier-ignore
.yells__container {
  width: 1200Px;
}
.yells__title {
  padding: 60px 0;
}
.yells__content {
}
.yells__form {
}
.yells__loader {
  background: white;
  width: 230px;
}
.yells__list {
  margin-right: -20px;
  margin-top: 20px;
}
.yells__item {
  width: calc((100% / 3) -20px);
  margin-right: 20px;
  margin-bottom: 20px;
  background: white;
  box-shadow: var(--form-boxshadow);
}
.yells__user-button {
  flex-direction: column;
}
.yells__add-button {
  flex-direction: column;
}
.yells__new {
  height: 100%;
  width: 100%;
  background: $links-color;
  background: var(--bg-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & .button__icon_plus {
    width: 150px;
    height: 150px;
    padding: 64px;
    border: 2px solid white;
    color: white;
    background: transparent;
    margin-bottom: 20px;
  }
  & .button__caption {
    width: 50%;
    font-weight: 600;
    color: white;
    line-height: 30px;
  }
}

//photo-loader
.photo-loader {
  display: flex;
  align-items: center;
  justify-content: center;

  & .button__icon_man-user {
    overflow: hidden;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    padding: 15px;
    color: white;
    background: $admin-loader-color;
    margin-bottom: 20px;
  }
  & .button__caption {
    font-weight: 600;
    color: $links-color;
    line-height: 30px;
  }
}

//work
.yell {
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.yell__header {
}
.yell__user {
  margin-bottom: 20px;
}
.yell__info {
}
.yell__desc {
  margin-bottom: 20px;
}
.yell__bar {
  margin-top: auto;
}
</style>
