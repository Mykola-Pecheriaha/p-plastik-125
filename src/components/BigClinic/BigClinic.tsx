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
              я проводжу у провідному медичному центрі — Vidnova Clinic.
              Операційний блок відповідає найвищим стандартам якості та безпеки
              GMP.
            </p>
            <p>
              Окрім хірургічної діяльності, я регулярно виступаю доповідачкою на
              міжнародних конференціях з пластичної хірургії, де ділюся своїм
              досвідом та унікальними напрацюваннями.
            </p>
            <h2>Удосконалюємо свою майстерність</h2>
            <p>
              Кожного року наша команда відвідує Грецію, де ми удосконалюємо
              своє мистецтво у найвидатніших хірургів світу, надихаємось
              справжньою красою митців стародавньої Греції. Ідеальні форми
              античної жіночої краси та принцип золотого перетину надихає на
              створення чарівної жіночості.
            </p>
            <Link href="/about-clinic">
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
