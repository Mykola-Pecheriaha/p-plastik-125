import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './OperativesSection.module.css';

interface OperativeCategory {
  title: string;
  image: string;
  slug: string;
}

const operativeCategories: OperativeCategory[] = [
  {
    title: 'Операційна',
    image: '/images/Operative/operromm1.png',
    slug: 'operative-room',
  },
  {
    title: 'Підготовка до операції',
    image: '/images/Operative/resultbreast.jpg',
    slug: 'preparation-surgery',
  },
  {
    title: 'Післяопераційні моменти',
    image: '/images/Operative/resultbreast2.jpg',
    slug: 'postoperative-moments',
  },
  {
    title: 'Реабілітація',
    image: '/images/Operative/resultbreast3.jpg',
    slug: 'rehabilitation',
  },
];

const OperativesSection: React.FC = () => {
  return (
    <div className={styles.operativesSection}>
      <div className={styles.cardContainer}>
        {operativeCategories.map((category, index) => (
          <Link
            href={`/operative/${category.slug}`} // Виправлений шлях!
            key={index}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <Image
                src={category.image || '/placeholder.svg'}
                alt={category.title}
                width={200}
                height={200}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <p className={styles.description}>
        У нашій клініці ми пропонуємо широкий спектр послуг з пластичної
        хірургії. Наші досвідчені хірурги використовують найсучасніші технології
        та методики, щоб забезпечити найкращі результати для наших пацієнтів. Ми
        пишаємося тим, що допомагаємо людям досягти бажаного зовнішнього вигляду
        та підвищити їхню впевненість у собі. Перегляньте наші результати, щоб
        побачити, яких змін ми можемо досягти.
      </p>
    </div>
  );
};

export default OperativesSection;
