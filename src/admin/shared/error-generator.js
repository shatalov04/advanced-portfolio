const errorGenerator = {
  sendError: (errorObj) => {
    const errorResponseObject = errorObj.response.data;

    console.log('errorObj :>> ', errorObj);

    if (errorResponseObject.message) {
      console.log(errorResponseObject);
      switch (errorResponseObject.message) {
        case 'The given data was invalid.':
          throw new Error('Ошибка валидации');
        default:
          console.error(errorResponseObject);
          throw new Error(errorResponseObject.message);
      }
    }

    if (errorResponseObject.error) {
      console.log(errorResponseObject);

      switch (errorResponseObject.error) {
        case 'token_not_provided':
          throw new Error('Токен авторизации не предоставлен');

        case 'token_expired':
          throw new Error('Токен авторизации просрочен');

        case 'Неверное имя или пароль':
          throw new Error('Неверное имя или пароль');
        default:
          console.error(errorResponseObject);
          throw new Error(errorResponseObject.error);
      }
    }
  },
};

export default errorGenerator;
