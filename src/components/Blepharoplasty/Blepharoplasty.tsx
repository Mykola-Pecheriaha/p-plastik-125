'use client';

import type React from 'react';
import Image from "next/legacy/image";
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import styles from './Blepharoplasty.module.css';

interface BlepharoplastyProps {
  backgroundColor?: string;
}

const Blepharoplasty: React.FC<BlepharoplastyProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const galleryImages = [
    '/images/blepharoplasty/blefaro4.jpg',
    '/images/blepharoplasty/blefaro6.jpg',
    '/images/blepharoplasty/blefaro4.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.subtitle}>Блефаропластика</h2>
            <h1 className={styles.title}>пластика повік</h1>
            <ul className={styles.benefits}>
              <li>
                <ArrowRight size={16} /> Швидка реабілітація
              </li>
              <li>
                <ArrowRight size={16} /> Без слідів від операції
              </li>
              <li>
                <ArrowRight size={16} /> Результат на 10-15 років
              </li>
            </ul>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/blepharoplasty/blefaro3-removebg-preview.png"
              alt="Блефаропластика"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <CardsPrimma />

        <p className={styles.description}>
          Пластика повік (блефаропластика) – одна з найпопулярніших пластичних
          операцій, що омолоджують. Вона ефективно усуває перші вікові зміни в
          періорбітальній ділянці та повертає очам чарівність та привабливість.
        </p>
        <p className={styles.description}>
          Блефаропластика передбачає видалення навислої шкіри, «мішків» під
          очами та часткове усунення зморшок. Після операції ваші очі будуть
          випромінювати сяйво та молодість!
        </p>

        <div className={styles.examples}>
          <div className={styles.examplesContent}>
            <h2 className={styles.examplesTitle}>Приклади робіт До-Після</h2>
            <ul className={styles.examplesList}>
              <li>
                Без шрамів (можлива трансконʼюктивальна блефаропластика за
                показаннями)
              </li>
              <li>Мінімальний термін реабілітації до 30 днів</li>
              <li>Усунення «мішків» під очима</li>
              <li>Корекція зморшок та вікових змін</li>
              <li>Корекція жирових надлишків (псевдогриж)</li>
            </ul>
          </div>
          <div className={styles.examplesGallery}>
            <h4 className={styles.galleryTitle}>Блефаропластика</h4>
            <PrimmaGallery
              images={galleryImages}
              galleryId="blepharoplasty-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blepharoplasty;
