export default {
  template: '#nav-template',
  data() {
    return {
    };
  },
  props: ['sections'],
  methods: {
    handleClick() {
      this.$emit('clickEmmited');
    },
  },
  mounted() {
  },
};
