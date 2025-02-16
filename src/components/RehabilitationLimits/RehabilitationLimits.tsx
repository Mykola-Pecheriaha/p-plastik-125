'use client';

import { ChevronRight } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './RehabilitationLimits.module.css';
import type React from 'react';

interface RehabilitationLimitsProps {
  backgroundColor?: string;
}

const RehabilitationLimits: React.FC<RehabilitationLimitsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const restrictions = [
    {
      title: 'Фізична активність',
      content:
        'Під час реабілітації рекомендується утримуватися від інтенсивної фізичної активності та важких тренувань. Забороняється піднімання важких предметів.',
    },
    {
      title: 'Куріння та вживання алкоголю',
      content:
        'Куріння та вживання алкоголю можуть негативно впливати на процес загоєння та збільшувати ризик ускладнень.',
    },
    {
      title: 'Сонячне випромінювання',
      content:
        'Пацієнтам може бути рекомендовано обмежити перебування під палючим сонцем, оскільки воно може викликати подразнення та пігментацію шкіри.',
    },
    {
      title: 'Процедури краси',
      content:
        'Під час реабілітації рекомендується утриматися від процедур краси, таких як масаж обличчя чи апаратні процедури, які можуть травмувати операційну область.',
    },
    {
      title: 'Харчові обмеження',
      content:
        'Збалансована дієта сприятиме швидкому відновленню. Однак може бути необхідно уникати деяких продуктів чи добавок, які можуть впливати на процес загоєння.',
    },
    {
      title: 'Саун та гарячі ванни',
      content:
        'Висока температура може призвести до розширення судин та підвищення кровообігу, що може бути небажаним.',
    },
  ];

  return (
    <div className={styles.rehabilitationLimits} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Обмеження на час реабілітації</h2>

        <p className={styles.description}>
          Вони залежать від конкретного типу операції та індивідуальних
          особливостей пацієнта.
        </p>

        <p className={styles.description}>
          Період реабілітації після пластичної операції може супроводжуватися
          рядом обмежень, серед яких:
        </p>

        <div className={styles.content}>
          <div className={styles.restrictionsList}>
            <ul>
              {restrictions.map((restriction, index) => (
                <li key={index}>
                  <ChevronRight className={styles.icon} />
                  <div>
                    <strong>{restriction.title}.</strong> {restriction.content}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.gallery}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="rehabilitation-gallery"
            />
          </div>
        </div>

        <h2 className={styles.title}>Скільки часу триває відновлення?</h2>

        <p className={styles.description}>
          Час, необхідний на відновлення після операції, може значно
          відрізнятися. Він залежить від типу операції, обсягу хірургічного
          втручання, індивідуальних відчуттів пацієнта та інших факторів.
        </p>

        <p className={styles.description}>
          Загальний період відновлення – від кількох тижнів до декількох
          місяців. Під час цього періоду пацієнт може поступово повертатися до
          звичайного режиму життя, але деякі обмеження можуть залишатися залежно
          від характеру операції.
        </p>

        <p className={styles.description}>
          Повне відновлення та відсутність обмежень можуть встановлюватися
          лікарем після зазначеного часу, коли він визначить, що операційна
          область вже достатньо зажила та пацієнт може повертатися до
          повноцінного способу життя.
        </p>
      </div>
    </div>
  );
};

export default RehabilitationLimits;
