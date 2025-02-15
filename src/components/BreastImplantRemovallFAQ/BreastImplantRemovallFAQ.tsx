'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PrimmaGallery from '../PrimmaGallery/PrimmaGallery';
import styles from './BreastImplantRemovallFAQ.module.css';
import type React from 'react';

interface BreastImplantRemovallFAQProps {
  backgroundColor?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const BreastImplantRemovallFAQ: React.FC<BreastImplantRemovallFAQProps> = ({
  backgroundColor = '#f0f4f8',
}) => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 'duration',
      question: 'Скільки триває операція',
      answer:
        'Тривалість хірургічного втручання залежить від обсягу. Орієнтовно займає – 1,5 години. Під час консультації спеціаліст зможе уточнити точний операційний час.',
    },
    {
      id: 'anesthesia',
      question: 'Яке знеболення при операції',
      answer:
        'Використовується місцеве знеболення, яке забезпечує сто відсоткое знеболення та комфортні умови для операції як для пацієнта так і для хірурга',
    },
    {
      id: 'essence',
      question: 'Суть операції',
      answer: 'видаляється імплант і капсула навколо нього',
    },
  ];

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
    <div
      className={styles.breastImplantRemovallFAQ}
      style={{ backgroundColor }}
    >
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Поширені запитання</h1>

        <div className={styles.faqList}>
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.faqItem} ${isOpen ? styles.expanded : ''}`}
              >
                <button
                  className={styles.faqButton}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{item.question}</span>
                  <ChevronDown
                    className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
                  />
                </button>

                {isOpen && (
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreastImplantRemovallFAQ;
