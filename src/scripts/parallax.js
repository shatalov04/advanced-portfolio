export default {
  template: '#parallax-template',
  data() {
    return {
    };
  },
  methods: {
    handleScroll() {
      const parallax = this.$el;
      const height = parallax.clientHeight;
      const scrollValue = window.pageYOffset;

      if (scrollValue < height * 0.4) {
        this.moveLayers(parallax, scrollValue);
      }
    },

    moveLayers(element, scrollValue) {
      const layers = element.children;

      Array.from(layers).forEach((l) => {
        const ratio = l.dataset.speed / 8;
        const strafe = scrollValue * ratio;

        l.style.transform = `translateY(-${strafe}%)`;
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
