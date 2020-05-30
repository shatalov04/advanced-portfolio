<template lang="pug">
  form.category-title-component(
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
    ContextTooltip(
      v-if="validation.hasError('title')"
      :errorMessage="validation.firstError('title')").property__tooltip
</template>

<script>
import { Validator, mixin } from 'simple-vue-validator';
import IconedButton from '../iconed-button';

let unchangedTitle = '';

export default {
  mixins: [mixin],
  validators: {
    title(value) {
      return Validator.value(value).required();
    },
  },
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
  components: {
    IconedButton,
    ContextTooltip: () => import('../context-tooltip'),
  },
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

.category-title-component {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}
.content {
  margin: 0 10px;
  width: 50%;
  font-size: 18px;
  font-weight: 600;
}
.property__tooltip {
  position: absolute;
  top: calc(100%+2px);
  color: $admin-error-color;
  font-size: 12px;
}
</style>
