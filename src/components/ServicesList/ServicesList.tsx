import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesList.module.css';

interface Service {
  name: string;
  slug: string;
}

interface ServiceCategory {
  title: string;
  image: string;
  slug: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Пластика грудей',
    image: '/images/services/breast.jpg',
    slug: 'breast-surgery',
    services: [
      { name: 'Збільшення грудей', slug: 'breast-augmentation' },
      { name: 'Зменшення грудей', slug: 'breast-reduction' },
      { name: 'Підтяжка грудей', slug: 'breast-lift' },
      { name: 'Корекція соска та ареоли', slug: 'nipple-areola-correction' },
      {
        name: 'Корекція асиметрії грудей',
        slug: 'breast-asymmetry-correction',
      },
    ],
  },
  {
    title: 'Пластика тіла',
    image: '/images/services/body.jpg',
    slug: 'body-surgery',
    services: [
      { name: 'Абдомінопластика', slug: 'abdominoplasty' },
      { name: 'Ліпосакція', slug: 'liposuction' },
      { name: 'Пластика ніг', slug: 'leg-surgery' },
      { name: 'Видалення шийного горба', slug: 'cervical-hump' },
      { name: 'Збільшення сідниць', slug: 'buttock-augmentation' },
    ],
  },
  {
    title: 'Пластика обличчя',
    image: '/images/services/face.jpg',
    slug: 'face-surgery',
    services: [
      { name: 'Підтяжка обличчя та шиї', slug: 'face-lift' },
      { name: 'Блефаропластика', slug: 'blepharoplasty' },
      { name: 'Пластика підборіддя', slug: 'chino-surgery' },
      { name: 'Корекція клаповухості', slug: 'flap-correction' },
      { name: 'Пластика дольки вуха', slug: 'lapp-otto' },
    ],
  },
  {
    title: 'Загальна хірургія',
    image: '/images/services/general.jpg',
    slug: 'general-surgery',
    services: [
      { name: 'Видалення пухлин', slug: 'tumor-removal' },
      { name: 'Карпальний канал', slug: 'carpal-tunnel' },
    ],
  },
];

const ServiceList: React.FC = () => {
  return (
    <div className={styles.serviceList}>
      <h1 className={styles.mainTitle}>Хірургічні послуги</h1>
      <div className={styles.categoriesContainer}>
        {serviceCategories.map((category, index) => (
          <div key={index} className={styles.category}>
            <Link
              href={`/services/${category.slug}`}
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <Image
                  src={category.image || '/placeholder.svg'}
                  alt={category.title}
                  width={200}
                  height={200}
                />
                <h2>{category.title}</h2>
              </div>
            </Link>
            <ul className={styles.serviceItems}>
              {category.services.map((service, serviceIndex) => (
                <li key={serviceIndex}>
                  <Link href={`/services/${category.slug}/${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
