import user from './user.vue';
import '../../../styles/main-admin.pcss';
import { bgGreyDecorator } from '../../../../.storybook/decorators';

export default {
  title: 'User',
  decorators: [bgGreyDecorator],
};

export const defaultView = () => ({
  components: { user },
  template: `
    <user 
      name = "Розлив Пиваса"
      image = "content/avatar.jpg"
    />
  `,
});

export const withOccupation = () => ({
  components: { user },
  template: `
    <user 
      name = "Розлив Пиваса"
      image = "content/avatar.jpg"
      occupation = "бармен"
    />
  `,
});

defaultView.story = {
  name: 'По умолчанию',
};
withOccupation.story = {
  name: 'C должностью',
};
