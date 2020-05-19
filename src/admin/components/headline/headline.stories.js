import { action } from '@storybook/addon-actions';
import user from '../user';
import headline from './headline.vue';
import '../../../styles/main-admin.pcss';

import { bgGreyDecorator } from '../../../../.storybook/decorators';

const methods = {
  onLogout: action('onLogout'),
};

export default {
  title: 'Headline',
  decorators: [bgGreyDecorator],
};

export const defaultView = () => ({
  components: { headline },
  methods,
  template: `
    <headline 
    @logout = "onLogout"
    />
  `,
});

export const withContent = () => ({
  components: { headline, user },
  methods,
  template: `
    <headline @logout = "onLogout">
      <user 
      name = "Розлив Пиваса"
      image = "content/avatar.jpg"
      />
    </headline>
  `,
});

defaultView.story = {
  name: 'По умолчанию',
};
withContent.story = {
  name: 'C контентом',
};
