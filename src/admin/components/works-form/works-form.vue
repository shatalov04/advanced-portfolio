<template lang="pug">
  form.form.works-form-component(
    @submit.prevent="handleSubmit"
  )
    h2.form__title Редактирование работы
    .form__content
      .form__loader
        label.loader(:style="backgroundStyle")
          .loader__caption(
            v-if="!isPhotoLoaded"
            ) Перетащите или загрузите изображение
          .loader__button.form__button(
            v-if="!isPhotoLoaded"
            ) загрузить
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
            )
          ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedWork.title')"
            :errorMessage="validation.firstError('changedWork.title')")
        .form-property
          .form-property__label Ссылка
          input.input.form-property__input(
            v-model="changedWork.link"
            placeholder="Введите ссылку на работу"
            )
          ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedWork.link')"
            :errorMessage="validation.firstError('changedWork.link')")
        .form-property
          .form-property__label Описание
          textarea.input.input_textarea.form-property__input(
            v-model="changedWork.description"
            placeholder="Введите описание работы"
            )
          ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedWork.description')"
            :errorMessage="validation.firstError('changedWork.description')")
        .tags-editor
          .form-property
            .form-property__label Добавление тегов
            input.input(
              v-model="changedWork.techs"
              placeholder="Введите теги через запятую"
              )
            ContextTooltip.property__tooltip(
              v-if="validation.hasError('changedWork.techs')"
              :errorMessage="validation.firstError('changedWork.techs')")
          TagsEditor(
            :work="changedWork"
            @changeTags="handleChangeTags"
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
/* eslint-disable func-names */
import { mapActions } from 'vuex';
import { Validator, mixin } from 'simple-vue-validator';
import TagsEditor from '../tags-editor';
import imageMixin from '../mixins/imageMixin';

export default {
  mixins: [imageMixin, mixin],
  validators: {
    'changedWork.title': function (value) {
      return Validator.value(value)
        .required();
    },
    'changedWork.techs': function (value) {
      return Validator.value(value)
        .required();
    },
    'changedWork.link': function (value) {
      return Validator.value(value)
        .required()
        .url();
    },
    'changedWork.description': function (value) {
      return Validator.value(value)
        .required()
        .minLength(15);
    },
  },
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
      renderedPhoto: null,
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
    TagsEditor,
    ContextTooltip: () => import('../context-tooltip'),
  },
  methods: {
    ...mapActions({
      addWork: 'works/addWork',
      updateWork: 'works/updateWork',
    }),
    async handleFileChange(event) {
      this.isPhotoChanged = true;
      const [photo] = event.target.files;
      this.changedWork.photo = photo;
      await this.setPhoto(photo);
    },
    handleChangeTags(newTags) {
      this.changedWork.techs = newTags;
    },
    async handleSubmit() {
      try {
        const isValid = await this.$validate();
        if (!isValid) return;

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
        console.error('Ошибка валидации',
          error.message);
      }
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
    async work() {
      this.isPhotoChanged = false;
      this.changedWork = { ...this.work };
      await this.setPhoto(this.changedWork.photo);
    },
  },
  async created() {
    this.changedWork = { ...this.work };
    await this.setPhoto(this.changedWork.photo);
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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 2px $text-color50 dashed;
  background-size: cover;
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

</style>
