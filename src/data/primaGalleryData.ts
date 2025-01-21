export interface GalleryItem {
  id: string;
  title: string;
  images: string[];
}

export const primmaGalleryData: GalleryItem[] = [
  {
    id: 'breast-augmentation',
    title: 'Збільшення грудей',
    images: [
      '/images/breast-augmento/augmentatio1.jpg',
      '/images/breast-augmento/augmentatio2.jpg',
      '/images/breast-augmento/augmentatio3.jpg',
      // '/images/breast-augmento/augmentatio4.jpg',
      // '/images/breast-augmento/augmentatio5.jpg',
    ],
  },
  // Додайте інші галереї тут, якщо потрібно
];
