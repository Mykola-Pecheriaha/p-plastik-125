import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import styles from './AboutDoctorSection.module.css';

interface AboutDoctorCategory {
  title: string;
  image: string;
  slug: string;
}

const aboutDoctorCategories: AboutDoctorCategory[] = [
  {
    title: 'Про нас',
    image: '/images/about-doctor/about-us.jpg',
    slug: 'about-us',
  },
  {
    title: 'Портфоліо Печеряги М.М',
    image: '/images/portfolio/portfolio3.jpg',
    slug: 'portfolio-pecheriaha',
  },
  {
    title: 'Запитати лікаря',
    image: '/images/about-doctor/ask-doctor.jpg',
    slug: 'ask-doctor',
  },

  {
    title: 'Контакти',
    image: '/images/about-doctor/contacts.jpg',
    slug: 'contacts',
  },
  {
    title: 'Відгуки',
    image: '/images/about-doctor/reviews.jpg',
    slug: 'reviews',
  },
  { title: 'Команда', image: '/images/about-doctor/team.jpg', slug: 'team' },
  {
    title: 'Корисна інформація',
    image: '/images/about-doctor/useful-information.jpg',
    slug: 'useful-information',
  },
];

const AboutDoctorSection: React.FC = () => {
  return (
    <div className={styles.aboutDoctorSection}>
      <p className={styles.description}>
        Наш лікар - висококваліфікований спеціаліст з багаторічним досвідом у
        галузі пластичної хірургії. Він постійно вдосконалює свої навички,
        відвідуючи міжнародні конференції та семінари. Наша команда складається
        з професіоналів, які забезпечують найвищий рівень догляду за пацієнтами.
        Ми пишаємося нашими результатами та відгуками задоволених клієнтів. Якщо
        у вас є питання або ви хочете дізнатися більше про наші послуги, не
        соромтеся звертатися до нас або переглянути корисну інформацію на нашому
        сайті.
      </p>
      <div className={styles.cardContainer}>
        {aboutDoctorCategories.map((category, index) => (
          <Link
            href={`/about-doctor/${category.slug}`}
            key={index}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <Image
                src={category.image || '/placeholder.svg'}
                alt={category.title}
                width={150}
                height={200}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <p className={styles.description}>
        Наш лікар - висококваліфікований спеціаліст з багаторічним
      </p>
    </div>
  );
};

export default AboutDoctorSection;
