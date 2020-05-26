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
          placeholder="Введите название работы"
          autofocus
          required
          )
      .form-property
        .form-property__label Титул автора
        input.input.form-property__input(
          v-model="changedYell.occ"
          placeholder="Введите титул"
          required
          )
      .form-property
        .form-property__label Отзыв
          textarea.input.input_textarea.form-property__input(
            v-model="changedYell.text"
            placeholder="Введите отзыв"
            required
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
import imageMixin from '../mixins/imageMixin';

import Icon from '../Icon.vue';

export default {
  mixins: [imageMixin],
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
  },
  methods: {
    ...mapActions({
      addYell: 'yells/addYell',
      updateYell: 'yells/updateYell',
    }),
    async handleFileChange(event) {
      this.isPhotoChanged = true;
      const [photo] = event.target.files;
      this.changedYell.photo = photo;
      await this.setPhoto(photo);
    },
    async handleSubmit() {
      try {
        if (!this.isYellChanged()) {
          alert('В отзыве нет изменений');
          return;
        }
        const isCreatedInDatabase = this.yell.id >= 0;

        await (isCreatedInDatabase
          ? this.updateYell(this.changedYell)
          : this.addYell(this.changedYell));

        this.$emit('closeYellsForm');
      } catch (error) {
        console.error(error.message);
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
