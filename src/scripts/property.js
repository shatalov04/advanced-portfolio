import Icon from '../admin/components/Icon.vue';

export default {
  template: '#property-template',
  data() {
    return {
      errorMessage: 'ошибка',
      iconModule: '',
      hasError: false,
    };
  },
  props: ['icon', 'label', 'isActive'],
  computed: {
    className() {
      if (this.hasError) {
        return 'error';
      }
      return this.isActive ? 'active' : '';
    },
    hasIcon() {
      return this.icon !== undefined && this.icon.length > 0;
    },
  },
  components: {
    Icon,
  },
  methods: {
    reactOnChildEvent(message) {
      console.log(message);
    },
    handleFocused(event) {
      console.log('focused :>> ', event);
      this.isActive = true;
    },
    handleBlurred() {
      this.isActive = false;
    },
  },
  created() {
    this.$root.$on('child-event', this.reactOnChildEvent);
  },
};
