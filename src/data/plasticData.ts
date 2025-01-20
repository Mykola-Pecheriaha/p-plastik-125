export interface PlasticItem {
  id: string;
  imageUrl: string;
  title: string;
  likes: number;
  albumLink: string;
}

export interface PlasticData {
  [key: string]: PlasticItem[];
}

const plasticData: PlasticData = {
  breast: [
    {
      id: 'breast-augmentation',
      imageUrl: '/images/breast-augmento/augmentatio2.jpg',
      title: 'Збільшення грудей: результати до та після',
      likes: 180,
      albumLink: '/albums/breast-augmentation',
    },
    {
      id: 'breast-lift',
      imageUrl: '/images/breast-plastic/lift.jpg',
      title: 'Підтяжка грудей: результати до та після',
      likes: 120,
      albumLink: '/albums/breast-lift',
    },
    {
      id: 'breast-reduction',
      imageUrl: '/images/breast-plastic/reduction.jpg',
      title: 'Зменшення грудей: результати до та після',
      likes: 95,
      albumLink: '/albums/breast-reduction',
    },
  ],
  face: [
    {
      id: 'face-lift',
      imageUrl: '/images/face-plastic/facelifting1.jpg',
      title: 'Підтяжка обличчя: результати до та після',
      likes: 150,
      albumLink: '/albums/face-lift',
    },
    {
      id: 'rhinoplasty',
      imageUrl: '/images/face-plastic/rhinoplasty.jpg',
      title: 'Ринопластика: результати до та після',
      likes: 130,
      albumLink: '/albums/rhinoplasty',
    },
    {
      id: 'blepharoplasty',
      imageUrl: '/images/face-plastic/blepharoplasty.jpg',
      title: 'Блефаропластика: результати до та після',
      likes: 110,
      albumLink: '/albums/blepharoplasty',
    },
  ],
};

export default plasticData;
