import { baseUrl } from './constants.json';

export const renderer = (file) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    try {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    } catch (error) {
      throw new Error('Ошибка при чтении файла');
    }
  });
};

export const getAbsoluteImgPath = (imgPath) => `${baseUrl}/${imgPath}`;
