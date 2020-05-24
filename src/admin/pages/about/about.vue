<template lang="pug">
section.about#about
  .container.about__container
    .about__title
      .section-title
        h1.section-title__text.about__title-text Блок "Обо мне"
      IconedButton(
        icon="plus"
        modificator="add plus white"
        caption="Добавить группу"
        @click="addNewCategory"
        )
    .about__content
      ul.section-list.about__list
        li.section-list__item.about__item(
           v-for="category in categories"
           :key="category.id"
          )
          Category(
            :categoryId="category.id"
          )
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import TitleEditor from '../../components/category-title';
import Category from '../../components/category';

let categoryId = 0;
export default {
  components: {
    Icon,
    IconedButton,
    TitleEditor,
    Category,
  },
  computed: {
    ...mapState('categories', {
      categories: (state) => state.categories,
    }),
  },
  methods: {
    ...mapActions('categories', ['addEmptyCategory', 'fetchCategories']),
    ...mapActions('skills', ['fetchSkills']),
    ...mapMutations('categories', ['ADD_EMPTY_CATEGORY']),
    addNewCategory() {
      categoryId -= 1;
      const newCategory = { id: categoryId, category: '' };
      this.addEmptyCategory(newCategory);
    },
  },
  async created() {
    try {
      await this.fetchCategories();
      await this.fetchSkills();
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/section.pcss';

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
</style>
