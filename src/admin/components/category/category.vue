<template lang="pug">
  .category
    .category__header
      .property-row.property-row_title
        TitleEditor(
          :initialTitle="category.title"
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
import { mapGetters, mapMutations } from 'vuex';
import IconedButton from '../iconed-button';
import TitleEditor from '../title-editor';

export default {
  data() {
    return {
      category: {},
    };
  },
  props: {
    categoryId: {
      type: Number,
      required: true,
    },
  },
  components: { TitleEditor, IconedButton },
  computed: {
    ...mapGetters(['getCategory']),
  },
  methods: {
    ...mapMutations(['changeCategory', 'deleteCategory']),
    handleChangeTitle(title) {
      this.category.title = title;
      this.changeCategory(this.category);
    },
    handleDeleteCategory() {
      this.deleteCategory(this.category);
    },
  },
  created() {
    this.category = this.getCategory(this.categoryId);
  },
};
</script>

<style lang="postcss" scoped>
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
