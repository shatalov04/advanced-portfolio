export default {
  el: '#app',
  data: {
    sections: [
      {
        id: 'main',
        desc: 'Главная',
      },
      {
        id: 'about',
        desc: 'Обо мне',
      },
      {
        id: 'skills',
        desc: 'Навыки',
      },
      {
        id: 'works',
        desc: 'Главная',
      },
      {
        id: 'yells',
        desc: 'Отзывы',
      },
      {
        id: 'feedback',
        desc: 'Связаться',
      },
    ],
  },
  methods: {
    handleScroll(elementId, e) {
      const element = document.querySelector(`#${elementId}`);
      console.log('element :>> ', element);
      const elementTop = element.clientTop;
      console.log('elementTop :>> ', elementTop);
    },
  },
};
