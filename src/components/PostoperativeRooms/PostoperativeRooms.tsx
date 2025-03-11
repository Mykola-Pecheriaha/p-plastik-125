'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './PostoperativeRooms.module.css';

interface PostoperativeRoomsProps {
  backgroundColor?: string;
}

const PostoperativeRooms: React.FC<PostoperativeRoomsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  // Масив зображень для галереї
  const galleryImages = [
    '/images/PostoperativeRooms/room.jpg',
    '/images/PostoperativeRooms/room.jpg',
    '/images/PostoperativeRooms/room.jpg',
    '/images/PostoperativeRooms/room.jpg',
  ];

  return (
    <div className={styles.postoperativeRooms} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Затишна палата</h2>
            <div className={styles.description}>
              <p>
                Ми знаємо, що приїхавши до клініки, хочеться почувати себе як
                вдома. Саме тому для наших пацієнток ми підготували палати із
                затишним інтерєром, де можна відпочити після операції.
              </p>
              <p>
                У Vidnova Clinic ви відчуєте зручність та комфорт, а приємний
                медичний персонал і затишна атмосфера додадуть вам приємного
                настрою після хірургічного втручання.
              </p>
            </div>
          </div>

          <div className={styles.gallerySection}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="postoperative-rooms-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostoperativeRooms;
