import type { Album } from '../types/album';

const faceLiftAugmentationAlbums: Album[] = [
  {
    id: 'face-lift-1',
    title: 'Підтяжка обличчя: Галерея 1',
    description: 'Результати операцій з підтяжки обличчя.',
    images: [
      {
        src: '/images/faceplastic-album/face-lifting.jpg',
        alt: 'Результат підтяжки обличчя 1',
      },
      {
        src: '/images/faceplastic-album/facelift2.jpg',
        alt: 'Результат підтяжки обличчя 2',
      },
      {
        src: '/images/faceplastic-album/facelift3.jpg',
        alt: 'Результат підтяжки обличчя 3',
      },
    ],
    initialLikes: 130,
  },
  {
    id: 'face-lift-2',
    title: 'Підтяжка обличчя: Галерея 2',
    description: 'Приклади корекції зони шиї та підборіддя.',
    images: [
      {
        src: '/images/faceplastic-album/face-lifting1.jpg',
        alt: 'Результат підтяжки шиї 1',
      },
      {
        src: '/images/faceplastic-album/face-lifting1.jpg',
        alt: 'Результат підтяжки шиї 2',
      },
      {
        src: '/images/faceplastic-album/necklift3.jpg',
        alt: 'Результат підтяжки шиї 3',
      },
    ],
    initialLikes: 110,
  },
  {
    id: 'face-lift-3',
    title: 'Підтяжка обличчя: Галерея 3',
    description: 'Комплексні результати омолодження обличчя.',
    images: [
      {
        src: '/images/faceplastic-album/face-lifting2.jpg',
        alt: 'Комплексний результат 1',
      },
      {
        src: '/images/faceplastic-album/complexlift2.jpg',
        alt: 'Комплексний результат 2',
      },
      {
        src: '/images/faceplastic-album/complexlift3.jpg',
        alt: 'Комплексний результат 3',
      },
    ],
    initialLikes: 140,
  },
];

export default faceLiftAugmentationAlbums;
