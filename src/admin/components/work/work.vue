<template lang="pug">
  .work-component
    .work__header
      img.work__image(:src="imagePath")
      .tags.work__tags
        ul.tags__list
          li.tags__item HTML5
          li.tags__item CSS3
          li.tags__item Javascript
    .work__info
      h2.work__title {{work.title}}
      .work__desc {{work.description}}
      a.work__link(:href="work.link" target="_blank") {{work.link}}
    .work__bar
      .control-bar
        IconedButton(
          icon="pencil"
          modificator="blue-icon"
          caption="Редактировать"
          isCaptionBefore=true
          @click="$emit('editWork', work)"
        )
        IconedButton(
          icon="remove"
          modificator="cancel"
          caption="Удалить"
          isCaptionBefore=true
          @click="handleDeleteWork"
        )
</template>

<script>
import { mapActions } from 'vuex';
import IconedButton from '../iconed-button';
import { baseUrl } from '../../shared/constants.json';

export default {
  data() {
    return {};
  },
  props: {
    work: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    imagePath() {
      return baseUrl + this.work.photo;
    },
  },
  components: {
    IconedButton,
  },
  methods: {
    ...mapActions({
      deleteWork: 'works/deleteWork',
    }),
    async handleDeleteWork() {
      try {
        await this.deleteWork(this.work.id);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/control-bar.pcss';

.work-component {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.work__header {
  position: relative;
}
.work__image {
}
.work__tags {
  width: 100%;
  position: absolute;
  left: 100%;
  font-size: 14px;
  transform: translate(-100%, -100%);
  opacity: 0.7;
}
.work__info {
  padding: 20px;
}
.work__title {
  font-weight: 700;
  margin-bottom: 15px;
}
.work__desc {
  font-weight: 600;
  color: $text-color70;
  margin-bottom: 15px;
}
.work__link {
  color: $links-color;
  font-weight: 600;
}

.work__bar {
  margin-top: auto;
}
//tags
.tags {
}
.tags__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.tags__item {
  padding: 4px 15px;
  border-radius: 16px;
  background: $tag-bg-color;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
