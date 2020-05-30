/* eslint-disable global-require */
import SkillGroup from './skill-group';

export default {
  template: '#skills-template',
  data() {
    return {};
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  components: {
    SkillGroup,
  },
};
