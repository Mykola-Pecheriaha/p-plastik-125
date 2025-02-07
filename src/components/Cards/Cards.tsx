import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import styles from './Cards.module.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string; // linkUrl може бути необов'язковим
  layout?: 'vertical' | 'horizontal';
  customStyles?: {
    card?: string;
    cardImage?: string;
    cardTitle?: string;
    cardDescription?: string;
  };
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  layout = 'vertical',
  customStyles = {},
}) => {
  const CardContent = (
    <div
      className={`${styles.card} ${customStyles.card || ''} ${
        layout === 'horizontal' ? styles.cardHorizontal : ''
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className={`${styles.cardImage} ${customStyles.cardImage || ''}`}
      />
      <div className={styles.cardContent}>
        <h3 className={`${styles.cardTitle} ${customStyles.cardTitle || ''}`}>
          {title}
        </h3>
        <p
          className={`${styles.cardDescription} ${
            customStyles.cardDescription || ''
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  return linkUrl ? <Link href={linkUrl}>{CardContent}</Link> : CardContent;
};

export default Card;
