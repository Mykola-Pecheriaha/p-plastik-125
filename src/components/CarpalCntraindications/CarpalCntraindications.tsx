'use client';

import type React from 'react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './CarpalCntraindications.module.css';

interface CarpalCntraindicationsProps {
  backgroundColor?: string;
}

const CarpalCntraindications: React.FC<CarpalCntraindicationsProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.carpalCntraindications} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Симптоми карпального синдрому</h2>
        <h4 className={styles.subtitle}>
          Протипокази до оперативного лікування
        </h4>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <h2>Протипокази до планової операції</h2>
            <ul>
              <li>
                серцева недостатність та інші патологічні захворювання
                серцево-судинної системи;
              </li>
              <li>хронічні захворювання печінки та нирок</li>
              <li>цукровий діабет</li>
              <li>порушення згортання крові;</li>
              <li>онкологічні захворювання.</li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="carpal-contraindications-gallery-1"
            />
          </div>
        </div>

        <div className={styles.fullWidthText}>
          <p>
            При неможливості оперативного лікування виконується невропатологом
            консервативне лікуванні.
          </p>
          <p>
            Консервативне лікування часом проводиться і на початкових етапах
            захворювання
          </p>
        </div>

        <div className={styles.splitSection}>
          <div className={styles.textContent}>
            <h2>Напрямки консервативного лікування</h2>
            <ul>
              <li>
                Це зміна (при можливості) професії та модифікація способу життя,
                дотримання режиму праці та відпочинку
              </li>
              <li>
                Це носіння ортеза що понукає положення запястка в фізіологічному
                положенні і тим самим сприяє зменшеню тиску на серединний нерв
              </li>
              <li>
                Загальна лікарська терапія (НПЗП, засоби для поліпшення
                кровообігу, зняття набряклості); і фізіотерапія (масаж,
                електрофорез); також дещо покращує стан хворого
              </li>
              <li>
                Лікарські блокади щляхом введення анестетиків і кортикостероїдів
                (кеналог, дипроспан) в зону тунелю для купування болю і
                відновлення рухливості суглобів дає яскравий і виражений, але
                нетривалий ефект
              </li>
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="carpal-contraindications-gallery-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarpalCntraindications;
