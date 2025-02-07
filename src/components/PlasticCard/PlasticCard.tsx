import React, { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import { Heart } from 'lucide-react';
import styles from './PlasticCard.module.css';

interface PlasticCardProps {
  imageUrl: string;
  initialLikes: number;
  id: string;
  category: string;
}

const PlasticCard: React.FC<PlasticCardProps> = ({
  imageUrl,
  initialLikes,
  id,
  category,
}) => {
  const [likes, setLikes] = useState(initialLikes);

  useEffect(() => {
    const storedLikes = localStorage.getItem(`plasticLikes_${category}_${id}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [id, category]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`plasticLikes_${category}_${id}`, newLikes.toString());
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt="Результат пластичної операції"
          width={360}
          height={150}
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

export default PlasticCard;
