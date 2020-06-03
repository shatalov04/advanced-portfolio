<template lang="pug">
form.form.yells-form-component(
    @submit.prevent="handleSubmit"
   )
  h2.form__title Редактирование отзыва
  .form__content
    .form__loader.yells__loader
      label.photo-loader()
        .yells__user-button
          .button__icon(
          v-if="isPhotoLoaded"
          :style="backgroundStyle"
          )
          Icon.button__icon.button__icon_man-user(
            v-if="!isPhotoLoaded"
            name="man-user")
          .button__caption(
            v-if="!isPhotoLoaded"
            ) Добавить фото
        input.input.input_file(
          type="file"
          @change="handleFileChange"
          )
    .form__properties
      .form-property
        .form-property__label Имя автора
        input.input.form-property__input(
          v-model="changedYell.author"
          placeholder="Введите имя автора"
          autofocus
          )
        ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedYell.author')"
            :errorMessage="validation.firstError('changedYell.author')")
      .form-property
        .form-property__label Титул автора
        input.input.form-property__input(
          v-model="changedYell.occ"
          placeholder="Введите титул"
          )
        ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedYell.occ')"
            :errorMessage="validation.firstError('changedYell.occ')")
      .form-property
        .form-property__label Отзыв
          textarea.input.input_textarea.form-property__input(
            v-model="changedYell.text"
            placeholder="Введите отзыв"
            )
          ContextTooltip.property__tooltip(
            v-if="validation.hasError('changedYell.text')"
            :errorMessage="validation.firstError('changedYell.text')")
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
import imageMixin from '../mixins/imageMixin';
import messageMixin from '../mixins/message-mixin';

import Icon from '../Icon.vue';

export default {
  mixins: [imageMixin, mixin, messageMixin],
  validators: {
    'changedYell.author': function (value) {
      return Validator.value(value)
        .required();
    },
    'changedYell.occ': function (value) {
      return Validator.value(value)
        .required();
    },
    'changedYell.text': function (value) {
      return Validator.value(value)
        .required()
        .minLength(15);
    },
  },
  data() {
    return {
      changedYell: {
        author: '',
        occ: '',
        photo: {},
        text: '',
      },
      isPhotoChanged: false,
      renderedPhoto: null,
    };
  },
  props: {
    yell: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    Icon,
    ContextTooltip: () => import('../context-tooltip'),
  },
  methods: {
    ...mapActions({
      addYell: 'yells/addYell',
      updateYell: 'yells/updateYell',
      sendMessage: 'message/sendMessage',
    }),
    async handleFileChange(event) {
      this.isPhotoChanged = true;
      const [photo] = event.target.files;
      this.changedYell.photo = photo;
      await this.setPhoto(photo);
    },
    async handleSubmit() {
      try {
        const isValid = await this.$validate();
        if (!isValid) return;

        if (!this.isYellChanged()) {
          this.sendWarning('В отзыве нет изменений');
          return;
        }

        const isCreatedInDatabase = this.yell.id >= 0;
        await (isCreatedInDatabase
          ? this.updateYell(this.changedYell)
          : this.addYell(this.changedYell));

        this.sendNotification(isCreatedInDatabase
          ? 'Отзыв успешно обновлен'
          : 'Отзыв успешно добавлен');

        this.$emit('closeYellsForm');
      } catch (error) {
        this.sendError(error);
      }
    },
    isYellChanged() {
      const { yell, changedYell } = this;

      return (
        this.isPhotoChanged
        || yell.author !== changedYell.author
        || yell.text !== changedYell.text
        || yell.occ !== changedYell.occ
      );
    },
  },
  watch: {
    async yell() {
      this.isPhotoChanged = false;
      this.changedYell = { ...this.yell };
      await this.setPhoto(this.changedYell.photo);
    },
  },
  async created() {
    this.changedYell = { ...this.yell };
    await this.setPhoto(this.changedYell.photo);
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/form.pcss';
@import '../../styles/property-input.pcss';

.yells-form-component {
}

.yells__user-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.yells__loader {
  background: white;
  width: 230px;
}

//photo-loader
.photo-loader {
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: $delay;
   &:hover{
    & .button__icon_man-user {
     border: 2px $text-color50 dashed;
    }
    & .button__caption{
        color: $main-color;
    }
  }
}
.button__icon{
  overflow: hidden;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-size: cover;
  margin-bottom: 20px;
}

.button__icon_man-user {
  width: 200px;
  height: 200px;
  padding: 15px;
  color: white;
  background: $admin-loader-color;

}
.button__caption {
  text-align: center;
  width: 60%;
  font-weight: 600;
  color: $links-color;
  line-height: 30px;


}

</style>
