/* eslint-disable global-require */
import SkillGroup from './skill-group';

export default {
  template: '#skills-template',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    SkillGroup,
  },
  created() {
    const data = require('../data/skills.json');

    this.skills = data;
  },
};
