import { Album } from '../types/album';

const breastAugmentationAlbums: Album[] = [
  {
    id: 'breast-augmentation-1',
    title: 'Збільшення грудей: Галерея 1',
    description:
      'Результати операцій зі збільшення грудей за допомогою імплантів.',
    images: [
      {
        src: '/images/breast-albums/augmento1.jpg',
        alt: 'Результат збільшення грудей 1',
      },
      {
        src: '/images/breast-albums/face-lifting4.jpg',
        alt: 'Результат збільшення грудей 2',
      },
      {
        src: '/images/breast-albums/breast-augment2.jpg',
        alt: 'Результат збільшення грудей 3',
      },
    ],
    initialLikes: 150,
  },
  {
    id: 'breast-augmentation-2',
    title: 'Збільшення грудей: Галерея 2',
    description: 'Приклади корекції асиметрії грудей за допомогою збільшення.',
    images: [
      {
        src: '/images/breast-albums/augmento2.jpg',
        alt: 'Корекція асиметрії 1',
      },
      {
        src: '/images/breast-albums/augmento3.jpg',
        alt: 'Корекція асиметрії 2',
      },
      {
        src: '/images/breast-albums/augmento4.jpg',
        alt: 'Корекція асиметрії 3',
      },
    ],
    initialLikes: 120,
  },
  {
    id: 'breast-augmentation-3',
    title: 'Збільшення грудей: Галерея 3',
    description:
      'Результати збільшення грудей з використанням комбінованих технік.',
    images: [
      {
        src: '/images/breast-albums/augmento5.jpg',
        alt: 'Комбінована техніка 1',
      },
      {
        src: '/images/breast-albums/augmento6.jpg',
        alt: 'Комбінована техніка 2',
      },
      {
        src: '/images/breast-albums/augmento7.jpg',
        alt: 'Комбінована техніка 3',
      },
    ],
    initialLikes: 180,
  },
];

export default breastAugmentationAlbums;
