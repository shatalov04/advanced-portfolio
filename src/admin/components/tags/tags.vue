<template lang="pug">
  .tags-component
    ul.tags__list
      li.tags__item(
        v-for="tag in tags"
        :key="tag.id"
        ) {{tag}}
</template>

<script>
export default {
  props: {
    tagsString: {
      type: String,
      required: true,
    },
  },
  computed: {
    tags() {
      return this.tagsString.split(',');
    },
  },
};
</script>

<style lang="postcss" scoped>
.tags-component {
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
