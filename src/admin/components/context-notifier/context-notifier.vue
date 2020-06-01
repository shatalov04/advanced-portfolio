<template lang="pug">
  .context-notifier(
    :style="styles"
  )
    transition(name="fade")
      .context-notifier__tooltip(
        v-if="isShown"
        )
        .context-notifier__message {{message.message}}
</template>

<script>
import { mapState } from 'vuex';
import debounce from '../../shared/debounce';
import colors from '../../../styles/variables.json';

export default {
  data() {
    return {
      isShown: false,
    };
  },
  props: {
    delay: {
      type: Number,
      default: 1500,
    },
  },
  computed: {
    ...mapState('message', ['message']),
    styles() {
      let color = colors['admin-error-color'];
      switch (this.message.type) {
        case 'error':
          color = colors['admin-error-color'];
          break;
        case 'warning':
          color = colors['warning-color'];
          break;
        case 'ok':
          color = colors['admin-ok-color'];
          break;
        default:
          break;
      }
      return {
        color,
      };
    },
  },
  methods: {
    showMessage() {
      this.isShown = true;
      setTimeout(() => {
        this.isShown = false;
      }, this.delay);
    },
  },
  watch: {
    message() {
      this.showMessage();
    },
  },
};
</script>

<style lang="postcss" scoped>
.context-notifier {
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  margin: auto 0;
  background: transparent;
  display: flex;
  justify-content: center;
}
.context-notifier__tooltip {
  opactity: 1;
  transition: $delay;
  min-width: 50%;
  background: currentColor;
  text-align: center;
}
.context-notifier__message {
  padding: 15px;
  color: white;
}

.fade-leave-active,
.fade-enter-active {
  transition: $slider-delay;
}

.fade-leave {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  opacity: 1;
  transform: translateY(100%);
}
.fade-enter-to {
  opacity: 1;
}
</style>
