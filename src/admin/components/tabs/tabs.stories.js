import { action } from '@storybook/addon-actions';

import tabs from './tabs.vue';
import '../../../styles/main-admin.pcss';

const methods = {
  onTabChanged: action('onTabChanged'),
};
export default {
  title: 'Tabs',
};

export const defaultView = () => ({
  components: { tabs },
  methods,
  template: `
    <tabs 
    @tabChanged = "onTabChanged"
    />
  `,
});

defaultView.story = {
  name: 'По умолчанию',
};
