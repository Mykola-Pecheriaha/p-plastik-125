'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Heart } from 'lucide-react';
import styles from './BreastPlasticCard.module.css';

interface BreastPlasticCardProps {
  imageUrl: string;
  initialLikes: number;
  id: string;
  size?: 'small' | 'medium' | 'large';
}

const BreastPlasticCard: React.FC<BreastPlasticCardProps> = ({
  imageUrl,
  initialLikes,
  id,
  size = 'large',
}) => {
  const [likes, setLikes] = useState(initialLikes);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`breastPlasticLikes_${id}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [id]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`breastPlasticLikes_${id}`, newLikes.toString());
  };

  return (
    <div className={`${styles.card} ${styles[size]}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt="Результат пластики грудей"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.likeBar}>
        <span className={styles.likeCount}>{likes}</span>
        <Heart className={styles.heartIcon} onClick={handleLike} />
      </div>
    </div>
  );
};

export default BreastPlasticCard;
