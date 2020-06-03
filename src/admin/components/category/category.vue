<template lang="pug">
  .category
    .category__header
      .property-row.property-row_title
        CategoryTitle(
          :initialTitle="category.category"
          placeholder="Название новой группы"
          @changeTitle="handleChangeTitle"
          @deleteCategory="handleDeleteCategory"
        )
    .category__content
      ul.properties
        li.properties__item(
            v-for="skill in skills"
            :key="skill.id")
          CategorySkill.property-row(
            :skill="skill"
          )
    .category__footer
      form(@submit.prevent="addNewSkill").property-row.property-row_new
        .property
          input.input.input_new(
            v-model="newSkill.title"
            name="title"
            type="text"
            placeholder="Новый навык"
            :disabled="!hasCategoryId")
          ContextTooltip.property__tooltip(
            v-if="validation.hasError('newSkill.title')"
            :errorMessage="validation.firstError('newSkill.title')")
        .property.property_percentage
          input.input.input_percentage(
            v-model.number="newSkill.percent"
            name="percent"
            type="number"
            value="100"
            :disabled="!hasCategoryId")
          ContextTooltip.property__tooltip.property__tooltip_percentage(
            v-if="validation.hasError('newSkill.percent')"
            :errorMessage="validation.firstError('newSkill.percent')")
        IconedButton(
          type="submit"
          icon="plus"
          modificator="add plus white big"
          :isEnabled="hasCategoryId"
        )
</template>

<script>
/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
import { mapGetters, mapActions } from 'vuex';
import { Validator, mixin } from 'simple-vue-validator';
import messageMixin from '../mixins/message-mixin';
import IconedButton from '../iconed-button';
import CategoryTitle from '../category-title';
import CategorySkill from '../category-skill';

export default {
  mixins: [mixin, messageMixin],
  validators: {
    'newSkill.title': function (value) {
      return Validator.value(value).required();
    },
    'newSkill.percent': function (value) {
      return Validator.value(value)
        .required()
        .integer()
        .lessThanOrEqualTo(100)
        .greaterThan(0);
    },
  },
  data() {
    return {
      newSkill: {
        title: '',
        percent: 0,
        category: -1,
      },
    };
  },
  props: {
    categoryId: {
      type: Number,
      required: true,
    },
  },
  components: {
    CategoryTitle,
    CategorySkill,
    IconedButton,
    ContextTooltip: () => import('../context-tooltip'),
  },
  computed: {
    ...mapGetters({
      getCategory: 'categories/getCategory',
      getSkills: 'skills/getSkillsByCategoryId',
    }),
    category() {
      return this.getCategory(this.categoryId);
    },
    skills() {
      return this.getSkills(this.categoryId);
    },
    hasCategoryId() {
      return this.category.id > 0;
    },
  },
  methods: {
    ...mapActions({
      addCategory: 'categories/addCategory',
      updateCategory: 'categories/updateCategory',
      deleteCategory: 'categories/deleteCategory',
      addSkill: 'skills/addSkill',
    }),
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
        await this.addCategory(this.category);
        this.sendNotification('Категория успешно добавлена');
      } catch (error) {
        this.sendError(error);
      }
    },
    async updateCurrentCategory() {
      try {
        await this.updateCategory(this.category);
        this.sendNotification('Категория успешно обновлена');
      } catch (error) {
        this.sendError(error);
      }
    },
    async handleDeleteCategory() {
      try {
        await this.deleteCategory(this.category.id);
        this.sendNotification('Категория успешно удалена');
      } catch (error) {
        this.sendError(error);
      }
    },
    async addNewSkill() {
      try {
        const isValid = await this.$validate();
        if (!isValid) return;

        this.newSkill.category = this.category.id;

        await this.addSkill(this.newSkill);
        this.sendNotification('Новый навык добавлен');
        this.resetNewSkill();
      } catch (error) {
        this.sendError(error);
      }
    },
    resetNewSkill() {
      this.newSkill.title = '';
      this.newSkill.percent = 0;
      this.validation.reset();
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
</style>
