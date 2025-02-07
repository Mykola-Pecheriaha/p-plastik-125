import type React from 'react';
import Image from "next/legacy/image";
import styles from './PrimaMammariAugment.module.css';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaMammariExamples from '../../components/PrimmaMammariExamples/PrimmaMammariExamples';

interface PrimaMammariAugmentProps {
  backgroundColor?: string;
}

const PrimaMammariAugment: React.FC<PrimaMammariAugmentProps> = ({
  backgroundColor = '#F8F8F8FF',
}) => {
  return (
    <div className={styles.wrapper}>
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

      {/* Описовий текст */}
      <div>
        <CardsPrimma />
      </div>
      <div className={styles.mammoplastySection}>
        <div className={styles.sectorText}>
          <h2>Що таке мамопластика?</h2>
        </div>

        <p>
          Мамопластика – це операція на молочних залозах, яка передбачає
          використання імплантів. Вони дозволяють не тільки збільшити розмір,
          але й створити красиву форму грудей.
        </p>
        <p>
          Аугментаційна мамопластика – це операція зі збільшення грудей та
          корекції їх форми.
        </p>
        <p>
          Збільшення грудей – це найбільш затребувана послуга, бо ця частина
          тіла вважається ознакою жіночності. Тож будь-які недоліки, пов’язані
          із формою, розміром чи симетричністю викликають великі комплекси,
          жінка не відчуває себе сексуальною та привабливою.
        </p>
      </div>
      <PrimmaMammariExamples />
    </div>
  );
};

export default PrimaMammariAugment;
