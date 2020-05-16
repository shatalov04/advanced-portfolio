<template lang="pug">
  .admin
    .admin__header
        header.header
          .header__bar
            .container.admin__container
              .bar
                .user.bar__user
                  .avatar.user__avatar
                    img.avatar__img(src="../images/content/avatar.jpg")
                  .user__name Максим Шаталов
                .bar__title Панель администрирования
                a(href="#").bar__link Выйти
          .header__nav
            .container.admin__container
              nav.nav.admin__nav
                ul.nav__list
                  li.nav__item(v-for="item in sections" :key="item.id")
                    a.nav__link(
                      href="#") {{item.title}}
                      //- @click='handleNavClick'
    section.authorization#authorization
      .authorization__container
        .authorization__form
          form.form
            h1.form__title Авторизация
            .form__properties
              .form-property
                label.form-property__label(for="login") Логин
                SvgIcon(className="input__icon" name="user")
                input.input.form-property__input(
                  name="login"
                  type="text"
                  placeholder="Введите логин"
                  required)
              .form-property
                label.form-property__label(for="password") Пароль
                SvgIcon(className="input__icon" name="key")
                input.input.form-property__input(
                  name="password"
                  type="password"
                  placeholder="Введите пароль"
                  required)
            .form__buttons.form__buttons_center
              button(type="submit").form__button.form__button_auth отправить
            button.button.button_remove.authorization__remove-button(type="button")
              SvgIcon(className="button__icon button__icon_remove" name="remove")

    section.about#about
      .container.about__container
        .about__title
          .section-title
            h1.section-title__text.about__title-text Блок "{{sections[0].title}}"
          button.button.button_add.about__button(
            type="button"
          )
            SvgIcon(className="button__icon button__icon_plus" name="plus")
            .button__caption.about__button-caption Добавить группу
        .about__content
          ul.section-list.about__list
            li.section-list__item.about__item
              .skill-group.skill-group_new
                .skill-group__header
                  .property-row.property-row_title
                    .property.property_title
                      input.input.input_title(
                        name="title"
                        type="text"
                        placeholder="Название новой группы"
                        required)
                    .edit-control.active
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                .skill-group__footer
                  .property-row.property-row_new
                    .property
                      input.input.input_new(
                        name="title"
                        type="text"
                        placeholder="Новый навык"
                        required)
                    .property.property_percentage
                      input.input.input_percentage(
                        name="title"
                        type="text"
                        value="100"
                        required)
                    button.button.button_add(
                      type="button"
                    )
                      SvgIcon(
                        className="button__icon button__icon_plus skill-group__add-icon"
                        name="plus")
            li.section-list__item.about__item
              .skill-group
                .skill-group__header
                  .property-row.property-row_title
                    .property.property_title
                      input.input.input_title(
                        name="title"
                        type="text"
                        placeholder="Название новой группы"
                        value="Workflow"
                        required)
                    .edit-control.active
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                  ul.properties
                    li.property-row.properties__item
                      .property
                        input.input(
                        name="title"
                        type="text"
                        placeholder="Название навыка"
                        value="Git"
                        required)
                      .property.property_percentage
                        input.input.input_percentage(value="95")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      .property
                        input.input(placeholder="Новый навык" value="Teminal")
                      .property.property_percentage
                        input.input.input_percentage(value="90")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      .property
                        input.input(placeholder="Новый навык" value="Webpack")
                      .property.property_percentage
                        input.input.input_percentage(value="50")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                        .property
                          input.input(placeholder="Новый навык" value="Gulp")
                        .property.property_percentage
                          input.input.input_percentage(value="65")
                        .edit-control
                          SvgIcon(className="button__icon button__icon_edit" name="pencil")
                          SvgIcon(className="button__icon button__icon_trash" name="trash")
                          SvgIcon(className="button__icon button__icon_apply" name="tick")
                          SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__footer
                  .property-row.property-row_new
                    .property
                        input.input.input_new(placeholder="Новый навык")
                    .property.property_percentage
                        input.input.input_percentage(value="100")
                    button.button.button_add(
                      type="button"
                    )
                      SvgIcon(
                        className="button__icon button__icon_plus skill-group__add-icon"
                        name="plus")
            li.section-list__item.about__item
              .skill-group
                .skill-group__header
                  .property-row.property-row_title
                    .property.property_title
                      input.input.input_title(placeholder="Название новой группы" name="title" value="Frontend")
                    .edit-control.active
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__content
                  ul.properties
                    li.property-row.properties__item
                      .property
                        input.input(placeholder="Новый навык" value="HTML5")
                      .property.property_percentage
                        input.input.input_percentage(value="95")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      .property
                        input.input(placeholder="Новый навык" value="CSS3")
                      .property.property_percentage
                        input.input.input_percentage(value="90")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                    li.property-row.properties__item
                      .property
                        input.input(placeholder="Новый навык" value="Javascript")
                      .property.property_percentage
                        input.input.input_percentage(value="50")
                      .edit-control
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                        SvgIcon(className="button__icon button__icon_trash" name="trash")
                        SvgIcon(className="button__icon button__icon_apply" name="tick")
                        SvgIcon(className="button__icon button__icon_cancel" name="remove")
                .skill-group__footer
                  .property-row.property-row_new
                    .property
                        input.input.input_new(placeholder="Новый навык")
                    .property.property_percentage
                        input.input.input_percentage(value="100")
                    button.button.button_add(
                      type="button"
                    )
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
                        SvgIcon(
                          className="button__icon button__icon_remove tags-editor__remove-icon"
                          name="remove")
                      li.tags-editor__item
                        .tags-editor__text Vue
                        SvgIcon(
                          className="button__icon button__icon_remove tags-editor__remove-icon"
                          name="remove")
                  .form__buttons
                    button(type="button").form__button.form__button_secondary Отмена
                    button(type="submit").form__button сохранить

          ul.section-list.works__list
            li.section-list__item.works__item
              .works__new
                button.button.button_add.works__add-button(type="button")
                  SvgIcon(className="button__icon button__icon_plus" name="plus")
                  .button__caption Добавить работу
            li.section-list__item.works__item
              .work
                .work__header
                  img.work__image(src="../images/content/work-1.jpg")
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
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove.control-bar__button(type="button")
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")
            li.section-list__item.works__item
              .work
                .work__header
                  img.work__image(src="../images/content/work-2.jpg")
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
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove.control-bar__button(type="button")
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")
              li.section-list__item.works__item
                .work
                  .work__header
                    img.work__image(src="../images/content/work-2.jpg")
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
                        SvgIcon(className="button__icon button__icon_edit" name="pencil")
                      button.button.button_remove.control-bar__button(type="button")
                        .button__caption Удалить
                        SvgIcon(className="button__icon button__icon_remove" name="remove")

    section.yells#yells
      .container.yells__container
        .section-title.yells__title
          h1.section-title__text Блок "{{sections[2].title}}"
        .yells__content
          .yells__form
            form.form
              h2.form__title Новый отзыв
              .form__content
                .form__loader.yells__loader
                  .photo-loader
                    button.button.button_user.yells__user-button(type="button")
                      SvgIcon(className="button__icon button__icon_man-user" name="man-user")
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
              .yells__new
                button.button.button_add.yells__add-button(type="button")
                  SvgIcon(className="button__icon button__icon_plus" name="plus")
                  .button__caption Добавить отзыв
            li.section-list__item.yells__item
              .yell
                .yell__header
                  .user.yell__user
                    .avatar.user__avatar
                      img.avatar__img(src="../images/content/avatar-1.jpg")
                    .user__desc
                      .user__name Владимир Сабанцев
                      .user__caption Преподаватель
                .yell__info
                  .yell__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
                .yell__bar
                  .control-bar
                    button.button.button_edit.control-bar__button(type="button")
                      .button__caption Редактировать
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove.control-bar__button(type="button")
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")
            li.section-list__item.yells__item
              .yell
                .yell__header
                  .user.yell__user
                    .avatar.user__avatar
                      img.avatar__img(src="../images/content/avatar-1.jpg")
                    .user__desc
                      .user__name Ковальчук Дмитрий
                      .user__caption Основатель Loftschool
                .yell__info
                  .yell__desc Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .yell__bar
                  .control-bar
                    button.button.button_edit.control-bar__button(type="button")
                      .button__caption Редактировать
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove.control-bar__button(type="button")
                      .button__caption Удалить
                      SvgIcon(className="button__icon button__icon_remove" name="remove")
            li.section-list__item.yells__item
              .yell
                .yell__header
                  .user.yell__user
                    .avatar.user__avatar
                      img.avatar__img(src="../images/content/avatar-1.jpg")
                    .user__desc
                      .user__name Владимир Сабанцев
                      .user__caption Преподаватель
                .yell__info
                  .yell__desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque pariatur eius, maiores repellat, sint veniam quibusdam odio tenetur ullam praesentium itaque alias assumenda quos totam fugit accusantium at voluptates eligendi id nemo sit voluptas magni, dolores magnam?
                .yell__bar
                  .control-bar
                    button.button.button_edit.control-bar__button(type="button")
                      .button__caption Редактировать
                      SvgIcon(className="button__icon button__icon_edit" name="pencil")
                    button.button.button_remove.control-bar__button(type="button")
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
  created() {},
};
</script>

<style lang="postcss">
//**********************************HEADER***************************************/
//**********************************HEADER***************************************/
//**********************************HEADER***************************************/
//**********************************HEADER***************************************/
:root {
  --bg-gradient: linear-gradient(90deg, $links-color 0%, $main-color 100%);
  --bg-reversed-gradient: linear-gradient(
    90deg,
    $main-color 0%,
    $links-color 100%
  );
  --form-boxshadow: 4px 3px 10px rgba(0, 0, 0, 0.07);
}
//admin
.admin {
}
// prettier-ignore
.admin__container {
  width: 1200Px;
}
.admin__header {
}
.admin__nav {
  height: 80px;
}

//header
.header {
}
.header__bar {
  background: $main-color;
  background: linear-gradient(90deg, $header-color 0%, $header-alt-color 100%);
  color: white;
}
.header__nav {
}

//bar
.bar {
  height: 80px;
  display: flex;
  align-items: center;
}
.bar__user {
  margin-right: 20px;
}
.bar__title {
  opacity: 0.7;
}
.bar__link {
  opacity: 0.7;
  margin-left: auto;
  text-decoration: underline;
}

//user
.user {
  display: flex;
  align-items: center;
}
.user__avatar {
  width: 46px;
  margin-right: 20px;
}
.user__desc {
  display: flex;
  flex-direction: column;
}
.user__name {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 2px;
}
.user__caption {
}
//avatar
.avatar {
  overflow: hidden;
  border-radius: 50%;
}
.avatar__img {
  display: block;
  min-width: 100%;
}

//nav
.nav {
}
.nav__list {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav__item {
}
.nav__link {
  padding: 24px;
  display: inline-block;
  white-space: nowrap;
  transition: $delay;
  border-bottom: 3px solid transparent;
  font-weight: 500;
  &:hover {
    color: $main-color;
    border-bottom: 3px solid $main-color;
  }
}

//**********************************ABOUT***************************************/
//**********************************ABOUT***************************************/
//**********************************ABOUT***************************************/
//**********************************ABOUT***************************************/

//about
.about {
  background: $admin-bg-color;
  padding-bottom: 50px;
}
// prettier-ignore
.about__container {
  width: 1200Px;
}
.about__content {
}
.about__title {
  padding: 60px 0;
  display: flex;
  align-items: center;
}
.about__title-text {
  margin-right: 60px;
}
.about__button {
  color: white;
}
.about__button-caption {
  color: $main-color;
  font-weight: 600;
  margin-left: 15px;
}
.about__list {
  margin-right: -20px;
}
.about__item {
  width: calc(50%-20px);
  padding: 0 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: white;
  box-shadow: var(--form-boxshadow);
}

//section-title
.section-title {
}
.section-title__text {
  font-size: 21px;
  font-weight: 700;
}

//button
.button {
  display: flex;
  align-items: center;
  background: transparent;

  &_add {
    & .icon-wrapper {
      overflow: hidden;
      border-radius: 50%;
    }
  }
}

.button__icon {
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 8px;

  &_plus {
    width: 20px;
    height: 20px;
    padding: 6px;
    background: $links-color;
    background: var(--bg-gradient);
  }
  &_edit {
    color: $admin-edit-color;
  }
  &_trash {
    color: $admin-edit-color;
  }
  &_apply {
    color: $admin-ok-color;
  }
  &_cancel {
    color: $admin-error-color;
  }
  &_remove {
    color: $admin-edit-color;
  }
}
.button__caption {
}
//section-list
.section-list {
  display: flex;
  flex-wrap: wrap;
}
.section-list__item {
}

//section-list
.skill-group {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.skill-group_new {
}

.skill-group__header {
  height: 75px;
  border-bottom: 1px solid $separator-color;
}
.skill-group__content {
  min-height: 200px;
  padding-top: 15px;
  margin-bottom: 15px;
}
.skill-group__footer {
  margin-top: auto;
  padding-bottom: 25px;
  width: 75%;
  align-self: flex-end;
}
.skill-group__add-icon {
  width: 41px;
  height: 41px;
  padding: 13px;
}

//property
.property {
  margin: 0 10px;
  flex: 1;
  &_title {
    width: 50%;
    font-size: 18px;
  }
  &_percentage {
    max-width: 75px;
    position: relative;
    &:after {
      content: '%';
      display: block;
      position: absolute;
      left: 100%;
      bottom: 5px;
      transform: translate(-150%);
    }
  }
}

//input
.input {
  border: 0;
  font-weight: 600;
  width: 100%;
  border-bottom: 1px solid $text-color;
  padding-right: 15px;
  padding-bottom: 8px;

  background: transparent;
  &:focus {
    outline: none;
  }

  &_new {
    padding-left: 15px;
  }
  &_title {
    font-size: 18px;
    padding-bottom: 15px;
  }
  &_percentage {
    text-align: right;
    padding-right: 25px;
    width: 100%;
  }
  &_textarea {
    resize: vertical;
    min-height: 150px;
    line-height: 30px;
  }
}

.input__icon {
  position: absolute;
  right: 100%;
  bottom: 0;
  transform: translate(100%, -50%);
  width: 30px;
  height: 30px;
  display: block;
  color: $text-color30;
}

//edit-control
.edit-control {
  display: flex;
  justify-content: flex-end;

  &.active {
  }
}

//property-row
.property-row {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  &_new {
  }
  &_title {
    padding-bottom: 0px;
    justify-content: space-between;
  }

  & .button__icon_plus {
    color: white;
  }
}

//**********************************WORKS***************************************/
//**********************************WORKS***************************************/
//**********************************WORKS***************************************/
//**********************************WORKS***************************************/

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
.works__new {
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
.works__add-button {
  flex-direction: column;
}

//form
.form {
  background: white;
  box-shadow: var(--form-boxshadow);
}
.form__title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 15px;
  padding: 30px 15px;
  border-bottom: 1px solid $separator-color;
}
.form__content {
  padding-top: 45px;
  padding-bottom: 45px;
  display: flex;
}
.form__loader {
  width: calc(50%-30px);
  height: 278px;
  margin: 0 30px;
  background: $admin-loader-color;
}
.form__properties {
  width: calc(50%-30px);
  margin-right: 30px;
}
.form-property {
  margin-bottom: 20px;
  position: relative;
}
.form-property__label {
  font-weight: 600;
  font-size: 15px;
  color: $text-color30;
}

.form__buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  &_center {
    margin-top: 40px;
    justify-content: center;
  }
}
.form__button {
  color: white;
  height: 50px;
  border-radius: 25px;
  text-transform: uppercase;
  padding: 0 40px;
  background: $links-color;
  background: var(--bg-gradient);
  &_auth {
    background: $links-color;
    background: var(--bg-gradient);

    width: 80%;
    height: 60px;
    border-radius: 30px 5px 30px 5px;
    text-transform: uppercase;
    transition: $delay;
    color: white;
    &:hover {
      opacity: 0.95;
      background: var(--bg-reversed-gradient);
    }
  }
}
.form__button_secondary {
  color: $links-color;
  background: transparent;
  text-transform: capitalize;
  font-weight: 600;
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
  margin-right: 20px;
}
.tags-editor__text {
}
.tags-editor__remove-icon {
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

//control-bar
.control-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.control-bar__button {
  color: $text-color50;
  font-weight: 600;
  & .button__caption {
    margin-right: 10px;
  }
  & .button__icon_edit {
    color: $links-color;
  }
  & .button__icon_remove {
    color: $admin-error-color;
  }
}

//**********************************YELLS***************************************/
//**********************************YELLS***************************************/
//**********************************YELLS***************************************/
//**********************************YELLS***************************************/

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

//control-bar
.control-bar {
}

//**********************************AUTH***************************************/
//**********************************AUTH***************************************/
//**********************************AUTH***************************************/
//**********************************AUTH***************************************/
.authorization {
  background: url(../images/content/welcome-background.jpg) no-repeat top/cover;
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
