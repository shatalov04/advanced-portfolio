import IconedButton from './iconed-button.vue';
import Icon from '../Icon.vue';
import '../../../styles/main-admin.pcss';
import { bgGreyDecorator } from '../../../../.storybook/decorators';

export default {
  title: 'Iconed Button',
  decorators: [bgGreyDecorator],
};

export const plus = () => ({
  components: { IconedButton, Icon },
  template: `
    <iconed-button>
      <icon class="iconed-button__icon" name="plus">
    <iconed-button>
  `,
});

plus.story = {
  name: 'Добавление',
};
