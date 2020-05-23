<template lang="pug">
section.works#works
  .container.works__container
    .section-title.works__title
      h1.section-title__text Блок "Работы"
    .works__content
      .works__form
        form.form
          h2.form__title Редактирование работы
          .form__content
            .form__loader
              .loader
                .loader__caption Перетащите или загрузите изображение
                button(
                  type="button"
                ).loader__button.form__button загрузить
            .form__properties
              .form-property
                .form-property__label Название
                input.input.form-property__input(
                  name="name"
                  placeholder="Введите название работы")
              .form-property
                .form-property__label Ссылка
                input.input.form-property__input(
                  name="link"
                  placeholder="Введите ссылку на работу")
              .form-property
                .form-property__label Описание
                textarea.input.input_textarea.form-property__input(
                  name="description"
                  placeholder="Введите описание работы")
              .tags-editor
                .form-property
                  .form-property__label Добавление тегов
                  input.input(
                    name="tags"
                    placeholder="Введите теги через запятую")
                ul.tags-editor__list
                  li.tags-editor__item
                    .tags-editor__text HTML5
                    IconedButton(
                      icon="remove"
                      modificator="close"
                    )
                  li.tags-editor__item
                    .tags-editor__text Vue
                    IconedButton(
                      icon="remove"
                      modificator="close"
                    )
              .form__buttons
                button(type="button").form__button.form__button_secondary Отмена
                button(type="submit").form__button сохранить

      ul.section-list.works__list
        li.section-list__item.works__item
          NewItem(caption="Добавить работу")
        li.section-list__item.works__item
          .work
            .work__header
              img.work__image(src="../../../images/content/work-1.jpg")
              .tags.work__tags
                ul.tags__list
                  li.tags__item HTML5
                  li.tags__item CSS3
                  li.tags__item Javascript
            .work__info
              h2.work__title Сайт школы образования
              .work__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
              a.work__link(href="https://loftschool.ru" target="_blank") https://loftschool.ru
            .work__bar
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
        li.section-list__item.works__item
          .work
            .work__header
              img.work__image(src="../../../images/content/work-2.jpg")
              .tags.work__tags
                ul.tags__list
                  li.tags__item HTML5
                  li.tags__item CSS3
                  li.tags__item Javascript
            .work__info
              h2.work__title Сайт школы образования
              .work__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
              a.work__link(href="https://loftschool.ru" target="_blank") https://loftschool.ru
            .work__bar
              .control-bar
                button.button.button_edit.control-bar__button(type="button")
                  .button__caption Редактировать
                  Icon.button__icon.button__icon_edit(name="pencil")
                button.button.button_remove.control-bar__button(type="button")
                  .button__caption Удалить
                  Icon.button__icon.button__icon_remove(name="remove")
          li.section-list__item.works__item
            .work
              .work__header
                img.work__image(src="../../../images/content/work-2.jpg")
                .tags.work__tags
                  ul.tags__list
                    li.tags__item HTML5
                    li.tags__item CSS3
                    li.tags__item Javascript
              .work__info
                h2.work__title Сайт школы образования
                .work__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
                a.work__link(href="https://loftschool.ru" target="_blank") https://loftschool.ru
              .work__bar
                .control-bar
                  button.button.button_edit.control-bar__button(type="button")
                    .button__caption Редактировать
                    Icon.button__icon.button__icon_edit(name="pencil")
                  button.button.button_remove.control-bar__button(type="button")
                    .button__caption Удалить
                    Icon.button__icon.button__icon_remove(name="remove")

</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import NewItem from '../../components/new-item';

export default {
  components: {
    Icon,
    IconedButton,
    NewItem,
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

//works
.works {
  background: $admin-bg-color;
  padding-bottom: 50px;
}
// prettier-ignore
.works__container {
  width: 1200Px;
}
.works__title {
  padding: 60px 0;
}
.works__content {
}

.works__form {
}

.works__list {
  margin-right: -20px;
  margin-top: 20px;
}
.works__item {
  width: calc((100% / 3) -20px);
  margin-right: 20px;
  margin-bottom: 20px;
  background: white;
  box-shadow: var(--form-boxshadow);
}

//loader
.loader {
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 2px $text-color50 dashed;
}
.loader__caption {
  max-width: 50%;
  font-weight: 600;
  color: $text-color50;
  margin-bottom: 15px;
}
.loader__button {
}

//tags-editor
.tags-editor {
  padding-bottom: 20px;
}
.tags-editor__list {
  display: flex;
  flex-wrap: wrap;
}
.tags-editor__item {
  display: flex;
  align-items: center;
  margin-right: 15px;
  background: $tag-bg-color;
  border-radius: 20px;
  padding-left: 15px;
}
.tags-editor__text {
}

//tags
.tags {
}
.tags__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.tags__item {
  padding: 4px 15px;
  border-radius: 16px;
  background: $tag-bg-color;
  margin-right: 15px;
  margin-bottom: 15px;
}

//work
.work {
}
.work__header {
  position: relative;
}
.work__image {
}
.work__tags {
  width: 100%;
  position: absolute;
  left: 100%;
  font-size: 14px;
  transform: translate(-100%, -100%);
  opacity: 0.7;
}
.work__info {
  padding: 20px;
}
.work__title {
  font-weight: 700;
  margin-bottom: 15px;
}
.work__desc {
  font-weight: 600;
  color: $text-color70;
  margin-bottom: 15px;
}
.work__link {
  color: $links-color;
  font-weight: 600;
}
</style>
