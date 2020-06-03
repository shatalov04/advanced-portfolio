import { mapActions } from 'vuex';

const imageMixin = {
  methods: {
    ...mapActions({
      sendMessage: 'message/sendMessage',
    }),
    sendError(error) {
      this.sendMessage({ message: error.message, type: 'error' });
    },
    sendWarning(message) {
      this.sendMessage({ message, type: 'warning' });
    },
    sendNotification(message) {
      this.sendMessage({ message, type: 'ok' });
    },
  },
};

export default imageMixin;
