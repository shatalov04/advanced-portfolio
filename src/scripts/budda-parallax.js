export default {
  template: '#budda-parallax-template',
  data() {
    return {
    };
  },
  methods: {
    handleScroll() {
      const parallax = this.$el;
      const height = parallax.clientHeight;
      const scrollValue = window.pageYOffset;
      const top = parallax.offsetParent.offsetTop - height / 3;

      console.log('scrollValue - top :>> ', scrollValue - top);
      if (scrollValue - top > 0) {
        this.moveLayers(parallax, scrollValue - top);
      }
    },

    moveLayers(element, scrollValue) {
      const layers = element.children;

      console.log('inside move :>> ', 'inside move');

      Array.from(layers).forEach((layer) => {
        const ratio = layer.dataset.speed / 8;
        const strafe = scrollValue * ratio;

        // eslint-disable-next-line no-param-reassign
        layer.style.transform = `translateY(-${strafe}%)`;
      });
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

};
