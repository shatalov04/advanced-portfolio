import Flickity from 'vue-flickity';

export default {
  el: '#app',
  data: {
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: false,
      pageDots: false,
      wrapAround: false,
      groupCells: true,
      freeScroll: false,
      contain: true,
      imagesLoaded: true,
      cellAlign: 'left',
    },
    sections: [
      {
        id: 'main',
        desc: 'Главная',
      },
      {
        id: 'about',
        desc: 'Обо мне',
      },
      {
        id: 'skills',
        desc: 'Навыки',
      },
      {
        id: 'works',
        desc: 'Главная',
      },
      {
        id: 'yells',
        desc: 'Отзывы',
      },
      {
        id: 'feedback',
        desc: 'Связаться',
      },
    ],
    buttonClass: 'double-slider__button',
    isNextButtonEnabled: true,
    isPreviousButtonEnabled: false,
  },
  computed: {
    isNextDisabled() {
      return !this.isNextButtonEnabled;
    },
    isPreviousDisabled() {
      return !this.isPreviousButtonEnabled;
    },
  },
  components: {
    Flickity,
  },
  methods: {
    handleNext() {
      console.log('next :>> ', 'next');
      this.$refs.flickity.next();
      this.checkState();
    },
    handlePrevious() {
      console.log('prev :>> ', 'prev');
      this.$refs.flickity.previous();
      this.checkState();
    },
    checkState() {
      this.checkNextState();
      this.checkPreviousState();
    },
    checkNextState() {
      this.isNextButtonEnabled = this.$refs.flickity.selectedIndex()
      < this.$refs.flickity.slides().length - 1;
    },
    checkPreviousState() {
      this.isPreviousButtonEnabled = this.$refs.flickity.selectedIndex() > 0;
    },
  },
};
