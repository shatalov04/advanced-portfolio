<template lang="pug">
section.works#works
  .container.works__container
    .section-title.works__title
      h1.section-title__text Блок "Работы"
    .works__form
      WorksForm(
        v-if="isInEditingMode"
        :work="activeWork"
        @cancelEditing="handleFinishEditing"
        @closeWorksForm="handleFinishEditing")
    .works__content
      ul.section-list.works__list
        li.section-list__item.works__item
          NewItem(
            caption="Добавить работу"
            :isEnabled="!isInCreateNewMode"
            @addNewItem="handleAddNewWork"
          )
        li.section-list__item.works__item(
          v-for="work in works"
          )
          Work(
            :work="work"
            @editWork="handleEditWork"
          )
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import NewItem from '../../components/new-item';
import Work from '../../components/work';

let workTemporaryId = 0;

export default {
  data() {
    return {
      activeWork: {},
      isInCreateNewMode: false,
      isInEditingMode: false,
    };
  },
  components: {
    Icon,
    IconedButton,
    NewItem,
    Work,
    WorksForm: () => import('../../components/works-form'),
  },
  computed: {
    ...mapState('works', {
      works: (state) => state.items,
    }),
  },
  methods: {
    ...mapActions({
      fetchWorks: 'works/fetchWorks',
    }),
    handleAddNewWork() {
      workTemporaryId -= 1;
      this.activeWork = { id: workTemporaryId };
      this.isInEditingMode = true;
      this.isInCreateNewMode = true;
    },
    handleFinishEditing() {
      this.activeWork = null;
      this.isInEditingMode = false;
      this.isInCreateNewMode = false;
    },
    handleEditWork(work) {
      this.isInCreateNewMode = false;
      this.activeWork = { ...work };
      this.isInEditingMode = true;
    },
  },
  async created() {
    try {
      await this.fetchWorks();
    } catch (error) {
      console.error(error.message);
    }
  },
};
</script>
<style lang="postcss" scoped>
@import '../../styles/form.pcss';
@import '../../styles/section.pcss';
@import '../../styles/property-input.pcss';

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
</style>
