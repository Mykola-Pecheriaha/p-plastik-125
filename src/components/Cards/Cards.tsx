'use client';

import type React from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/navigation';
import styles from './Cards.module.css';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
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
  const router = useRouter();

  const handleClick = () => {
    if (linkUrl) {
      router.push(linkUrl);
    }
  };

  const CardContent = (
    <div
      className={`${styles.card} ${customStyles.card || ''} ${layout === 'horizontal' ? styles.cardHorizontal : ''}`}
      onClick={handleClick}
      style={{ cursor: linkUrl ? 'pointer' : 'default' }}
    >
      <Image
        src={imageUrl || '/placeholder.svg'}
        alt={title}
        width={100}
        height={100}
        className={styles.cardImage}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );

  return linkUrl ? <Link href={linkUrl}>{CardContent}</Link> : CardContent;
};

export default Card;
