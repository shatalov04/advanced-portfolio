<template lang="pug">
  .yell-component
    .yell__header
      User.yell__user(
          :name="yell.author"
          :image="imagePath"
          :occupation="yell.occ"
        )
    .yell__info
      .yell__desc {{yell.text}}
    .yell__bar
      .control-bar
        IconedButton(
          icon="pencil"
          modificator="blue-icon"
          caption="Редактировать"
          isCaptionBefore=true
           @click="$emit('editYell', yell)"
        )
        IconedButton(
          icon="remove"
          modificator="cancel"
          caption="Удалить"
          isCaptionBefore=true
          @click="handleDeleteYell"
        )
</template>

<script>
import { mapActions } from 'vuex';
import { getAbsoluteImgPath } from '../../shared/pictures';

import IconedButton from '../iconed-button';
import User from '../user';

export default {
  data() {
    return {};
  },
  props: {
    yell: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    imagePath() {
      return getAbsoluteImgPath(this.yell.photo);
    },
  },
  components: {
    IconedButton,
    User,
  },
  methods: {
    ...mapActions({
      deleteYell: 'yells/deleteYell',
    }),
    async handleDeleteYell() {
      try {
        await this.deleteYell(this.yell.id);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/control-bar.pcss';

.yell-component {
  min-height: 35vh;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .control-bar {
    padding-bottom: 0;
  }
}
.yell__header {
}
.yell__user {
  margin-bottom: 20px;
}
.yell__info {
}
.yell__desc {
  margin-bottom: 20px;
}
.yell__bar {
  margin-top: auto;
}
</style>
