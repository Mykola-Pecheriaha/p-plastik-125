export interface Album {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  initialLikes: number;
}
