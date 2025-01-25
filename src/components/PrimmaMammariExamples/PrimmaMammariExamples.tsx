'use client';

import type React from 'react';
import { useEffect } from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import BreastProblemsCorrection from '../BreastProblemsCorrection/BreastProblemsCorrection';
import { primmaGalleryData } from '../../data/primaGalleryData';
import styles from './PrimmaMammariExamples.module.css';
import PlasticSurgeons from '../../components/PlasticSurgeons/PlasticSurgeons';
import ConsultationBreastAugmentation from '../../components/ConsultationBreastAugmentation/ConsultationBreastAugmentation';
import BlockAugmentBreastProcess from '../../components/BlockAugmentBreastProcess/BlockAugmentBreastProcess';
// import ClinicSurgical from '../../components/ClinicSurgical/ClinicSurgical';
// import BreastSizeProblem from '../../components/BreastSizeProblem/BreastSizeProblem';
// import BreastQuestion from '../../components/BreastQuestion/BreastQuestion';

const PrimmaMammariExamples: React.FC = () => {
  const breastAugmentationData = primmaGalleryData.find(
    (item) => item.id === 'breast-augmentation'
  );

  useEffect(() => {
    console.log('PrimmaMammariExamples: Дані галереї:', breastAugmentationData);
  }, [breastAugmentationData]);

  if (!breastAugmentationData) {
    console.error(
      'PrimmaMammariExamples: Дані про збільшення грудей не знайдено'
    );
    return <div>Дані не знайдено</div>;
  }

  return (
    <div className={styles.fullWidthBackground}>
      <div className={styles.container}>
        <div className={styles.primmaMammariExamples}>
          <div className={styles.containerExamples}>
            <div className={styles.examplesText}>
              <h1>ЗБІЛЬШЕННЯ МОЛОЧНИХ ЗАЛОЗ</h1>
              <div className={styles.subTitle}>
                <ul>
                  <li>Корекція асиметрії</li>
                  <li>Індивідуальний підбір імплантів для бажаного обєму</li>
                  <li>
                    Сучасні імплантати від світових виробників, що не потребують
                    заміни
                  </li>
                  <li>Комплект білизни для реабілітації у подарунок</li>
                </ul>
              </div>
            </div>

            <div className={styles.galleryContainer}>
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
      </div>
      <BreastProblemsCorrection backgroundColor="#DCEBB3FF" />
      <PlasticSurgeons />
      <ConsultationBreastAugmentation />
      <BlockAugmentBreastProcess />
      {/* <ClinicSurgical /> */}
      {/* <BreastSizeProblem /> */}
      {/* <BreastQuestion /> */}
    </div>
  );
};

export default PrimmaMammariExamples;
