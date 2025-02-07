'use client';

import type React from 'react';
import Image from "next/legacy/image";
import { ArrowRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './GinecomastiyaIndications.module.css';

interface GinecomastiyaIndicationsProps {
  backgroundColor?: string;
}

const GinecomastiyaIndications: React.FC<GinecomastiyaIndicationsProps> = ({
  backgroundColor = '#f5f5f5',
}) => {
  const indications = [
    'симетрична або асиметрична надмірна зміна грудей;',
    'виділення із соска при натисканні на нього;',
    'ущільнення та твердість;',
    'біль під час пальпації;',
    'відчуття тяжкості та дискомфорту в області грудей',
  ];

  const galleryImages = [
    '/images/GinecomastiyaIndications/ginecomas6.jpg',
    '/images/GinecomastiyaIndications/ginecomas9.jpg',
    '/images/GinecomastiyaIndications/ginecomas11.jpg',
    '/images/GinecomastiyaIndications/ginecomas10.jpg',
    '/images/GinecomastiyaIndications/ginecomas12.jpg',
  ];

  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Лікування гінекомастії: показання до операції
        </h2>
        <p className={styles.subtitle}>
          Існує два види патології: істинна та хибна (псевдогінекомастія).
        </p>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p>
              Справжня – порушення виникає внаслідок ендокринних змін при
              захворюваннях, прийомі гормональних чи інших препаратів.
              Наприклад, прийом стероїдів може зробити таку дію, про що свідчать
              дані кількох міжнародних досліджень. Такий вид досить часто
              зустрічається у хлопчиків у підлітковому періоді. Тоді
              рекомендовано прийом медикаментозних препаратів. Однак у менш ніж
              10% чоловіків ці порушення трапляються у більш зрілому віці.
            </p>
            <p>
              Хибна – виникає при надлишку ваги та значному ожирінні. Це
              відкладення жирової тканини, яке збільшує груди.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image
              src="/images/GinecomastiyaIndications/ginecomas6.jpg"
              alt="Види гінекомастії"
              width={400}
              height={300}
              layout="responsive"
            />
            <Image
              src="/images/GinecomastiyaIndications/ginecomas8.jpg"
              alt="Види гінекомастії"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>

        <p className={styles.fullWidth}>
          Найчастіше патологія спостерігається з двох сторін, однак, у деяких
          випадках, може уражатися і одна сторона. Це не лише косметичний
          недолік, в окремих випадках один із симптомів серйозних порушень у
          роботі організму. Отже, необхідно пройти комплексне обстеження, щоб
          визначити природу хвороби
        </p>

        <h3 className={styles.subTitle}>
          Операція гінекомастія у чоловіків показана у таких випадках:
        </h3>

        <div className={styles.indicationsWrapper}>
          <ul className={styles.indicationsList}>
            {indications.map((indication, index) => (
              <li key={index} className={styles.indicationItem}>
                <ArrowRight size={16} className={styles.arrow} />
                {indication}
              </li>
            ))}
          </ul>
          <div className={styles.galleryWrapper}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="ginecomastiya-indications"
            />
          </div>
        </div>

        <p className={styles.conclusion}>
          Патологія ефективно піддається усуненню. Це важливий крок до
          покращення якості життя та повернення віри у свою привабливість.
        </p>
      </div>
    </div>
  );
};

export default GinecomastiyaIndications;
