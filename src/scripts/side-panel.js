export default {
  template: '#side-template',
  data() {
    return {
      activeClass: '',
    };
  },
  props: ['sections'],
  methods: {
    handleOpen() {
      this.activeClass = 'side-panel_open';
    },
    handleClose() {
      this.activeClass = '';
    },
  },
};
