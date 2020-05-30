/* eslint-disable no-plusplus */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import { baseUrl } from '../admin/shared/constants.json';

const previews = {
  template: '#previews-template',
  data() {
    return {
      previewsWithPaths: [],
    };
  },
  props: ['selectedWork', 'previews'],
};
const buttons = {
  template: '#buttons-template',
  props: ['isNextDisabled', 'isPreviousDisabled'],
};

const workView = {
  template: '#work-view-template',
  props: ['selectedWork', 'previews', 'isNextDisabled', 'isPreviousDisabled'],
  components: {
    buttons,
    previews,
  },
};

const workSlider = {
  template: '#work-slider-template',
  props: [
    'selectedWork',
    'previews',
    'workIndex',
    'isNextDisabled',
    'isPreviousDisabled',
  ],
  components: {
    workView,
  },
  computed: {
    work() {
      return { ...this.selectedWork };
    },
  },
};

const tags = {
  template: '#tags-template',
  props: ['tags'],
};

const workInfo = {
  template: '#work-info-template',
  props: ['selectedWork'],
  components: {
    tags,
  },
  computed: {
    work() {
      return { ...this.selectedWork };
    },
  },
};

export default {
  template: '#works-template',
  data() {
    return {
      works: [],
      selectedIndex: 0,
      isNextButtonEnabled: true,
      isPreviousButtonEnabled: false,
    };
  },
  props: ['previewsQuantity', 'worksFetched'],
  computed: {
    selectedWork() {
      return this.works[this.selectedIndex];
    },
    workIndex() {
      return this.selectedIndex + 1;
    },
    previews() {
      return this.filterWorksForPreview();
    },
    isNextDisabled() {
      return !this.isNextButtonEnabled;
    },
    isPreviousDisabled() {
      return !this.isPreviousButtonEnabled;
    },
  },
  components: {
    workSlider,
    workInfo,
  },
  methods: {
    transformImagePaths(array) {
      const works = [...array];

      return works.map((work) => {
        // const requiredImage = require(`../images/${i.image}`);
        // eslint-disable-next-line no-param-reassign
        work.photo = `${baseUrl}${work.photo}`;

        return work;
      });
    },
    filterWorksForPreview() {
      const { previewsQuantity } = this;
      const selectedIndexes = [...this.getFilteredIndexes(previewsQuantity)];
      const reversedIndexes = selectedIndexes.reverse();

      const result = reversedIndexes.map((i) => ({
        id: this.works[i].id,
        photo: this.works[i].photo,
        index: i,
      }));

      return result;
    },
    getFilteredIndexes(filterQuantity) {
      const { works, selectedIndex, lastIndex } = this.getIndexesData();

      if (works.length <= filterQuantity) {
        return works.map((w, i) => i);
      }

      if (selectedIndex < filterQuantity - 1) {
        return [...Array(filterQuantity).keys()];
      }

      if (selectedIndex > lastIndex - filterQuantity + 1) {
        return [...Array(filterQuantity).keys()]
          .map((i) => lastIndex - i)
          .reverse();
      }

      let minIndex = 0;
      let maxIndex = 0;

      if (this.isEven(filterQuantity)) {
        const halfOfQuantity = filterQuantity / 2;
        minIndex = selectedIndex - halfOfQuantity + 1;
        maxIndex = selectedIndex + halfOfQuantity;
      } else {
        const halfOfQuantity = (filterQuantity - 1) / 2;
        minIndex = selectedIndex - halfOfQuantity;
        maxIndex = selectedIndex + halfOfQuantity;
      }

      const result = [];

      for (let i = minIndex; i <= maxIndex; i++) {
        result.push(i);
      }

      return result;
    },
    getIndexesData() {
      return {
        selectedIndex: this.selectedIndex,
        works: [...this.works],
        lastIndex: this.works.length - 1,
      };
    },
    isEven(value) {
      return value % 2 === 0;
    },
    handleSlide(direction) {
      switch (direction) {
        case 'next':
          this.handleNext();
          break;
        case 'previous':
          this.handlePrevious();
          break;
        default:
          break;
      }
    },
    handleSelect(index) {
      this.selectedIndex = index;
      this.checkState();
    },
    handleNext() {
      this.selectedIndex++;
      this.checkState();
    },
    handlePrevious() {
      this.selectedIndex--;
      this.checkState();
    },
    checkState() {
      this.checkNextState();
      this.checkPreviousState();
    },
    checkNextState() {
      this.isNextButtonEnabled = this.selectedIndex < this.works.length - 1;
    },
    checkPreviousState() {
      this.isPreviousButtonEnabled = this.selectedIndex > 0;
    },
  },
  watch: {
    worksFetched(newValue) {
      this.works = this.transformImagePaths(newValue);
    },
  },
};
