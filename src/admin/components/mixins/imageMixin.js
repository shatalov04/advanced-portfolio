import { renderer, getAbsoluteImgPath } from '../../shared/pictures';

const imageMixin = {
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.renderedPhoto})`,
      };
    },
    isPhotoLoaded() {
      return this.renderedPhoto !== null;
    },
  },
  methods: {
    async setPhoto(photo) {
      if (photo === undefined) {
        this.renderedPhoto = null;
        return;
      }
      if (typeof photo === 'object') {
        try {
          this.renderedPhoto = await renderer(photo);
        } catch (error) {
          console.error(error);
        }
      } else if (photo.length > 0) {
        this.renderedPhoto = getAbsoluteImgPath(photo);
      }
    },
  },
};

export default imageMixin;
