import { Album } from '../types/album';

const facePlasticAlbum: Album = {
  id: 'faceplastic-albums',
  title: 'Підтяжка обличча: результати до та після',
  description: 'Галерея результатів операцій припідтяжці обличчя.',
  images: [
    {
      src: '/images/faceplastic-album/face-lifting.jpg',
      alt: 'Результат підтяжки обдичча 1',
    },
    {
      src: '/images/faceplastic-album/face-lifting1.jpg',
      alt: 'Результат Результат підтяжки обдичча 2',
    },
    {
      src: '/images/faceplastic-album/face-lifting2.jpg',
      alt: 'Результат Результат підтяжки обдичча 3',
    },
  ],
  initialLikes: 150,
};

export default facePlasticAlbum;
