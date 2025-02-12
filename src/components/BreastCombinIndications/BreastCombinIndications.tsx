'use client';

import Image from 'next/image';
import Link from 'next/link';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastCombinIndications.module.css';
import type React from 'react';

interface BreastCombinIndicationsProps {
  backgroundColor?: string;
}

const BreastCombinIndications: React.FC<BreastCombinIndicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

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
            Під час індивідуальної зустрічі зі Миколою Печерягою ви обговорюєте
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
            src="/placeholder.svg?height=400&width=500"
            alt="Breast surgery consultation 1"
            width={500}
            height={400}
            className={styles.consultImage}
          />
          <Image
            src="/placeholder.svg?height=400&width=500"
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

        <h2 className={styles.modelingTitle}>3D моделювання результату</h2>

        <div className={styles.modelingSection}>
          <div className={styles.textContent}>
            <p>
              На консультації пацієнтка зможе побачити свої нові груди ще до
              операції! Це можливо завдяки унікальній технології 3D-моделювання
              тіла на апараті нового покоління VECTRA. Пластичний хірург робить
              фотографію пацієнтки з різних ракурсів.
            </p>
            <p>
              Пластичний хірург робить фотографію пацієнта з різних ракурсів.
              Фото обробляються в системі тривимірного моделювання та виводяться
              на екран компютера у різноманітних проекціях. Разом із фахівцем
              створюються нові форми!
            </p>
            <p>
              3D-візуалізація дозволяє наочно визначитися з формою та розміром
              імплантату. Також можна спрогнозувати результат заміни
              встановлених імплантатів на нові. 3D-моделювання дозволяє досягти
              абсолютно природної та красивої форми грудей!
            </p>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="breast-modeling-gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastCombinIndications;
