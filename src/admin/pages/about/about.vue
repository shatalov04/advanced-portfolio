<template lang="pug">
section.about#about
  .container.about__container
    .about__title
      .section-title
        h1.section-title__text.about__title-text Блок "Обо мне"
      IconedButton.add(
        icon="plus"
        modificator="plus white"
        caption="Добавить группу"
        @click="addNewCategory"
        )
    pre {{categories}}
    .about__content
      ul.section-list.about__list
        li.section-list__item.about__item(
           v-for="category in categories"
           :key="category.id"
          )
          Category(
            :categoryId="category.id"
          )
        //- li.section-list__item.about__item
        //-   .skill-group
        //-     .skill-group__header
        //-       .property-row.property-row_title
        //-         .property.property_title
        //-           input.input.input_title(
        //-             name="title"
        //-             type="text"
        //-             placeholder="Название новой группы"
        //-             value="Workflow"
        //-             required)
        //-         .edit-control.active
        //-             Icon.button__icon.button__icon_edit(name="pencil")
        //-             Icon.button__icon.button__icon_apply(name="tick")
        //-             Icon.button__icon.button__icon_cancel(name="remove")
        //-     .skill-group__content
        //-       ul.properties
        //-         li.property-row.properties__item
        //-           .property
        //-             input.input(
        //-             name="title"
        //-             type="text"
        //-             placeholder="Название навыка"
        //-             value="Git"
        //-             required)
        //-           .property.property_percentage
        //-             input.input.input_percentage(value="95")
        //-           .edit-control
        //-             Icon.button__icon.button__icon_edit(name="pencil")
        //-             Icon.button__icon.button__icon_trash(name="trash")
        //-             Icon.button__icon.button__icon_apply(name="tick")
        //-             Icon.button__icon.button__icon_cancel(name="remove")
        //-     .skill-group__footer
        //-       .property-row.property-row_new
        //-         .property
        //-             input.input.input_new(placeholder="Новый навык")
        //-         .property.property_percentage
        //-             input.input.input_percentage(value="100")
        //-         button.button.button_add(
        //-           type="button"
        //-         )
        //-           Icon.button__icon.button__icon_plus.skill-group__add-icon(
        //-             name="plus")
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import NewItem from '../../components/new-item';
import TitleEditor from '../../components/title-editor';
import Category from '../../components/category';

let categoryId = 0;
export default {
  components: {
    Icon,
    IconedButton,
    NewItem,
    TitleEditor,
    Category,
  },
  computed: {
    ...mapState({
      categories: (state) => state.categories.categories,
    }),
  },
  methods: {
    ...mapMutations(['addCategory']),
    addNewCategory() {
      categoryId += 1;
      const newCategory = { id: categoryId, title: '' };

      this.addCategory({ ...newCategory });
    },
  },
};
</script>

<style lang="postcss" scoped>
//about
.about {
  background: $admin-bg-color;
  padding-bottom: 50px;
  min-height: 100vh;
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

//section-list
.section-list {
  display: flex;
  flex-wrap: wrap;
}
.section-list__item {
}
</style>
