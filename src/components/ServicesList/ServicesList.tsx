import React from 'react';
import Image from 'next/legacy/image';
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
    image: '/images/services/breast-augment/board-augmentation.jpg',
    slug: 'breast-surgery',
    services: [
      { name: 'Збільшення грудей', slug: 'breast-augmentation' },
      { name: 'Видалення грудних імплантів', slug: 'breast-implant-removal' },
      {
        name: 'Заміна грудних імплантів',
        slug: 'breast-implant-replacement-Page',
      },
      { name: 'Гінекомастія', slug: 'ginecomastiya' },
      {
        name: 'Корекція асиметрії грудей',
        slug: 'breast-asymmetry-correction',
      },
    ],
  },
  {
    title: 'Пластика тіла',
    image: '/images/services/body-surgery/conturBoda1-removebg-preview.png',
    slug: 'body-surgery',
    services: [
      { name: 'Абдомінопластика', slug: 'abdominoplasty' },
      { name: 'Ліпосакція', slug: 'liposuction' },
      { name: 'Пластика ніг', slug: 'leg-plastic' },
      { name: 'Видалення шийного горба', slug: 'liposuction' },
      { name: 'Збільшення сідниць', slug: 'buttock-augmentation' },
    ],
  },
  {
    title: 'Пластика обличчя',
    image: '/images/services/face-surgery/face-lift1-removebg-preview.png',
    slug: 'face-surgery',
    services: [
      { name: 'Підтяжка обличчя та шиї', slug: 'face-lift' },
      { name: 'Блефаропластика', slug: 'blefaro-plastic' },
      { name: 'Пластика підборіддя', slug: 'chino-surgery' },
      { name: 'Корекція клаповухості', slug: 'flap-correction' },
      { name: 'Пластика дольки вуха', slug: 'flap-correction' },
    ],
  },
  {
    title: 'Загальна хірургія',
    image: '/images/services/general-surgery/bodiContur4.jpg',
    slug: 'general-surgery',
    services: [
      { name: 'Видалення пухлин', slug: 'tumor-removal' },
      { name: 'Карпальний канал', slug: 'carpal-tunnel' },
      { name: 'Видалення гриж', slug: 'gerniotomiya' },
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
