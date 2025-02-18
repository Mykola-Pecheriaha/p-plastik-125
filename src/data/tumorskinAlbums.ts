import { Album } from '../types/album';
const tumorskinAlbums: Album[] = [
  {
    id: 'tumors-skin-1',
    title: 'Видалення атером : Галерея 1',
    description:
      'Результати операцій з видаленням істенної  гінекомастії у хворого.',
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
    id: 'tumors-skin-2',
    title: 'Видалення невусів: Галерея 2',
    description: 'Результати операцій з видаленням хибної гінекомастії.',
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
    id: 'tumors-skin-3',
    title: 'Видалення ліпом: Галерея 3',
    description: 'Результати операцій з видаленням гінекомастії.',
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
export default tumorskinAlbums;
