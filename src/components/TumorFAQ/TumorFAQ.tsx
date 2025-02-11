'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './TumorFAQ.module.css';
import type React from 'react'; // Added import for React

interface TumorFAQProps {
  backgroundColor?: string;
}

interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItemType[] = [
  {
    id: 'operation-time',
    question: 'Скільки триває операція при видаленні новоутворень',
    answer: 'Хірургічне втручання займає від 30 хв і в залежно від обсягу.',
  },
  {
    id: 'anesthesia',
    question: 'Яке знеболення при операції',
    answer:
      'Використовується те знеболення, яке забезпечує сто відсоткое знеболення та комфортні умови для операції як для пацієнта так і для хірурга. Частіше це місцеве, але при потребі і загальне знеболення.',
  },
  {
    id: 'results-timing',
    question:
      'Через скільки часу будуть відомі результати патгістологічного дослідження',
    answer: 'Як правило до двух тижнів.',
  },
];

const TumorFAQ: React.FC<TumorFAQProps> = ({ backgroundColor = '#f0f4f8' }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const galleryImages = [
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
    '/placeholder.svg?height=300&width=300',
  ];

  const toggleItem = (itemId: string) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className={styles.tumorFAQ} style={{ backgroundColor }}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Поширені запитання</h1>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${openItemId === item.id ? styles.expanded : ''}`}
            >
              <button
                className={styles.faqButton}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItemId === item.id}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`${styles.arrow} ${openItemId === item.id ? styles.rotated : ''}`}
                />
              </button>

              {openItemId === item.id && (
                <div className={styles.faqContent}>
                  <div className={styles.textContent}>
                    <p>{item.answer}</p>
                  </div>
                  <div className={styles.galleryContent}>
                    <PrimmaGallery
                      images={galleryImages}
                      galleryId={`faq-gallery-${item.id}`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TumorFAQ;
