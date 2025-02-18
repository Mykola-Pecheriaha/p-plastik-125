import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './ResultsSection.module.css';

interface ResultCategory {
  title: string;
  image: string;
  slug: string;
}

const resultCategories: ResultCategory[] = [
  {
    title: 'Пластика тіла',
    image: '/images/results/result.jpg',
    slug: 'body-plastic',
  },
  {
    title: 'Пластика грудей',
    image: '/images/results/resultbreast.jpg',
    slug: 'breast-plastic',
  },
  {
    title: 'Пластика обличчя',
    image: '/images/results/resultbreast2.jpg',
    slug: 'face-plastic',
  },
  {
    title: 'Пластика вух',
    image: '/images/results/resultbreast3.jpg',
    slug: 'otto-plastic',
  },
  {
    title: 'Видалення пухлин шкіри',
    image: '/images/results/resultbreast5.jpg',
    slug: 'tumors-skin',
  },
];

const ResultsSection: React.FC = () => {
  return (
    <div className={styles.resultsSection}>
      <div className={styles.cardContainer}>
        {resultCategories.map((category, index) => (
          <Link
            href={`/results/${category.slug}`}
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

export default ResultsSection;
