<template lang="pug">
  .tags-editor-component
    ul.tags-editor__list
      li.tags-editor__item(
        v-for="tag, index in tags"
        )
        .tags-editor__text {{tag}}
        IconedButton(
          icon="remove"
          modificator="close"
          @click="handleDeleteTag(index)"
        )

</template>

<script>
import IconedButton from '../iconed-button';

export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tags() {
      return this.work.techs.split(',');
    },
  },
  components: {
    IconedButton,
  },
  methods: {
    handleDeleteTag(index) {
      const tags = [...this.tags];
      tags.splice(index, 1);
      const newTags = tags.join(', ');

      this.$emit('changeTags', newTags);
    },
  },
};
</script>

<style lang="postcss" scoped>
.tags-editor-component {
  padding-bottom: 20px;
}
.tags-editor__list {
  display: flex;
  flex-wrap: wrap;
}
.tags-editor__item {
  display: flex;
  align-items: center;
  margin-right: 15px;
  background: $tag-bg-color;
  border-radius: 20px;
  padding-left: 15px;
}
.tags-editor__text {
}
</style>
