'use client';

import { ChevronRight } from 'lucide-react';
import CardsPrimma from '../../components/CardsPrima/CardsPrima';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BenignSkinSurgery.module.css';
import type React from 'react'; // Added import for React

interface BenignSkinSurgeryProps {
  backgroundColor?: string;
}

const BenignSkinSurgery: React.FC<BenignSkinSurgeryProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const symptoms = [
    'новоутворення не проростає в сусідні тканини',
    'клітинні елементи не поширюються за межі пухлини',
    'формуються по принципу капсули',
    'повільно зростає',
    'збільшується рівномірно',
  ];

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  return (
    <div className={styles.benignSkinSurgery} style={{ backgroundColor }}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.textContent}>
            <h1>Доброякісні новоутворення шкіри і підшкірної клітковини</h1>
            <h3>Характерні особливості доброякісних новоутворень:</h3>
            <ul>
              {symptoms.map((symptom, index) => (
                <li key={index}>
                  <ChevronRight size={20} />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.galleryContent}>
            <PrimmaGallery
              images={galleryImages}
              galleryId="benign-gallery-1"
            />
          </div>
        </div>

        <div className={styles.cardsSection}>
          <CardsPrimma />
        </div>

        <div className={styles.fullWidthText}>
          <p>
            Вони не загрожують життю людини. Але іноді, під впливом негативних
            факторів вони можуть траснформуватися в злоякісні пухлини.
          </p>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.examplesContent}>
            <h2>Приклади робіт До-Після</h2>
          </div>
          <div className={styles.galleryContent}>
            <div className={styles.galleryHeader}>
              <h4>Пухлини доброякісні</h4>
            </div>
            <PrimmaGallery
              images={galleryImages}
              galleryId="benign-gallery-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenignSkinSurgery;
