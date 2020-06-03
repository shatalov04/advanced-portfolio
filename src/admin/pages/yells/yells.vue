<template lang="pug">
  section.yells#yells
    .container.yells__container
      .section-title.yells__title
        h1.section-title__text Блок "Отзывы"
      .yells__content
        .yells__form
          YellsForm(
            v-if="isInEditingMode"
            :yell="activeYell"
            @cancelEditing="handleFinishEditing"
            @closeYellsForm="handleFinishEditing")
        ul.section-list.yells__list
          li.section-list__item.yells__item
            NewItem(
            caption="Добавить отзыв"
            :isEnabled="!isInCreateNewMode"
            @addNewItem="handleAddNewYell"
            )
          li.section-list__item.yells__item(
            v-for="yell in yells"
            )
            Yell(
              :yell="yell"
              @editYell="handleEditYell"
              )
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Icon from '../../components/Icon.vue';
import IconedButton from '../../components/iconed-button';
import NewItem from '../../components/new-item';
import Yell from '../../components/yell';

let yellTemporaryId = 0;

export default {
  data() {
    return {
      activeYell: {},
      isInCreateNewMode: false,
      isInEditingMode: false,
    };
  },
  components: {
    Icon,
    IconedButton,
    NewItem,
    YellsForm: () => import('../../components/yells-form'),
    Yell,
  },
  computed: {
    ...mapState('yells', {
      yells: (state) => state.items,
    }),
  },
  methods: {
    ...mapActions({
      fetchYells: 'yells/fetchYells',
    }),
    handleAddNewYell() {
      yellTemporaryId -= 1;
      this.activeYell = { id: yellTemporaryId };
      this.isInEditingMode = true;
      this.isInCreateNewMode = true;
    },
    handleFinishEditing() {
      this.activeYell = null;
      this.isInEditingMode = false;
      this.isInCreateNewMode = false;
    },
    handleEditYell(yell) {
      this.isInCreateNewMode = false;
      this.activeYell = { ...yell };
      this.isInEditingMode = true;
    },
  },
  async created() {
    try {
      await this.fetchYells();
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
@import '../../../styles/mixins.pcss';

.yells {
  background: $admin-bg-color;
  padding-bottom: 50px;
}
//prettier-ignore
.yells__container {
  margin: 0 auto;
  max-width: 1200Px;
  width: 95%;

  @include desktop {
    max-width: 1080Px;
  }

  @include tablet {
    max-width: 688Px;
    width: 90%;
  }

  @include phone {
    width: 85%;
  }
}
.yells__title {
  padding: 60px 0;
}
.yells__content {
}
.yells__form {
}

.yells__list {
  margin-right: -20px;
  margin-top: 20px;
}
.yells__item {
  width: calc((100% / 3) -20px);
  margin-right: 20px;
  margin-bottom: 20px;
  background: white;
  box-shadow: var(--form-boxshadow);
}

.yells__add-button {
  flex-direction: column;
}
.yells__new {
  height: 100%;
  width: 100%;
  background: $links-color;
  background: var(--bg-gradient);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  & .button__icon_plus {
    width: 150px;
    height: 150px;
    padding: 64px;
    border: 2px solid white;
    color: white;
    background: transparent;
    margin-bottom: 20px;
  }
  & .button__caption {
    width: 50%;
    font-weight: 600;
    color: white;
    line-height: 30px;
  }
}
</style>
