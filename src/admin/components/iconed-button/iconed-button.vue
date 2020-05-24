<template lang="pug">
  button.iconed-button-component(
    :type="type"
    v-on="$listeners"
    :class="modificator"
    :disabled="!isEnabled"
  )
    .iconed-button__caption.iconed-button__caption_before(
      v-if="hasBeforeCaption") {{caption}}
    Icon.iconed-button__icon(
      :name="icon"
      :class="modificator"
    )
    .iconed-button__caption.iconed-button__caption_after(
      v-if="hasAfterCaption") {{caption}}
</template>

<script>
import Icon from '../Icon.vue';

export default {
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'button',
    },
    isEnabled: {
      type: Boolean,
      default: true,
    },
    modificator: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    isCaptionBefore: {
      type: Boolean,
      default: false,
    },
    isCirle: {
      type: Boolean,
      default: false,
    },
  },
  components: { Icon },
  computed: {
    hasCaption() {
      return this.caption !== undefined && this.caption !== '';
    },
    hasBeforeCaption() {
      return this.isCaptionBefore && this.hasCaption;
    },
    hasAfterCaption() {
      return !this.isCaptionBefore && this.hasCaption;
    },
  },
};
</script>

<style lang="postcss" scoped>
//button
.iconed-button-component {
  display: flex;
  align-items: center;
  background: transparent;
  overflow: hidden;
  color: $text-color30;
  transition: $delay;

  & .icon-wrapper {
    overflow: hidden;
    border-radius: 50%;
  }
  &:hover {
    color: $text-color;
  }

  &.add {
    color: $links-color;
    &:hover {
      color: $main-color;
    }
  }

  &.close {
    .iconed-button__icon {
      color: $text-color70;
    }
    &:hover {
      .iconed-button__icon {
        color: $admin-error-color;
      }
    }
  }

  &.plus {
    .iconed-button__icon {
      background: $links-color;
      background: var(--bg-gradient);
    }
    &:hover {
      .iconed-button__icon {
        background: $links-color;
        background: var(--bg-reversed-gradient);
      }
    }
  }

  &.blue-icon {
    .iconed-button__icon {
      color: $links-color;
    }
    &:hover {
      .iconed-button__icon {
        color: $main-color;
      }
    }
  }

  &.apply {
    .iconed-button__icon {
      color: $admin-ok-color;
    }
    &:hover {
      .iconed-button__icon {
        color: $admin-ok-hover;
      }
    }
  }

  &.cancel {
    .iconed-button__icon {
      color: $admin-error-color;
    }
    &:hover {
      .iconed-button__icon {
        color: $admin-error-hover;
      }
    }
  }

  // не вставлять сстили ниже disabled!
  &:disabled {
    cursor: default;
    .iconed-button__icon {
      cursor: default;
      background: $text-color30;
    }
    &:hover {
      .iconed-button__icon {
        background: $text-color30;
      }
    }
  }
}

.iconed-button__icon {
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: $text-color50;
  transition: $delay;

  &:hover {
    color: $text-color;
  }

  &.plus {
    width: 20px;
    height: 20px;
    padding: 5px;
  }
  &.big {
    width: 41px;
    height: 41px;
    padding: 12px;
  }

  &.white {
    color: #fff;
  }

  &.blue {
    color: $links-color;
    &:hover {
      color: $main-color;
    }
  }
}
.iconed-button__caption {
  font-weight: 600;
  padding-bottom: 2px;
  &_after {
    margin-left: 10px;
  }
}
</style>
