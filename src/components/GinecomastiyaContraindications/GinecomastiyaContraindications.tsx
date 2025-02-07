import type React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './GinecomastiyaContraindications.module.css';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';

interface GinecomastiyaContraindicationsProps {
  backgroundColor?: string;
}

const GinecomastiyaContraindications: React.FC<
  GinecomastiyaContraindicationsProps
> = ({ backgroundColor = '#f5f5f5' }) => {
  const contraindications = [
    'серцева недостатність та інші патологічні захворювання серцево-судинної системи;',
    'хронічні захворювання печінки та нирок;',
    'цукровий діабет, надмірна вага та виражені ознаки ожиріння;',
    'порушення згортання крові;',
    'онкологічні захворювання.',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Протипоказання</h2>
        <p className={styles.description}>
          Гінекомастія лікування хірургічним шляхом показане пацієнтам не
          завжди. Є низка протипоказань, яких рекомендовано дотримуватися:
        </p>

        <div className={styles.content}>
          <div className={styles.contraindicationsList}>
            <ul>
              {contraindications.map((item, index) => (
                <li key={index}>
                  <ArrowRight size={16} className={styles.arrow} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContainer}>
            <PrimmaGallery
              images={[
                '/images/GinecomastiyaContraindications/Contraindicatio2.jpg',
                '/images/GinecomastiyaContraindications/Contraindicatio2.jpg',
                '/images/GinecomastiyaContraindications/Contraindicatio2.jpg',
              ]}
              galleryId="ginecomastiya-contraindications"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GinecomastiyaContraindications;
