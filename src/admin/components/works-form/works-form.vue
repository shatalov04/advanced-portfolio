<template lang="pug">
  form.form.works-form-component(
    @submit.prevent="handleSubmit"
  )
    h2.form__title Редактирование работы
    .form__content
      .form__loader
        .loader
          .loader__caption Перетащите или загрузите изображение
          label.loader__button.form__button загрузить
            input.input.input_file(
              type="file"
              @change="handleFileChange"
            )
      .form__properties
        .form-property
          .form-property__label Название
          input.input.form-property__input(
            v-model="changedWork.title"
            placeholder="Введите название работы"
            autofocus
            required
            )
        .form-property
          .form-property__label Ссылка
          input.input.form-property__input(
            v-model="changedWork.link"
            placeholder="Введите ссылку на работу"
            required
            )
        .form-property
          .form-property__label Описание
          textarea.input.input_textarea.form-property__input(
            v-model="changedWork.description"
            placeholder="Введите описание работы"
            required
            )
        .tags-editor
          .form-property
            .form-property__label Добавление тегов
            input.input(
              v-model="changedWork.techs"
              placeholder="Введите теги через запятую"
              required)
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
          button(
            type="button"
            @click="$emit('cancelEditing')"
          ).form__button.form__button_secondary Отмена
          button(type="submit").form__button сохранить

</template>

<script>
/* eslint-disable prettier/prettier */
import { mapActions } from 'vuex';
import IconedButton from '../iconed-button';

export default {
  data() {
    return {
      changedWork: {
        title: '',
        techs: '',
        photo: {},
        link: '',
        description: '',
      },
      isPhotoChanged: false,
    };
  },
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    IconedButton,
  },
  computed: {},
  methods: {
    ...mapActions({
      addWork: 'works/addWork',
      updateWork: 'works/updateWork',
    }),
    handleFileChange(event) {
      this.isPhotoChanged = true;
      [this.changedWork.photo] = event.target.files;
      console.log('this.changedWork.photo :>> ', this.changedWork.photo);
    },
    async handleSubmit() {
      try {
        if (!this.isWorkChanged()) {
          alert('В работе нет изменений');
          return;
        }
        const isCreatedInDatabase = this.work.id >= 0;

        await (isCreatedInDatabase
          ? this.updateWork(this.changedWork)
          : this.addWork(this.changedWork));

        this.$emit('closeWorksForm');
      } catch (error) {
        console.error(error.message);
      } finally { }
    },
    isWorkChanged() {
      const { work, changedWork } = this;

      return (
        this.isPhotoChanged
        || work.title !== changedWork.title
        || work.techs !== changedWork.techs
        || work.link !== changedWork.link
        || work.description !== changedWork.description
      );
    },
  },
  watch: {
    work() {
      this.isPhotoChanged = false;
      this.changedWork = { ...this.work };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/form.pcss';
@import '../../styles/property-input.pcss';

.works-form-component {
}

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
  padding-top: 10px;
}

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
</style>
