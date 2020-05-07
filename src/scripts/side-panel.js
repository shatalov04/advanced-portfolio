export default {
  el: '#side',
  data: {
    activeClass: '',
  },
  methods: {
    handleOpen() {
      this.activeClass = 'side-panel_open';
    },
    handleClose() {
      this.activeClass = '';
    },
  },
};
