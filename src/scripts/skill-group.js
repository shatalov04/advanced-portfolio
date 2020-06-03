/* eslint-disable global-require */
import Skill from './skill';

export default {
  template: '#skill-group-template',
  props: ['skillGroup'],
  components: {
    Skill,
  },
};
