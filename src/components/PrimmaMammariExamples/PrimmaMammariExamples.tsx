import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import { primmaGalleryData } from '../../data/primaGalleryData';
import styles from './PrimmaMammariExamples.module.css';

const PrimmaMammariExamples: React.FC = () => {
  const breastAugmentationData = primmaGalleryData.find(
    (item) => item.id === 'breast-augmentation'
  );

  if (!breastAugmentationData) {
    return <div>Дані не знайдено</div>;
  }

  return (
    <div className={styles.primmaMammariExamples}>
      <div className={styles.containerExamples}>
        <div className={styles.examplesText}>
          <h1>ЗБІЛЬШЕННЯ МОЛОЧНИХ ЗАЛОЗ</h1>
          <div className={styles.subTitle}>
            <ul>
              <li>Корекція асиметрії</li>
              <li>Індивідуальний підбір імплантів для бажаного обʼєму</li>
              <li>
                Сучасні імплантати від світових виробників, що не потребують
                заміни
              </li>
              <li>Комплект білизни для реабілітації у подарунок</li>
            </ul>
          </div>
        </div>

        <div className={styles.bigImage}>
          <h2 className={styles.examplesTitle}>
            {breastAugmentationData.title}
          </h2>
          <PrimmaGallery
            images={breastAugmentationData.images}
            galleryId={breastAugmentationData.id}
          />
        </div>
      </div>
    </div>
  );
};

export default PrimmaMammariExamples;
