import type React from 'react';
import Card from '../Cards/Cards';
import { cardsData } from '../../data/cardsDataWithLinks';
import styles from './CardsPrimma.module.css';

const CardsPrimma: React.FC = () => {
  return (
    <div className={styles.cardsPrimmaContainer}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          linkUrl={card.linkUrl}
        />
      ))}
    </div>
  );
};

export default CardsPrimma;
