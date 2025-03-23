'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './BreastCombinIndications.module.css';
import type React from 'react';

interface BreastCombinIndicationsProps {
  backgroundColor?: string;
}

const BreastCombinIndications: React.FC<BreastCombinIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  return (
    <div className={styles.breastCombinIndications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Консультація перед пластичною хірургією грудей (мамопластикою)
        </h2>

        <div className={styles.introText}>
          <p>
            Перший крок на шляху до довгоочікуваного перетворення – консультація
            у пластичного хірурга Миколи Печеряги в Чернівцях. Можлива
            відеоконсультація.
          </p>
          <p>
            Під час індивідуальної зустрічі з пластичним хірургом ви обговорюєте
            побажання, які стосуються майбутнього результату та дивитесь фото до
            аналогічних випадків. Лікар підбирає методику, яка підходить саме
            вам, виходячи з побажань та індивідуальних особливостей. Пластична
            хірургиня визначить бажаний обєм імплантатів, їх форму (анатомічні
            або круглі), які найкраще підходитимуть вашому типу фігури та
            статурі.
          </p>
        </div>

        <div className={styles.imageSection}>
          <Image
            src="/images/BreastCombinIndications/grudnye-implanty-vidy-1.jpg"
            alt="Breast surgery consultation 1"
            width={500}
            height={400}
            className={styles.consultImage}
          />
          <Image
            src="/images/BreastCombinIndications/augmentation2.jpg"
            alt="Breast surgery consultation 2"
            width={500}
            height={400}
            className={styles.consultImage}
          />
        </div>

        <div className={styles.mainText}>
          <p>
            На консультації у вас буде унікальна можливість побачити свої нові
            груди ще до хірургічного втручання. Ви можете доторкнутися і
            приміряти зовнішні сайзери, що полегшують вибір імплантатів. Це
            допоможе остаточно зрозуміти, як ви виглядатимете і почуватиметеся з
            новою формою бюста.
          </p>
          <p>
            Компютерне моделювання грудей дасть вам можливість побачити
            запланований результат та обговорити з хірургом усі побажання та
            нюанси майбутньої зовнішності.
          </p>
          <p>
            Немісцевим пацієнтам для зручності та економії часу пропонується
            зробити мамопластику за 1 візит до клініки – поєднати консультацію,
            обстеження здачу аналізів та операцію. Перед цим ви проходите
            відеоконсультацію, визначаєтесь з датою операції. За 2 дні до
            хірургічного втручання прибуваєте до клініки, де проходите
            індивідуальну зустріч з хірургом.
          </p>
          <p>
            Додатково прийняти остаточне рішення щодо операції вам допоможуть
            відгуки та{' '}
            <Link href="/breast-album" className={styles.link}>
              результати «До – після»
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastCombinIndications;
