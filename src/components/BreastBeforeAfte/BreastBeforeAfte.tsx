'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastBeforeAfte.module.css';
import type React from 'react';

interface BreastBeforeAfteProps {
  backgroundColor?: string;
}

const BreastBeforeAfte: React.FC<BreastBeforeAfteProps> = ({
  backgroundColor = '#A3C9F0FF',
}) => {
  const features = [
    'Підхід з пахви без шрамів за італійським протоколом',
    'Корекція асиметрії',
    'Індивідуальний підбір імплантів для бажаного обʼєму',
    'Сучасні імплантати від світових виробників, що не потребують заміни',
    'Комплект білизни для реабілітації у подарунок',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.breastBeforeAfte} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>Приклади робіт До-Після</h2>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.rightContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-before-after-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastBeforeAfte;
