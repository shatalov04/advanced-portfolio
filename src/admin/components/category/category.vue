<template lang="pug">
  .category
    .category__header
      .property-row.property-row_title
        TitleEditor(
          :initialTitle="category.category"
          placeholder="Название новой группы"
          @changeTitle="handleChangeTitle"
          @deleteCategory="handleDeleteCategory"
        )
    .category__content
    .category__footer
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import IconedButton from '../iconed-button';
import TitleEditor from '../title-editor';

export default {
  data() {
    return {};
  },
  props: {
    categoryId: {
      type: Number,
      required: true,
    },
  },
  components: { TitleEditor, IconedButton },
  computed: {
    ...mapGetters('categories', ['getCategory']),
    category() {
      return this.getCategory(this.categoryId);
    },
  },
  methods: {
    ...mapActions('categories', [
      'addCategory',
      'updateCategory',
      'deleteCategory',
    ]),

    handleChangeTitle(title) {
      this.category.category = title;
      if (this.category.id < 0) {
        this.addNewCategory();
      } else {
        this.updateCurrentCategory();
      }
    },
    async addNewCategory() {
      try {
        console.log('this.category :>> ', this.category);
        await this.addCategory(this.category);
      } catch (error) {
        console.error(error.message);
      }
    },
    async updateCurrentCategory() {
      try {
        await this.updateCategory(this.category);
      } catch (error) {
        console.error(error.message);
      }
    },
    async handleDeleteCategory() {
      try {
        await this.deleteCategory(this.category.id);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/property-input.pcss';

.category {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.category__header {
  height: 75px;
  border-bottom: 1px solid $separator-color;
}
.category__content {
  min-height: 200px;
  padding-top: 15px;
  margin-bottom: 15px;
}
.category__footer {
  margin-top: auto;
  padding-bottom: 25px;
  width: 75%;
  align-self: flex-end;
}
.category__add-icon {
  width: 41px;
  height: 41px;
  padding: 13px;
}
</style>
