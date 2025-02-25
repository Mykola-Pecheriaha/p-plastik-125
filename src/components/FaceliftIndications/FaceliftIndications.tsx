import type React from 'react';
import Image from 'next/legacy/image';
import { ArrowRight } from 'lucide-react';
import styles from './FaceliftIndications.module.css';

interface IndicationCardProps {
  image: string;
  description: string;
}

const IndicationCard: React.FC<IndicationCardProps> = ({
  image,
  description,
}) => (
  <div className={styles.card}>
    <Image
      src={image || '/placeholder.svg'}
      alt={description}
      className={styles.cardImage}
      width={100}
      height={100}
      layout="responsive"
    />
    <div className={styles.cardDescription}>
      <ArrowRight size={16} className={styles.arrow} />
      <p>{description}</p>
    </div>
  </div>
);

interface FaceliftIndicationsProps {
  backgroundColor?: string;
  cardsBackgroundColor?: string;
}

const FaceliftIndications: React.FC<FaceliftIndicationsProps> = ({
  backgroundColor = '#f0f0f0',
  cardsBackgroundColor = '#ffffff',
}) => {
  const indications = [
    {
      image: '/images/FaceLift/blefaro9.jpg',
      description: 'Помітне опущення зовнішніх куточків очей',
    },
    {
      image: '/images/FaceLift/facelifting13.jpg',
      description: "Провисання м'яких тканин шкіри в районі лоба та брів",
    },
    {
      image: '/images/FaceLift/indication3.jpg',
      description: 'Поява глибоких зморшок в області щік',
    },
    {
      image: '/images/FaceLift/indication4.jpg',
      description: "Поява «брилів», провисання м'яких тканин щік",
    },
    {
      image: '/images/FaceLift/indication5.jpg',
      description: 'Поява другого підборіддя',
    },
    {
      image: '/images/FaceLift/indication6.jpg',
      description: 'Формування складок та зморшок в області шиї',
    },
    {
      image: '/images/FaceLift/indication7.jpg',
      description: 'Втрата тонусу шийно-підборідного кута',
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Показання до операції підтяжки обличчя та шиї
        </h2>
        <p className={styles.subtitle}>
          Пластика обличчя та шиї усуває видимі ознаки старіння. Вона
          рекомендована при:
        </p>

        <div
          className={styles.cardGrid}
          style={{ backgroundColor: cardsBackgroundColor }}
        >
          {indications.map((indication, index) => (
            <IndicationCard key={index} {...indication} />
          ))}
        </div>

        <div className={styles.textSection}>
          <p>
            Корекція овалу обличчя рекомендується пацієнтам після 45 років за
            наявності відповідних показань. До цього віку пластичну операцію
            можна замінити іншими альтернативними безопераційними методиками.
            Наприклад, добрі результати показує контурна пластика обличчя. Вона
            має на увазі – інєкційну процедуру з використанням
            філерів-наповнювачів на основі натуральної гіалуронової кислоти.
            Вони заповнюють зморшки та складки, створюючи чіткий та підтягнутий
            овал.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaceliftIndications;
