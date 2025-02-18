import { Album } from '../types/album';
const ottoplasticAlbum: Album[] = [
  {
    id: 'otto-plastic-1',
    title: 'Корекція зовнішнього вуха: Галерея 1',
    description: 'Корекція пацієнта № 1.',
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
    id: 'otto-plastic-2',
    title: 'Корекція вушних раковин: Галерея 2',
    description: 'Приклади корекції асиметрії вушних.',
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
    id: 'otto-plastic-3',
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
export default ottoplasticAlbum;
