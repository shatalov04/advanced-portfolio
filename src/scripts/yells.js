/* eslint-disable prettier/prettier */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import Flickity from 'vue-flickity';
import { baseUrl } from '../admin/shared/constants.json';

export default {
  template: '#yells-template',
  data() {
    return {
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
      yells: [],
      buttonClass: 'double-slider__button',
      isNextButtonEnabled: true,
      isPreviousButtonEnabled: false,
    };
  },
  props: ['yellsFetched'],
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
    transformPathsInArray(array) {
      return array.map((yell) => {
        // eslint-disable-next-line no-param-reassign
        yell.photo = `${baseUrl}${yell.photo}`;

        return yell;
      });
    },
    handleNext() {
      this.$refs.flickity.next();
      this.checkState();
    },
    handlePrevious() {
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
  watch: {
    yellsFetched(newValue) {
      this.yells = this.transformPathsInArray(newValue);
      this.$nextTick(function () { this.$refs.flickity.rerender(); });
    },
  },
};
