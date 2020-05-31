<template lang="pug">
  form.category-skill-component(
    @submit.prevent="handleApply"
    )
    .property
      input.input(
        v-if="isActive"
        v-model="changedSkill.title"
        placeholder="Название навыка"
        autofocus
        )
      .presentation(
        v-if="!isActive") {{skill.title}}
      ContextTooltip.property__tooltip(
        v-if="validation.hasError('changedSkill.title')"
        :errorMessage="validation.firstError('changedSkill.title')")
    .property.property_percentage
      input.input.input_percentage(
        v-if="isActive"
        v-model.number="changedSkill.percent"
        )
      .presentation.presentation_number(
        v-if="!isActive") {{skill.percent}}
      ContextTooltip.property__tooltip.property__tooltip_percentage(
        v-if="validation.hasError('changedSkill.percent')"
        :errorMessage="validation.firstError('changedSkill.percent')")
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
        @click="handleDeleteSkill"
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
/* eslint-disable prettier/prettier */
/* eslint-disable func-names */
import { mapActions } from 'vuex';
import { Validator, mixin } from 'simple-vue-validator';
import IconedButton from '../iconed-button';

export default {
  mixins: [mixin],
  validators: {
    'changedSkill.title': function (value) {
      return Validator.value(value)
        .required();
    },
    'changedSkill.percent': function (value) {
      return Validator.value(value)
        .required()
        .integer()
        .lessThanOrEqualTo(100)
        .greaterThan(0);
    },
  },
  data() {
    return {
      isActive: false,
      changedSkill: {
        title: '',
        percent: 0,
      },
    };
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    IconedButton,
    ContextTooltip: () => import('../context-tooltip'),
  },
  methods: {
    ...mapActions({
      updateSkill: 'skills/updateSkill',
      deleteSkill: 'skills/deleteSkill',
    }),
    handleEdit() {
      this.isActive = true;
    },
    async handleApply() {
      try {
        const isValid = await this.$validate();
        if (!isValid) return;

        this.isActive = false;

        if (!this.isSkillChanged()) return;

        await this.updateSkill(this.changedSkill);
      } catch (error) {
        console.error(error.message);
      }
    },
    isSkillChanged() {
      const { skill, changedSkill } = this;

      return (
        skill.title !== changedSkill.title
        || skill.percent !== changedSkill.percent
      );
    },
    handleCancel() {
      this.changedSkill = { ...this.skill };
      this.isActive = false;
    },
    async handleDeleteSkill() {
      try {
        await this.deleteSkill(this.skill.id);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  created() {
    this.changedSkill = { ...this.skill };
  },
};
</script>

<style lang="postcss" scoped>
@import '../../styles/property-input.pcss';

.category-skill-component{
  width: 100%;
  }
</style>
