import type React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './BlefaroIndications.module.css';

interface IndicationCardProps {
  image: string;
  description: string;
}

const IndicationCard: React.FC<IndicationCardProps> = ({
  image,
  description,
}) => (
  <div className={styles.card}>
    <div className={styles.cardImageWrapper}>
      <Image
        src={image || '/placeholder.svg'}
        alt={description}
        layout="fill"
        objectFit="cover"
        className={styles.cardImage}
      />
    </div>
    <div className={styles.cardDescription}>
      <ArrowRight size={16} className={styles.arrow} />
      <p>{description}</p>
    </div>
  </div>
);

interface BlefaroIndicationsProps {
  backgroundColor?: string;
}

const BlefaroIndications: React.FC<BlefaroIndicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const indications = [
    {
      image: '/images/blefaro/indication1.jpg',
      description:
        'надлишок шкіри на верхніх (птоз) і нижніх («похмурий погляд») повіках',
    },
    {
      image: '/images/blefaro/indication2.jpg',
      description: 'жирові випинання (псевдогрижі) з надлишком шкіри',
    },
    {
      image: '/images/blefaro/indication3.jpg',
      description: '«мішки» під очима (жирові грижі)',
    },
    {
      image: '/images/blefaro/indication4.jpg',
      description: 'дрібні або глибокі зморшки навколо очей',
    },
    {
      image: '/images/blefaro/indication5.jpg',
      description: 'надлишок шкіри навколо очей',
    },
    {
      image: '/images/blefaro/indication6.jpg',
      description: 'опущені нижні куточки очей',
    },
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Показання до пластики повік</h2>

        <p className={styles.description}>
          Блефаропластика часто рекомендована пацієнтам середнього віку. Коли
          шкіра повік починає втрачати пружність та еластичність, що
          проявляється птозом (надлишковим провисанням). Перші ознаки вікових
          змін: зморшки та мішки під очима. Це значно погіршує вигляд людини,
          візуально додаючи зайвих років.
        </p>
        <p className={styles.description}>
          Також блефаропластика виконується і в молодшому віці, коли до
          втручання є певна анатомічна схильність.
        </p>

        <h3 className={styles.subtitle}>Основні показання:</h3>

        <div className={styles.cardGrid}>
          {indications.map((indication, index) => (
            <IndicationCard key={index} {...indication} />
          ))}
        </div>

        <div className={styles.bottomText}>
          <p>
            Корекція повік вважається однією з найбільш затребуваних операцій.
            Це єдиний спосіб зупинити старіння і повернути собі молодий вигляд.
            Сучасна медична косметологія з арсеналом процедур не зможе
            кардинально виправити ситуацію, коли тканини втрачають свою
            еластичність.
          </p>
          <p>
            Професійно проведена блефаропластика в стані значно покращити
            зовнішній вигляд обличчя, уповільнити ознаки старіння шкіри в
            області очей, що розвиваються, дати істотний омолоджуючий ефект на
            тривалий час. Пацієнт отримує гарантований та тривалий результат.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlefaroIndications;
