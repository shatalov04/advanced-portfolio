/* eslint-disable global-require */

export default {
  template: '#skill-template',
  data() {
    return {
    };
  },
  props: ['skill'],
  computed: {
    percent() {
      return `${this.skill.percent} 100`;
    },
  },
  mounted() {
  },
};
