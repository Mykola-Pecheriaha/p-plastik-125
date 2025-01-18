export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
  initialLikes: number;
}
