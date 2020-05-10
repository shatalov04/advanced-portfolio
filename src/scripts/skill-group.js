/* eslint-disable global-require */
import Skill from './skill';

export default {
  template: '#skill-group-template',
  data() {
    return {
    };
  },
  props: ['skillGroup'],
  components: {
    Skill,
  },
};
