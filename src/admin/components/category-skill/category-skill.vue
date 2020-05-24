<template lang="pug">
  form.category-skill-component(
    @submit.prevent="handleApply"
    )
    .property
      input.input(
        v-show="isActive"
        v-model="changedSkill.title"
        placeholder="Название навыка"
        autofocus
        required
        )
      .presentation(
        v-show="!isActive") {{skill.title}}
    .property.property_percentage
      input.input.input_percentage(
        v-show="isActive"
        v-model.number="changedSkill.percent"
        required)
      .presentation.presentation_number(
        v-show="!isActive") {{skill.percent}}
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
import { mapActions } from 'vuex';
import IconedButton from '../iconed-button';

export default {
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
  components: { IconedButton },
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
        if (!this.isSkillChanged()) {
          return;
        }

        await this.updateSkill(this.changedSkill);
      } catch (error) {
        console.error(error.message);
      } finally {
        this.isActive = false;
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
