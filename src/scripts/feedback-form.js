import SimpleVueValidation from 'simple-vue-validator';

const { Validator } = SimpleVueValidation;

export default {
  template: '#feedback-form-template',
  mixins: [SimpleVueValidation.mixin],
  data() {
    return {
      username: '',
      email: '',
      message: '',
      isUsernameActive: false,
      isEmailActive: false,
      isMessageActive: false,
    };
  },
  props: ['icon', 'label'],
  validators: {
    username(value) {
      return Validator.value(value).required();
    },
    email(value) {
      return Validator.value(value)
        .required()
        .email();
    },
    message(value) {
      return Validator.value(value)
        .required()
        .minLength(15);
    },
  },
  computed: {},
  components: {},
  methods: {
    handleSubmit() {
      this.$validate().then((success) => {
        if (success) {
          alert('Валидация прошла успешно!');
          this.validation.reset();
        }
      });
    },
    handleInput() {},
    handleFocus(control) {
      switch (control) {
        case 'email':
          this.isEmailActive = true;
          break;
        case 'username':
          this.isUsernameActive = true;
          break;
        case 'message':
          this.isMessageActive = true;
          break;
        default:
          break;
      }
    },
    handleBlur(control) {
      switch (control) {
        case 'email':
          this.isEmailActive = false;
          break;
        case 'username':
          this.isUsernameActive = false;
          break;
        case 'message':
          this.isMessageActive = false;
          break;
        default:
          break;
      }
    },
  },
};
