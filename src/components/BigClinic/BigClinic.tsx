'use client';

import React from 'react';
import Link from 'next/link';
import GalleryClinic from '../GalleryClinic/GalleryClinic';
import styles from './BigClinic.module.css';
import bigClinic from '../../data/bigClinic';

const BigClinic: React.FC = () => {
  return (
    <div className={styles.bigClinic}>
      <h2 className={styles.bigClinicTitle}>
        Велика клініка - великі можливості
      </h2>
      <div className={styles.containerBigClinic}>
        <div className={styles.bigClinicText}>
          <h3>Про клініку, в якій я оперую</h3>
          <div className={styles.subTitle}>
            <p>
              Як часто ми говоримо про красу та удосконалення зовнішності, не
              зосереджуючи увагу на тому, в яких умовах це відбувається. Без
              сучасного обладнання, операційної та дотримання норм стерильності
              безпечно створити бездоганний образ просто неможливо. Усі операції
              я проводжу у провідному медичному центрі — Центральна міська
              клінічна лікарня м.Чернівці. Операційний блок відповідає найвищим
              стандартам якості та безпеки GMP.
            </p>
            <p>
              Окрім хірургічної діяльності, я регулярно виступаю доповідачкою на
              міжнародних конференціях з пластичної хірургії, де ділюся своїм
              досвідом та унікальними напрацюваннями.
            </p>
            <h2>Удосконалюємо свою майстерність</h2>
            <p>
              Кожного року наша команда відвідує провідні міжнародні конгреси,
              де прослуховуємо доповіді визнаних спеціалістів в галузі
              пластичної хірургії , де розбирають новітні, більш дієві
              технології для досягнення кращих результатів при вирішенні тих чи
              інших проблем та ситуації в нашій роботі.
            </p>
            <Link href="/about-doctor/contacts">
              <button className={styles.contactButton}>
                Дізнатися більше про клініку
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.bigClinicImage}>
          <GalleryClinic images={bigClinic} />
        </div>
      </div>
    </div>
  );
};

export default BigClinic;
