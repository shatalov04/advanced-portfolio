<template lang="pug">
  form.title-editor-component(
    @submit.prevent="handleApply"
  )
    .content
      input.input.input_title(
        v-show="isActive"
        name="title"
        v-model="title"
        type="text"
        :placeholder="placeholder"
        autofocus
        )
      .presentation(
        v-show="!isActive"
        ) {{title}}
    .edit-control.active
      IconedButton(
        v-show="!isActive"
        icon="pencil"
        @click="handleEdit"
      )
      IconedButton(
        v-show="!isActive"
        icon="trash"
        modificator="close"
        @click="$emit('deleteCategory')"
      )
      IconedButton(
        v-show="isActive"
        type="submit"
        icon="tick"
        modificator="apply"
      )
      IconedButton(
        v-show="isActive"
        icon="remove"
        modificator="cancel"
        @click="handleCancel"
      )
</template>

<script>
import IconedButton from '../iconed-button';

let unchangedTitle = '';

export default {
  data() {
    return {
      isActive: false,
      title: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    initialTitle: {
      type: String,
      default: '',
    },
  },
  components: { IconedButton },
  methods: {
    handleEdit() {
      unchangedTitle = this.title;
      this.isActive = true;
    },
    handleApply() {
      if (this.title === '') {
        return;
      }

      this.isActive = false;

      if (this.title === unchangedTitle) {
        return;
      }

      this.$emit('changeTitle', this.title);
    },
    handleCancel() {
      this.title = unchangedTitle;
      this.isActive = false;
    },
    checkTitle(value) {
      if (value === '') {
        this.isActive = true;
      }
    },
  },
  created() {
    this.title = this.initialTitle;
    unchangedTitle = this.title;
    this.checkTitle(this.title);
  },
  watch: {
    title(value) {
      this.checkTitle(value);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/property-input.pcss';

.title-editor-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.content {
  margin: 0 10px;
  width: 50%;
  font-size: 18px;
  font-weight: 600;
}

.edit-control {
  display: flex;
  justify-content: flex-end;

  &.active {
  }
}
</style>
