import { Album } from '../types/album';

const breastAugmentationAlbum: Album = {
  id: 'breast-augmentation',
  title: 'Збільшення грудей: результати до та після',
  description: 'Галерея результатів операцій зі збільшення грудей.',
  images: [
    {
      src: '/images/breast-albums/augmentation-1.jpg',
      alt: 'Результат збільшення грудей 1',
    },
    {
      src: '/images/breast-albums/augmentation-2.jpg',
      alt: 'Результат збільшення грудей 2',
    },
    {
      src: '/images/breast-albums/augmento1.jpg',
      alt: 'Результат збільшення грудей 3',
    },
  ],
  initialLikes: 150,
};

export default breastAugmentationAlbum;
