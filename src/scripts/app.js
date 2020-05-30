import axios from './requests';
import { userId } from '../admin/shared/constants.json';

export default {
  el: '#app',
  data() {
    return {
      yells: [],
      categories: [],
      works: [],
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
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await axios.get(`/categories/${userId}`);
        this.categories = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchWorks() {
      try {
        const { data } = await axios.get(`/works/${userId}`);
        this.works = data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchYells() {
      try {
        const { data } = await axios.get(`/reviews/${userId}`);
        this.yells = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
  async created() {
    await this.fetchYells();
    await this.fetchCategories();
    await this.fetchWorks();
  },
};
