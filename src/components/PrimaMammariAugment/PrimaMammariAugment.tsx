import type React from 'react';
import Image from 'next/image';
import styles from './PrimaMammariAugment.module.css';

interface PrimaMammariAugmentProps {
  backgroundColor?: string;
}

const PrimaMammariAugment: React.FC<PrimaMammariAugmentProps> = ({
  backgroundColor = '#F8F8F8FF',
}) => {
  return (
    <section className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Image
            src="/images/breast-augmento/cartca5-removebg-preview.png"
            alt="Збільшення грудей"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.rightSection}>
          <h2>Збільшення грудей мамопластика</h2>
          <ul>
            <li>Бажаний обєм</li>
            <li>Ідеальна форма</li>
            <li>Довічний результат</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrimaMammariAugment;
