<template lang="pug">
  .admin
    .admin__header
      .container.admin-container
        header.header
          .header__bar
            .bar
              .user.bar__user
                .avatar.user__avatar
                .user__name Максим Шаталов
              .bar__title Панель администрирования
              a(href="#").bar__link Выйти
          .header__nav
            nav.nav
              ul.nav__list
                li.nav__item(v-for="item in sections" :key="item.id")
                  a.nav__link(
                    href="#") {{item.title}}
                    //- @click='handleNavClick'
    section.about#about
      .container.about__container
        .section-title.about__title
          h1.section-title__text Блок "{{sections[0].title}}"
          button.button.button_add
            SvgIcon(className="button__icon button__icon_plus" name="plus")
            .button__caption Добавить группу
        .about__content
          ul.section-list.about__list
            li.section-list__item.about__item
              .skill-group.skill-group_new
                .skill-group__header
                  .property.property_title
                    input.input.input_title(placeholder="Название новой группы")
                    .edit-control.active
                       SvgIcon(className="button__icon button__icon_edit" name="pencil")
                       SvgIcon(className="button__icon button__icon_apply" name="tick")
                       SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                .skill-group__footer
                  .property-row.property-row_new
                      input.input(placeholder="Новый навык")
                      input.input.input_percentage(value="100")
                      button.button.button_add
                        SvgIcon(
                          className="button__icon button__icon_plus skill-group__add-icon"
                          name="plus")
            li.section-list__item.about__item
              .skill-group
                .skill-group__header
                  .property.property_title
                    input.input.input_title(placeholder="Название новой группы" value="Workflow")
                    .edit-control.active
                       SvgIcon(className="button__icon button__icon_edit" name="pencil")
                       SvgIcon(className="button__icon button__icon_apply" name="tick")
                       SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                  ul.properties
                    li.property-row.properties__item
                      input.input(placeholder="Новый навык" value="Git")
                      input.input.input_percentage(value="95")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      input.input(placeholder="Новый навык" value="Terminal")
                      input.input.input_percentage(value="90")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      input.input(placeholder="Новый навык" value="Webpack")
                      input.input.input_percentage(value="50")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__footer
                  .property-row.property-row_new
                      input.input(placeholder="Новый навык")
                      input.input.input_percentage(value="100")
                      button.button.button_add
                        SvgIcon(
                          className="button__icon button__icon_plus skill-group__add-icon"
                          name="plus")
            li.section-list__item.about__item
              .skill-group
                .skill-group__header
                  .property.property_title
                    input.input.input_title(placeholder="Название новой группы" value="Frontend")
                    .edit-control
                       SvgIcon(className="button__icon button__icon_edit" name="pencil")
                       SvgIcon(className="button__icon button__icon_apply" name="tick")
                       SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                  ul.properties
                    li.property-row.properties__item
                      input.input(placeholder="Новый навык" value="Html5")
                      input.input.input_percentage(value="95")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item.active
                      input.input(placeholder="Новый навык" value="CSS3")
                      input.input.input_percentage(value="90")
                      .edit-control.active
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      input.input(placeholder="Новый навык" value="JavaScript")
                      input.input.input_percentage(value="50")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__footer
                  .property-row.property-row_new
                    input.input(placeholder="Новый навык")
                    input.input.input_percentage(value="100")
                    button.button.button_add
                      SvgIcon(
                        className="button__icon button__icon_plus skill-group__add-icon"
                        name="plus")

    section.works#works
      .container.works__container
        .section-title.works__title
          h1.section-title__text Блок "{{sections[1].title}}"
        .works__content
          .works__form
            form.form
              .form__title
              .form__content
                .form__loader
                  .loader
                    .loader__caption Перетащите или загрузите изображение
                    button.loader__button.form__button загрузить
                .form__inputs
                  .form-input
                    .form-input__label Название
                    input.form-input(name="name")
                  .form-input
                    .form-input__label Ссылка
                    input.form-input(name="link")
                  .form-input
                    .form-input__label Описание
                    textarea.form-input.form-input_textarea(name="description")
                  .tags-editor
                    .form-input__label Добавление тега
                    input.form-input(name="tags" placeholder="Введите теги через запятую")
                    ul.tags-editor__list
                      li.tags-editor__item
                        .tags-editor__text HTML5
                        SvgIcon(
                          className="button__icon button__icon_remove tags-editor__remove-icon"
                          name="remove")
                      li.tags-editor__item
                        .tags-editor__text Vue
                        SvgIcon(
                          className="button__icon button__icon_remove tags-editor__remove-icon"
                          name="remove")
                  .form__buttons
                    button.form__button.form__button_secondary Отмена
                    submit.form__button сохранить

          ul.section-list.works__list
            li.section-list__item.works__item
              button.button.button_add.work__add-button
                SvgIcon(className="button__icon button__icon_plus" name="plus")
                .button__caption Добавить работу
            li.section-list__item.works__item
              .work
                .work__header
                  img.work__image(src="../images/content/work-1.jpg")
                  .tags
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
                    button.button.button_edit
                      .button__caption Редактировать
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")
            li.section-list__item.works__item
              .work
                .work__header
                  img.work__image(src="../images/content/work-2.jpg")
                  .tags
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
                    button.button.button_edit
                      .button__caption Редактировать
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")

</template>

<script>
import SvgIcon from './components/SvgIcon.vue';

export default {
  data() {
    return {
      sections: [
        {
          id: 'about',
          title: 'Обо мне',
        },
        {
          id: 'works',
          title: 'Главная',
        },
        {
          id: 'yells',
          title: 'Отзывы',
        },
      ],
    };
  },
  components: { SvgIcon },
  created() {
  },
};
</script>

<style lang="postcss" >
  .button__icon {
    cursor: pointer;
    width:32px;
    height:32px;
    padding: 8px;
  }
</style>
